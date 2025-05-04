import { useEffect, useState } from 'react';
import { postReview } from '../api/review';
import { getCurrentUser } from '../api/user';
import OpenDocumentButton from '../components/OpenDocumentButton';

const Review = () => {
  document.title = 'Персона | Отзывы';

  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [source, setSource] = useState("");
  const [article, setArticle] = useState('')
  const [gender, setGender] = useState('')
  const [clientType, setClientType] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const review = await postReview({
        rating: rating,
        comment: comment,
        article: article,
        gender: gender,
        client_type: clientType,
        source: source
      });
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
        }
      }
      else {
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
            <a className='sidebar-link' href="/reviews/post">Оставить отзыв</a><br />
            <a className='sidebar-link' href="/reviews">Отзывы</a><br />
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
                      <td><label htmlFor="article">Заголовок:</label></td>
                      <td>
                        <input
                          className="contact-input"
                          type="article"
                          id="article"
                          value={article}
                          onChange={e => setArticle(e.target.value)}
                          required
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Пол:</td>
                      <td>
                        <label>
                          <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} required /> Мужской
                        </label>
                        <br />
                        <label>
                          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> Женский
                        </label>
                      </td>
                    </tr>

                    <tr>
                      <td>Ваш статус:</td>
                      <td>
                        <label><input type="radio" name="clientType" value="new" onChange={e => setClientType(e.target.value)} required /> Новый клиент</label><br />
                        <label><input type="radio" name="clientType" value="regular" onChange={e => setClientType(e.target.value)} /> Постоянный клиент</label>
                      </td>
                    </tr>

                    <tr>
                      <td><label>Откуда вы узнали о нас?</label></td>
                      <td>
                        <div>
                          <input type="radio" id="source_friends" name="source" onChange={e => setSource(e.target.value)} value="friends" />
                          <label htmlFor="source_friends">От друзей</label><br />

                          <input type="radio" id="source_internet" name="source" onChange={e => setSource(e.target.value)} value="internet" />
                          <label htmlFor="source_internet">В интернете</label><br />

                          <input type="radio" id="source_advertising" name="source" onChange={e => setSource(e.target.value)} value="advertising" />
                          <label htmlFor="source_advertising">Реклама</label><br />

                          <input type="radio" id="source_other" name="source" onChange={e => setSource(e.target.value)} value="other" />
                          <label htmlFor="source_other">Другое</label>
                        </div>
                      </td>
                    </tr>


                    <tr>
                      <td><label htmlFor="rating">Оценка:</label></td>
                      <td>
                        <select
                          id="rating"
                          value={rating}
                          onChange={e => setRating(e.target.value)}
                          required
                        >
                          <option value="">Выберите</option>
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
                          style={{ overflowY: 'scroll' }}
                          required
                        ></textarea>
                      </td>
                    </tr>

                    <tr>
                      <td><label htmlFor="agree">Согласие:</label></td>
                      <td>
                        <label>
                          <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={e => setAgree(e.target.checked)}
                            required
                          /> Я согласен на обработку персональных данных
                        </label>
                      </td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <input className="contact-submit" type="submit" value="Отправить отзыв" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
            <OpenDocumentButton />

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
