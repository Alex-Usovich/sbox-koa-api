import { User } from "../../models/user";

const register = async (ctx, next) => {
    try {
        await User.query().insert({
            email: ctx.request.body.email.toLowerCase(),
            password: ctx.request.body.password,
            displayName: ctx.request.body.displayName
        });

        ctx.body = 'registered';

    } catch(e) {
        if (e.name === 'ValidationError') {
            let errorMessages = '';

            for (let key in e.errors) {
                errorMessages += `${key}: ${e.errors[key].message}<br>`;
            }
        } else {
            ctx.throw(e);
        }
    }
};

export { register };
