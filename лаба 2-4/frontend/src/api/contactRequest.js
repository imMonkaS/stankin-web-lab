import fetcher from "./fetcher";

export const postContactRequest = (data) => fetcher("/contact/request", "POST", data, true);
