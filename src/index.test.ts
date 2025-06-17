import GetFIle from './index';
import { ERROR_MESSAGE } from './constraints';
import { rejects, deepStrictEqual } from 'node:assert';
// import { dirname, join } from 'node:path'



(async () => { //consigo criar contextos dentro do IIFE, basicamente como se fossem escopos(Funções) diferentes
    // {
    //     const filePath = './mocks/agentesThreeColumn.csv';
    //     const rejection = ERROR_MESSAGE.formatInvalid;
    //     const result = GetFIle.csvToJson(filePath);
    //     await rejects(result, rejection);
    // }
    {
        const filePath = '../mocks/agentes.csv';
        const rejection = ERROR_MESSAGE.formatInvalid;
        const expected = [
            {
                "id": 12,
                "nome": "Arthur",
                "idade": 21,
                "cargo": "Técnico",
                "setor": "Manutenção"
            },
            {
                "id": 123,
                "nome": "Kaycky",
                "idade": 21,
                "cargo": "AuxiliarTécnico",
                "setor": "Manutenção"
            },
            {
                "id": 123,
                "nome": "Kaycky",
                "idade": 21,
                "cargo": "AuxiliarTécnico",
                "setor": "Manutenção"
            }
        ];
        // const pathCurret = join(__dirname, "../mocks/agentes.csv")
        const result = await GetFIle.csvToJson(filePath);
        // await rejects(result, rejection);
        // const curretFile = GetFIle.parseCsvToJson(result);
        deepStrictEqual(expected, result);

    }

    // console.log(result)
})();