import { Router } from 'express';
import userRoutes from '../modules/user/routes/user.routes';
import sessionRoutes from '../modules/security/session/routes/session.route';
import roleRoutes from '../modules/security/role/routes/role.routes';
import userRoleRoutes from '../modules/security/user-role/routes/userRole.routes';
import excelJsonRoutes from '../modules/excel-to-json/routes/excel.routes';

const routes = Router();

routes.use(userRoutes); // rotas dos usuarios
routes.use(sessionRoutes); // rota de sessao, login, etc...
routes.use(roleRoutes); // rotas dos roles
routes.use(userRoleRoutes); // rotas da juncao user e roles

routes.use(excelJsonRoutes);

routes.get('/', (_, response) => {
  response.json({
    project: 'API Santana',
    description:
      'Esta api faz o acesso, permissoes e configuracoes do site do CDP',
    message: 'Just do it!',
  });
});

export default routes;
