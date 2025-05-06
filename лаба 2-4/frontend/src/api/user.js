import fetcher from "./fetcher";

export const login = (username, password) => fetcher("/user/auth/login", "POST", { username, password });
export const register = (data) => fetcher("/user/auth/register", "POST", data);
export const updateCurrentUser = (data) => fetcher("/user", "PATCH", data, true);
export const getCurrentUser = () => fetcher("/user/current", "GET", null, true);
