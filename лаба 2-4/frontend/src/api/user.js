import fetcher from "./fetcher";

export const login = (username, password) => fetcher("/user/auth/login", "POST", { username, password });
export const register = (username, email, password) => fetcher("/user/auth/register", "POST", { username, email, password });
export const updateCurrentUser = (data) => fetcher("/user", "PATCH", data, true);
export const getCurrentUser = () => fetcher("/user/current", "GET", null, true);
