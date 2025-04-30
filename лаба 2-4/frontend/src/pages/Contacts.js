const Contacts = () => {
    return (
      <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center">
              <a href="index.html">Главная</a><br />
              <a href="catalog.html">Каталог</a><br />
              <a href="contacts.html">Контакты</a><br />
              {/* <a href="#">Страница 4</a> */}
            </td>
            <td>
              <hr />
              <h1 align="left">Напишите нам</h1>
  
              <form>
                <table cellPadding="10">
                  <tbody>
                    <tr>
                      <td><label htmlFor="name">Имя:</label></td>
                      <td><input type="text" id="name" name="name" size="40" /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="email">Email:</label></td>
                      <td><input type="email" id="email" name="email" size="40" /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="subject">Тема:</label></td>
                      <td><input type="text" id="subject" name="subject" size="40" /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="message">Сообщение:</label></td>
                      <td><textarea id="message" name="message" rows="5" cols="38"></textarea></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="service">Интересующая услуга:</label></td>
                      <td>
                        <select id="service" name="service">
                          <option>Стрижка</option>
                          <option>Макияж</option>
                          <option>SPA</option>
                          <option>Консультация</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="agree">Согласие на обработку данных:</label></td>
                      <td>
                        <input type="checkbox" id="agree" name="agree" /> Да
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><input type="submit" value="Отправить" /></td>
                    </tr>
                  </tbody>
                </table>
              </form>
  
              <hr />
              <h2 style={{ color: "#8b0000" }}>Адрес</h2>
              <table cellPadding="5">
                <tbody>
                  <tr>
                    <td><b>Телефон:</b></td>
                    <td>+7 (495) 123-45-67</td>
                  </tr>
                  <tr>
                    <td><b>Адрес:</b></td>
                    <td>г. Москва, Лубянский проезд, 15с4</td>
                  </tr>
                  <tr>
                    <td><b>Email:</b></td>
                    <td>contact@persona-salon.ru</td>
                  </tr>
                </tbody>
              </table>
  
              <hr />
              <h2 style={{ color: "#8b0000" }}>Мы на карте</h2>
              <div style={{ width: "100%", maxWidth: "800px", height: "400px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4523cce9a8c3e41abd99d0b1973471ec825fe981542f81bf5a2897dd17904bf&amp;source=constructor"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  title="map"
                ></iframe>
              </div>
  
              <p style={{ fontStyle: "italic", color: "#555" }}>
                Мы всегда рады вашему сообщению. Ответим в течение одного рабочего дня.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Contacts;
  