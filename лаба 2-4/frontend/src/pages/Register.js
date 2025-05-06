import { useState } from "react";
import { register } from "../api/user";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import OpenDocumentButton from "../components/OpenDocumentButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [agree, setAgree] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (!agree) return

    e.preventDefault();
    try {
      let data = {
        username: username,
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
        phone_number: telephone
      }
      if (middlename) data['middle_name'] = middlename
      console.log(data)

      const resp = await register(data);
      localStorage.setItem("token", resp.token);
      window.location.href = '/'
    } catch (error) {
      alert("Ошибка: " + error.error);
    }
  }

  document.title = 'Персона | Регистрация'
  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" cellPadding="5" valign="top" align="center">
          </td>
          <td></td>
          <td>
            <hr />

            <form onSubmit={handleSubmit}>
              <h1 align="left">Регистрация</h1>
              <h2 style={{ color: "#8b0000" }}>Введите ваши данные</h2>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="login"><b>Фамилия:</b></label></td>
                    <td><input type="text" onChange={(e) => setLastname(e.target.value)} name="username" size="50" required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="login"><b>Имя:</b></label></td>
                    <td><input type="text" onChange={(e) => setFirstname(e.target.value)} name="username" size="50" required/></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="login"><b>Отчетсво:</b></label></td>
                    <td><input type="text" onChange={(e) => setMiddlename(e.target.value)} name="username" size="50"/></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email"><b>Email:</b></label></td>
                    <td><input type="email" onChange={(e) => setEmail(e.target.value)} name="email" size="50" required/></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="login"><b>Номер телефона:</b></label></td>
                    <td><PhoneInput defaultCountry="RU" onChange={setTelephone} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="login"><b>Логин:</b></label></td>
                    <td><input type="text" onChange={(e) => setUsername(e.target.value)} name="username" size="50" required/></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="password"><b>Пароль:</b></label></td>
                    <td><input type="password" onChange={(e) => setPassword(e.target.value)} name="password" size="50" required/></td>
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
                    <td><input type="submit" value="Зарегистрироваться" /></td>
                  </tr>
                </tbody>
              </table>
            </form>
            <OpenDocumentButton />

            <hr />
            <p style={{ fontStyle: "italic", color: "#555" }}>
              После регистрации вы сможете входить в личный кабинет и записываться на услуги.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Register;
