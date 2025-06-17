import { readFile } from 'fs/promises';
import { join } from 'path';
import { ERROR_MESSAGE } from './constraints.js';

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id", "nome", "idade", "cargo", "setor"]
};

class GetFIle {
    static async csvToJson(filePath: string) { //Métodos estáticos podem ser acessados sem new keyword
        const content = await GetFIle.getFileContent(filePath);  //entrega o arquivo 
        const validation = GetFIle.isValid(content);

        if (!validation?.valid) throw new Error(validation?.error);

        const convertJsonFile = GetFIle.parseCsvToJson(content);
        return convertJsonFile;
    };

    static async getFileContent(filePath: string) {  //obter o arquivo e o join irá tratar caminhos. Deve ser passado UTF-8
        const fileName = join(__dirname, filePath)

        return (await readFile(fileName)).toString("utf8");
    };

    static parseCsvToJson(filePath: string) {
        const line = filePath.split('\n');
        //remove o header
        const firstLine = line.shift() as string;
        const header = firstLine.split(',');
        const users = line.map((line) => {
            const columns = line.split(',');
            let user: { [key: string]: string } = {};

            for (const index in columns) {
                user[header[index]] = columns[index];
            }
            return user

        });
        console.log(users);
    }

    static isValid(csvString: string, options = DEFAULT_OPTION) { //Será feita a validação //param já recebeu o dado
        const [header, ...fileWithoutHeader] = csvString.split('\n');
        const isHeaderValid = header.trim() === options.fields.join(','); //valor retornado é true
        if (!isHeaderValid) { //aqui caso venha false
            return {
                error: ERROR_MESSAGE.formatInvalid,
                valid: false
            }
        };

        const isContentLengthAccepted = ( //validação do total de linhas
            fileWithoutHeader.length > 0 &&
            fileWithoutHeader.length <= options.maxLines
        )

        if (!isContentLengthAccepted) {
            return {
                error: ERROR_MESSAGE.lengthInValid,
                valid: false
            }
        }

        return {
            valid: true
        }
    };

};

export default GetFIle;
