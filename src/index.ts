import { readFile } from 'fs/promises';
import { join } from 'path';

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id", "nome", "idade", "cargo", "setor"]
}

class GetFIle {
    static async csvToJson(filePath: string) { //Métodos estáticos podem ser acessados sem new keyword
        const content = await GetFIle.getFileContent(filePath);  //entrega o arquivo 
        const validation = GetFIle.isValid(content);

        if (!validation?.valid) throw new Error(validation?.error);

        return content;
    }

    static async getFileContent(filePath: string) {  //obter o arquivo e o join irá tratar caminhos. Deve ser passado UTF-8
        const fileName = join(__dirname, filePath)

        return (await readFile(fileName)).toString("utf8");
    }

    static isValid(csvString: string, options = DEFAULT_OPTION) { //Será feita a validação
        const [header, ...fileWithoutHeader] = csvString.split('\n');
        const isHeaderValid = header.trim() === options.fields.join(','); //valor retornado é true
        if (!isHeaderValid) { //aqui caso venha false
            return {
                error: "Inválido",
                valid: false
            }
        }
    }
}

(async () => {
    // const csv = await GetFIle.csvToJson('../mocks/agentesThreeColumn.csv');
    const csv = await GetFIle.csvToJson('../mocks/agentes.csv');
    console.log("Result", csv)

})();

console.log('hellow')