import fetcher from "./fetcher";

export const postReview = (data) => fetcher("/review/", "POST", data, true);
export const getAllReviews = () => fetcher("/review/getAll");
