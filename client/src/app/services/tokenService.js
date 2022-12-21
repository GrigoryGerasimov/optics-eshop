import { setToStorage, getFromStorage, removeFromStorage } from "../utils/storage";

const JWT = {
    accessTokenKey: "jwt-access-token",
    refreshTokenKey: "jwt-refresh-token",
    expireDateKey: "jwt-expire-date",
    userIdKey: "jwt-user-id"
};

export const setTokens = ({ refreshToken, accessToken, userId, expiresIn = 3600 }) => {
    const { accessTokenKey, refreshTokenKey, expireDateKey, userIdKey } = JWT;
    const expireDate = Date.now() + (expiresIn * 1000);
    setToStorage(accessTokenKey, accessToken);
    setToStorage(refreshTokenKey, refreshToken);
    setToStorage(expireDateKey, expireDate);
    setToStorage(userIdKey, userId);
};

export const getTokens = () => {
    const tokens = {};
    for (const key in JWT) tokens[key] = getFromStorage(key);
    return tokens;
};

export const removeTokens = () => {
    for (const key in JWT) removeFromStorage(key);
};

const tokenService = {
    setTokens,
    getTokens,
    removeTokens
};

export default tokenService;
