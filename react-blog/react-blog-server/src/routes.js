import { Router } from 'express';
import RegisterControllers from './controllers/register';
import LoginControllers from './controllers/login';

const Routes = Router();

Routes.post('/register', RegisterControllers.store);
Routes.get('/login', LoginControllers.authenticat);

export default Routes;
