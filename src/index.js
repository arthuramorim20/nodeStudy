"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
class GetFIle {
    static csvToJson(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield GetFIle.csvToJson(filePath);
            return content;
        });
    }
    static getFileContent(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = (0, node_path_1.join)(__dirname, filePath);
            return (yield (0, promises_1.readFile)(fileName)).toString();
        });
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const csv = yield GetFIle.getFileContent('../mocks/agentes.csv');
    console.log(csv);
}))();
