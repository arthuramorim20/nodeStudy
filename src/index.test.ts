import GetFIle from './index';
import { ERROR_MESSAGE } from './constraints';
import { rejects } from 'node:assert';
// import { join } from 'node:path'



(async () => {
    const filePath = '../mocks/agentes.csv';
    const rejection = ERROR_MESSAGE.formatInvalid;
    const result = GetFIle.csvToJson(filePath);

    // console.log(result)

    return await rejects(result
        .then((file)=> console.log(file))
        .catch(() => rejection)
    );
})()