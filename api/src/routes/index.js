import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';

const routes = new Router();

routes.get('/alunos', AlunosController.index);

export default routes;
