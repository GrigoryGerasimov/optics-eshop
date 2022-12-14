import { createSlice } from "@reduxjs/toolkit";
import { authService } from "../services/authService.js";
import { getTokens, setTokens, removeTokens } from "../services/tokenService.js";

const { signIn, signUp } = authService;

const initialState = getTokens().accessTokenKey ? {
    isLoading: true,
    error: null,
    auth: { userId: getTokens().userIdKey },
    isLoggedIn: true
} : {
    isLoading: false,
    error: null,
    auth: null,
    isLoggedIn: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onRequestStart(state) {
            state.isLoading = true;
        },
        onAuthSuccess(state, { payload }) {
            state.auth = payload;
            state.isLoggedIn = true;
            state.error = null;
        },
        onAuthFailure(state, { payload }) {
            state.error = payload;
        },
        onSignOutSuccess(state) {
            state.isLoggedIn = false;
            state.auth = null;
        },
        onSignOuFailure(state, { payload }) {
            state.error = payload;
        },
        onRequestEnd(state) {
            state.isLoading = false;
        }
    }
});

export const {
    actions:
    {
        onRequestStart,
        onAuthSuccess,
        onAuthFailure,
        onSignOutSuccess,
        onSignOuFailure,
        onRequestEnd
    },
    reducer: authReducer
} = authSlice;

export const login = payload => async dispatch => {
    dispatch(onRequestStart());
    const { email, password } = payload;
    try {
        const { data } = await signIn({ email, password });
        const { userId } = data;
        setTokens(data);
        dispatch(onAuthSuccess({ userId }));
    } catch (error) {
        dispatch(onAuthFailure(error.message));
    } finally {
        dispatch(onRequestEnd());
    }
};

export const register = payload => async dispatch => {
    dispatch(onRequestStart());
    try {
        const { data } = await signUp(payload);
        const { userId } = data;
        setTokens(data);
        dispatch(onAuthSuccess({ userId }));
    } catch (error) {
        dispatch(onAuthFailure(error.message));
    } finally {
        dispatch(onRequestEnd());
    }
};

export const logout = () => dispatch => {
    dispatch(onRequestStart());
    try {
        removeTokens();
        dispatch(onSignOutSuccess());
    } catch (error) {
        dispatch(onSignOuFailure(error.message));
    } finally {
        dispatch(onRequestEnd());
    }
};

export const authSelectors = {
    getAuthStatus: () => state => state.auth?.isLoading,
    getAuthorizedUserStatus: () => state => state.auth?.isLoggedIn,
    getAuthorizedUserId: () => state => state.auth.auth?.userId,
    getAuthError: () => state => state.auth?.error
};
