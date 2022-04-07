import { Router } from 'express';
import ExcelJsonController from '../controller/ExcelJsonController';

const excelJsonController = new ExcelJsonController();
const excelJsonRoutes = Router();

excelJsonRoutes.get('/convert', excelJsonController.index);

export default excelJsonRoutes;
