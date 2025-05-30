import GetFIle from './index';
import { ERROR_MESSAGE } from './constraints';
import { rejects } from 'node:assert';



(async () => {
    const filePath = './mocks/agentes.csv';
    const rejection = ERROR_MESSAGE.formatInvalid;
    const result = GetFIle.csvToJson(filePath);

    await console.log(rejects(result, rejection))
})()