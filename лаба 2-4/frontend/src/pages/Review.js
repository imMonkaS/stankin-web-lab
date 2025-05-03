import { useEffect, useState } from 'react';
import { postReview } from '../api/review';
import { getCurrentUser } from '../api/user';

const Review = () => {
  document.title = 'Персона | Отзывы';

  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const review = await postReview(rating, comment);
      setSubmitted(true);
      setComment('');
      setRating('5');
    } catch (error) {
      alert('Произошла ошибка при отправке отзыва');
      console.error(error);
    }
  };

  useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const userData = await getCurrentUser();
                    setUser(userData);
                } catch (error) {
                    console.error("Ошибка получения пользователя:", error);
                    window.location.href = '/register'
                    // localStorage.removeItem("token");
                }
            }
            else{
                window.location.href = '/register'
            }
        };
  
        fetchUser();
    }, []);

  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" cellPadding="5" valign="top" align="center">
            <a href="/reviews/post">Оставить отзыв</a><br />
            <a href="/reviews">Отзывы</a><br />
          </td>
          <td>
            <hr />
            <h1 align="left">Оставьте ваш отзыв</h1>

            {submitted ? (
              <p style={{ color: 'green' }}>Спасибо! Ваш отзыв отправлен.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <table cellPadding="10">
                  <tbody>
                    <tr>
                      <td><label htmlFor="rating">Оценка:</label></td>
                      <td>
                        <select id="rating" value={rating} onChange={e => setRating(e.target.value)}>
                          <option value="5">5 — Отлично</option>
                          <option value="4">4 — Хорошо</option>
                          <option value="3">3 — Удовлетворительно</option>
                          <option value="2">2 — Плохо</option>
                          <option value="1">1 — Ужасно</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="comment">Комментарий:</label></td>
                      <td>
                        <textarea
                          id="comment"
                          value={comment}
                          onChange={e => setComment(e.target.value)}
                          rows="5"
                          cols="38"
                          required
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><input type="submit" value="Отправить отзыв" /></td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}

            <hr />
            <p style={{ fontStyle: "italic", color: "#555" }}>
              Ваш отзыв будет опубликован после проверки модератором.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Review;
