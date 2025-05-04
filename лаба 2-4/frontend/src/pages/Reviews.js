import React, { useEffect, useState } from "react";
import { getAllReviews } from "../api/review";

const REVIEWS_PER_PAGE = 5;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (err) {
        console.error("Ошибка при загрузке отзывов:", err);
      }
    };

    fetchReviews();
  }, []);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const currentReviews = reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" cellPadding="5" valign="top" align="center">
            <a href="/reviews/post">Оставить отзыв</a><br />
            <a href="/reviews">Отзывы</a><br />
          </td>
          <td></td>
          <td>
            <hr />
            <h1 align="left">Отзывы клиентов</h1>

            {currentReviews.map((review) => (
              <div
                key={review.id}
                style={{
                  position: "relative",
                  marginBottom: "25px",
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                }}
              >
                {/* Автор */}
                <div style={{ position: "absolute", top: "10px", left: "15px", fontWeight: "bold" }}>
                  {review.author?.username || "Аноним"}
                </div>

                {/* Оценка звёздами */}
                <div style={{ position: "absolute", top: "10px", right: "15px", color: "#f39c12", fontSize: "18px" }}>
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </div>

                {/* Доп. сведения: gender, client_type, source */}
                <div style={{ position: "absolute", top: "35px", right: "15px", fontSize: "13px", color: "#555", textAlign: "right" }}>
                  {review.client_type === "regular" ? "Постоянный клиент" : "Новый клиент"}<br />
                  {review.source === "friends" ? "Узнал от друзей"
                    : review.source === "internet" ? "Нашел в интернете"
                    : review.source === "advertising" ? "Узнал из рекламы"
                    : "Другое"}
                </div>

                {/* Заголовок */}
                <h3 style={{ marginTop: "40px", marginBottom: "10px", color: "#333" }}>
                  {review.article || "Без заголовка"}
                </h3>

                {/* Комментарий */}
                <div style={{ fontStyle: "italic", color: "#333" }}>
                  {review.comment}
                </div>
              </div>
            ))}

            {/* Пагинация */}
            <div style={{ textAlign: "center", marginTop: 30 }}>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  style={{
                    margin: "0 5px",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    backgroundColor: currentPage === pageNum ? "#8b0000" : "#fff",
                    color: currentPage === pageNum ? "#fff" : "#333",
                    cursor: "pointer",
                    fontWeight: currentPage === pageNum ? "bold" : "normal",
                    transition: "0.2s",
                  }}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <hr />
            <p style={{ textAlign: "center" }}>&copy; 2025 Персона. Все права защищены.</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Reviews;
