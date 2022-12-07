const { models } = require("../models/index");
const fsSync = require("fs");
const path = require("path");
const { FileService } = require("./FileService");

class UserService {
    static async read () {
        try {
            return await models.User.find().exec();
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }

    static async readById (id) {
        try {
            return await models.User.findById(id).exec();
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки невозможно выполнение операции. Повторите попытку");
        }
    }
    static async create (file, payload) {
        if (!payload) throw new Error("Отсутствуют данные для создания нового пользователя");

        try {
            const newBoundAttachment = file ? await FileService.save(file) : null;
            const newEntity = await models.User.create({ ...payload, fileName: newBoundAttachment });
            await newEntity.save();
            return newEntity;
        } catch (err) {
            process.env.NODE_ENV === "development" && console.log(err);
            throw new Error("Вследствие возникшей ошибки запись нового пользователя не могла быть создана");
        }
    }

    static async update (id, file, payload) {
        if (!payload) throw new Error("Отсутствуют данные для обновления");

        try {
            const entityToUpdate = await models.User.findById(id).exec();
            const boundAttachmentName = entityToUpdate?.fileName;
            let newBoundAttachment;
            if (boundAttachmentName) {
                if (fsSync.existsSync(path.resolve(__dirname, "../static", boundAttachmentName))) {
                    await FileService.delete(boundAttachmentName);
                    newBoundAttachment = await FileService.save(file);
                } else {
                    newBoundAttachment = await FileService.save(file);
                }
            }

            const updatedEntity = await models.User.findByIdAndUpdate(id, { ...payload, fileName: newBoundAttachment }, { new: true }).exec();
            await updatedEntity.save();
            return updatedEntity;
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки данные пользователя не смогли быть изменены");
        }
    }

    static async delete (id) {
        try {
            const entityToDelete = await models.User.findById(id).exec();
            const boundAttachmentName = entityToDelete?.fileName;
            if (boundAttachmentName && fsSync.existsSync(path.resolve(__dirname, "../static", boundAttachmentName))) await FileService.delete(boundAttachmentName);
            await models.User.findByIdAndDelete(id);
        } catch (err) {
            throw new Error("Вследствие возникшей ошибки пользователь не мог быть удалён");
        }
    }
}

module.exports = {
    UserService
};
