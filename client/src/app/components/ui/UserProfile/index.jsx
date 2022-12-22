import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../store/authSlice.js";
import { useReceiveUserByIdQuery, useReceiveRolesQuery } from "../../../store/apiEndpoints";
import { ChevronUp, ChevronDown } from "../common_ui/icons";
import paths from "../../../routes/paths";
import Loader from "../../common/Loader.jsx";

const UserProfile = () => {
    const { AUTH_LOGOUT } = paths;
    const authorizedUserId = useSelector(authSelectors.getAuthorizedUserId());
    const { isLoading: isAuthorizedUserDataLoading, isSuccess: isAuthorizedUserDataLoadSuccessful, data: authorizedUserData } = useReceiveUserByIdQuery(authorizedUserId, { refetchOnFocus: true });

    const authorizedUser = authorizedUserData?.data;
    const { isLoading: isUserRoleDataLoading, isSuccess: isUserRoleDataLoadSuccessful, data: userRoleData } = useReceiveRolesQuery({ refetchOnFocus: true });

    const [showProtectedOptions, setShowProtectedOptions] = useState(false);
    const handleProtectedOptionsToggler = () => setShowProtectedOptions(prevState => !prevState);

    if ((isAuthorizedUserDataLoading && !isAuthorizedUserDataLoadSuccessful) || (isUserRoleDataLoading && !isUserRoleDataLoadSuccessful) || !authorizedUser) return <Loader/>;

    const authorizedUserRole = userRoleData.data.find(role => role._id === authorizedUser.role);

    return (
        <>
            <div className="flex flex-row justify-center w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none" onClick={handleProtectedOptionsToggler}>
                Здравствуйте, {authorizedUser.firstName}{" "}
                <span className="ml-[5px]">{!showProtectedOptions ? <ChevronDown/> : <ChevronUp/>}</span>
            </div>
            <ul className={`${showProtectedOptions ? "block" : "hidden"}`}>
                <li className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none">
                    {authorizedUserRole.code === "vendor" ? <NavLink to="/admin">Кабинет</NavLink> : <NavLink to="/">Общее</NavLink>}
                </li>
                <li className="w-max h-max text-xl text-gray-700 text-opacity-95 p-2 no-underline hover:border-b hover:border-gray-700 hover:border-opacity-50 hover:rounded active:bg-yellow-100 active:bg-opacity-50 active:border-none">
                    <NavLink to={AUTH_LOGOUT}>Выйти</NavLink>
                </li>
            </ul>
        </>
    );
};

export default UserProfile;
