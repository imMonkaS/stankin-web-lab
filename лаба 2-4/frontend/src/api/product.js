import fetcher from "./fetcher";

export const searchProduct = (queryParams) => fetcher("/product/search", "GET", null, false, queryParams);
export const getCategories = () => fetcher("/product/categories", "GET", false);
