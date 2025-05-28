import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DEFAULT_OPTION = {    
    maxLines: 3,
    fields: [ "id", "nome", "cargo", "setor"]
}

class GetFIle {
    static async csvToJson (filePath:any) { //Métodos estáticos podem ser acessados sem new keyword
        const content:any = await GetFIle.getFileContent(filePath)
        const validation = GetFIle.isValid(content)
        return content;
    }

    static async getFileContent (filePath:any) {
        const fileName = join(__dirname, filePath)

        return (await readFile(fileName)).toString("utf-8");
    }

    static isValid (csvString:any, options = DEFAULT_OPTION) {
        const lines = csvString.split('\n');
        console.log('Lines' ,lines)
    }
}

(async() => {
    const csv = await GetFIle.csvToJson('../mocks/agentes.csv');
})();
