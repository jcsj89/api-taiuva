/* eslint-disable prettier/prettier */
import knex from '../../../database/connection';
import AppError from '../../../middleware/AppError';
import readXlsxFile from 'read-excel-file/node';

interface IRequest {
  file: string;
}

export default class Convert2JsonService {
  public async execute({ file }: IRequest) {
    let resp = {};

    const map = {
      DET_NOME: 'DET_NOME',
      DET_MATRICULA: 'DET_MATRICULA',
      DET_DIGITO: 'DET_DIGITO',
      MATRICULA_DIGITO: 'MATRICULA_DIGITO',
      INC_PROCEDENCIA: 'INC_PROCEDENCIA',
      INC_RAIO: 'INC_RAIO',
      INC_CELA: 'INC_CELA',
      LOCALIZACAO: 'LOCALIZACAO',
      VIS_ID: 'VIS_ID',
      VIS_NOME: 'VIS_NOME',
      VIS_PARLATORIO: 'VIS_PARLATORIO',
      VIS_RG: 'VIS_RG',
      VIS_CPF: 'VIS_CPF',
      DVI_PARENTESCO: 'DVI_PARENTESCO',
      VIS_DATANASCIMENTO: 'VIS_DATANASCIMENTO',
      VIS_SEXO: 'VIS_SEXO',
      VIS_VENCIMENTO: 'VIS_VENCIMENTO',
      VIS_ENDERECO_VENC: 'VIS_ENDERECO_VENC',
      VIS_ENDERECO: 'VIS_ENDERECO',
      VIS_CIDADE_ID: 'VIS_CIDADE_ID',
      ENDERECO_CIDADE: 'ENDERECO_CIDADE',
      ENDERECO_UF: 'ENDERECO_UF',
      VIS_BLOQUEADO: 'VIS_BLOQUEADO',
      VIS_DATACADASTRO: 'VIS_DATACADASTRO',
      VIS_DATAALTERACAO: 'VIS_DATAALTERACAO',
      DVI_STATUS: 'DVI_STATUS',
      VIS_OBS: 'VIS_OBS',
      VIS_OBS_DISPONIVEL: 'VIS_OBS_DISPONIVEL',
      MOVIMENTACAO_DATA: 'MOVIMENTACAO_DATA',
      MOVIMENTACAO_MOTIVO: 'MOVIMENTACAO_MOTIVO',
      IDADE: 'IDADE',
    };

    // File path.
    await readXlsxFile(file, { map }).then(
      (rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        // if (!rows.length !== 0) throw new AppError('erro no excel');
        // console.log(JSON.stringify(rows));
        // console.log(typeof rows);

        // JSON.stringify(rows);
        resp = rows;
      },
      function (e) {
        console.log(e);
      },
    );
    return resp;
  }
}

// // Readable Stream.
// readXlsxFile(fs.createReadStream('/path/to/file')).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })
