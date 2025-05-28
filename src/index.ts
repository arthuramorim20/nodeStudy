import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

class GetFIle {
    static async csvToJson (filePath:any) { //Métodos estáticos podem ser acessados sem new keyword
        const content:any = await GetFIle.csvToJson(filePath)
        return content;
    }

    static async getFileContent (filePath:any) {
        const fileName = join(__dirname, filePath)
        return (await readFile(fileName)).toString();
    }
}

(async() => {
    const csv = await GetFIle.getFileContent('../mocks/agentes.csv');
    console.log(csv) 
})();
