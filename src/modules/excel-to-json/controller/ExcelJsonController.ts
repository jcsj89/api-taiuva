import { Request, Response } from 'express';
import Convert2JsonService from '../services/Convert2JsonService';

export default class ExcelJsonController {
  public async index(request: Request, response: Response): Promise<Response> {
    const convert = new Convert2JsonService();

    const file = 'public/Pasta2.xlsx';

    const json = await convert.execute({ file });
    console.log(json);
    return response.json({ json });
  }
}
