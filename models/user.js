import { ValidationError } from 'objection';
const crypto = require('crypto');

import { Model } from '../config/knex';
import { cryptoConfig } from "../config/crypto";

export class User extends Model {

    static tableName = 'users';
    static idColumn = 'id';
    static virtualAttributes = ['password'];

    static jsonSchema  = {
        type: 'object',
        required: [ 'email' ],
        properties: {
            id: { type: 'integer' },
            displayName: { type: 'string' },
            email: { type: 'string' },
            passwordHash: { type: 'string' },
            salt: { type: 'string' }

            /*pendingVerifyEmail: { type: 'string' },
            verifyEmailRedirect: { type: 'string' },
            verifyEmailToken: { type: 'string' },//index??
            verifiedEmail: { type: 'boolean' }*/
        }
    };

    get password() {
        return 'default'.toString();
    }

    set password(password) {

        if (password !== undefined) {
            if (password.length < 4) {
                throw new ValidationError({
                    type : 'ModelValidation',
                    message: 'Password can be long less than 5 symbols'
                });
            }
        }

        // this._plainPassword = password;

        if (password) {
            this.salt = crypto.randomBytes(cryptoConfig.hash.length)
                .toString('base64');

            this.passwordHash = crypto.pbkdf2Sync(
                password,
                this.salt,
                cryptoConfig.hash.iterations,
                cryptoConfig.hash.length,
                'sha256'
            ).toString('base64');
        } else {
            this.salt = undefined;
            this.passwordHash = undefined;
        }
    }

    checkPassword(password) {

        /* empty password means no login by password */
        if (!password) {
            return false;
        }

        /* ctx user does not have password (the line below would hang!) */
        if (!this.passwordHash) {
            return false;
        }

        return crypto.pbkdf2Sync(
            password,
            this.salt,
            cryptoConfig.hash.iterations,
            cryptoConfig.hash.length,
            'sha256'
        ).toString('base64') == this.passwordHash;
    }
}
