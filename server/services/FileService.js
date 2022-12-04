const uuid = require('uuid');
const path = require("path");
const fs = require("fs/promises");

class FileService {
    static async save (payload) {
        try {
            const fileName = `${uuid.v4()}${payload.name.slice(payload.name.lastIndexOf("."))}`;
            const filePath = path.resolve(__dirname, "../static", fileName);
            await payload.mv(filePath);
            return fileName;
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки файл не был загружен");
        }
    }

    static async delete (fileName) {
        try {
            await fs.rm(path.resolve(__dirname, "../static", fileName));
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки удаление файла не смогло быть завершено");
        }
    }
}

module.exports = {
    FileService
};
