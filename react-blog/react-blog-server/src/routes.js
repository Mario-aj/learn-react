import { Router } from 'express';
import RegisterControllers from './controllers/register';
import LoginControllers from './controllers/login';
import PostControllers from './controllers/post';

const Routes = Router();

Routes.post('/register', RegisterControllers.store);
Routes.get('/login', LoginControllers.authenticat);
Routes.post('/post', PostControllers.store);
Routes.get('/posts', PostControllers.index);

export default Routes;
