const Router = require('koa-router');
;
const apiRouter = new Router()
const nonApiRouter = new Router();
const authRouter = new Router();

import { register } from '../mediators/user';
import { homepage, login } from '../mediators/common';

// NON-API
nonApiRouter.get('/', homepage);

// API
authRouter.post('/login', login);
authRouter.post('/register', register);

apiRouter.use('/', nonApiRouter.routes());
apiRouter.use('/api/auth', authRouter.routes());


export { apiRouter, nonApiRouter };
