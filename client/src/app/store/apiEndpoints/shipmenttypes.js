import { backendApi } from "../backendApi.js";

const shipmenttypesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveShipmentTypes: build.query({
            query: () => ({
                url: "shipmenttypes"
            }),
            providesTags: ["ShipmentTypes"]
        }),
        receiveShipmentTypeById: build.query({
            query: shtId => ({
                url: `shipmenttypes/${shtId}`
            }),
            providesTags: ["ShipmentTypes"]
        })
    })
});

export const { useReceiveShipmentTypesQuery, useReceiveShipmentTypeByIdQuery } = shipmenttypesApi;
