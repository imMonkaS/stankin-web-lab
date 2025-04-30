const Profile = () => {
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
            <td></td>
            <td>
              <hr />
              <h1 align="left">Личный кабинет</h1>
  
              <h2 style={{ color: "#8b0000" }}>Данные</h2>
              <table>
                <tbody>
                  <tr>
                    <td><b>Имя:</b></td>
                    <td>Иван Иванов</td>
                  </tr>
                  <tr>
                    <td><b>Email:</b></td>
                    <td>ivan.ivanov@example.com</td>
                  </tr>
                  <tr>
                    <td><b>Телефон:</b></td>
                    <td>+7 900 000 00 00</td>
                  </tr>
                </tbody>
              </table>
  
              <h2 style={{ color: "#8b0000" }}>Мои заказы</h2>
              <table>
                <tbody>
                  <tr>
                    <td><b>№ заказа:</b></td>
                    <td>001</td>
                    <td><b>Дата:</b></td>
                    <td>15.04.2025</td>
                    <td><b>Статус:</b></td>
                    <td>Выполнен</td>
                  </tr>
                  <tr>
                    <td><b>№ заказа:</b></td>
                    <td>002</td>
                    <td><b>Дата:</b></td>
                    <td>10.04.2025</td>
                    <td><b>Статус:</b></td>
                    <td>Ожидает подтверждения</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Profile;
  