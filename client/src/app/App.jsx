import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./layouts";
import { ProductsProvider, CategoriesProvider, CatalogsProvider } from "./hooks";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes/routes.jsx";
import { useSelector } from "react-redux";
import { authSelectors } from "./store/authSlice";
import { useReceiveRolesQuery, useReceiveUsersQuery } from "./store/apiEndpoints";

const App = () => {
    const isUserAuthorized = useSelector(authSelectors.getAuthorizedUserStatus());

    const authorizedUserId = useSelector(authSelectors.getAuthorizedUserId());
    const { data: usersData } = useReceiveUsersQuery({ refetchOnFocus: true });

    const authorizedUser = usersData?.data?.find(user => user?._id === authorizedUserId);

    const { data: userRoleData } = useReceiveRolesQuery({ refetchOnFocus: true });

    const authorizedUserRole = userRoleData?.data?.find(role => role?._id === authorizedUser?.role);

    return (
        <>
            <CategoriesProvider>
                <ProductsProvider>
                    <CatalogsProvider>
                        <Landing>
                            {useRoutes(routes(isUserAuthorized, authorizedUserRole?.code))}
                        </Landing>
                    </CatalogsProvider>
                </ProductsProvider>
            </CategoriesProvider>
            <ToastContainer/>
        </>
    );
};

export default App;
