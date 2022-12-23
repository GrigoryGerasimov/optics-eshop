import { httpService } from "./httpService.js";

const productEndpoint = "products/";

export const productService = {
    create: async payload => {
        const { data } = await httpService.post(productEndpoint, payload);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.put(productEndpoint + id, payload);
        return data;
    },
    delete: async id => {
        await httpService.remove(productEndpoint + id);
        return id;
    }
};
