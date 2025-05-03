import fetcher from "./fetcher";

export const postReview = (rating, comment) => fetcher("/review/", "POST", { rating, comment }, true);
export const getAllReviews = () => fetcher("/review/getAll");
