const Register = () => {
    return (
      <form>
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
        <h1 align="left">Регистрация</h1>

        <h2 style={{ color: "#8b0000" }}>Введите ваши данные</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="firstName"><b>Имя:</b></label></td>
                <td><input type="text" id="firstName" name="firstName" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="lastName"><b>Фамилия:</b></label></td>
                <td><input type="text" id="lastName" name="lastName" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="email"><b>Email:</b></label></td>
                <td><input type="email" id="email" name="email" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="phone"><b>Телефон:</b></label></td>
                <td><input type="tel" id="phone" name="phone" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="password"><b>Пароль:</b></label></td>
                <td><input type="password" id="password" name="password" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="confirmPassword"><b>Повторите пароль:</b></label></td>
                <td><input type="password" id="confirmPassword" name="confirmPassword" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="agree"><b>Согласие с правилами:</b></label></td>
                <td><input type="checkbox" id="agree" name="agree" /> Да</td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Зарегистрироваться" /></td>
              </tr>
            </tbody>
          </table>
        </form>

        <hr />
        <p style={{ fontStyle: "italic", color: "#555" }}>
          После регистрации вы сможете входить в личный кабинет и записываться на услуги.
        </p>
      </td>
    </tr>
  </tbody>
</table>
      </form>
    );
  };
  
  export default Register;
  