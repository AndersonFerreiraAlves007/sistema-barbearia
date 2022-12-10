const TOKEN_KEY = "@controleEstoqueToken";
const REFRESH_TOKEN_KEY = "@controleEstoqueRefreshToken";
const USER_ID = "@userId";
const USERNAME = "@username";
export const SESSION_ID = "@sessionId";

export const isAuthenticated = () => {
	const isAuth = localStorage.getItem(REFRESH_TOKEN_KEY) !== null;
	return isAuth;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const login = (token, refreshToken) => {
	localStorage.setItem(TOKEN_KEY, token);
	localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const setNewToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
	localStorage.removeItem(USERNAME);
	localStorage.removeItem(USER_ID);
};

export const setUsername = (username) => localStorage.setItem(USERNAME, username);

export const getUsername = () => localStorage.getItem(USERNAME);

export const setUserId = (userId) => localStorage.setItem(USER_ID, String(userId));

export const getUserId = () => {
	const userIid = String(localStorage.getItem(USER_ID));
	return parseInt(userIid, 10);
};

export const setSessionId = (sessionId) => localStorage.setItem(SESSION_ID, String(sessionId));

export const getSessionId = () => {
	const sessionId = localStorage.getItem(SESSION_ID);
	return parseInt(sessionId, 10);
};
