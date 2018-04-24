import Knex from 'knex';
import { Model } from 'objection';
import { DB_DRIVER, DB_CONNECTION, DB_POOL } from '../db';

const knex = new Knex({
    client: DB_DRIVER,
    connection: DB_CONNECTION,
    pool: DB_POOL,
    debug: true
});

Model.knex(knex);

export { Model };
