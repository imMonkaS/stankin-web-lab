import { useState } from "react";
import { register } from "../api/user";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async(e) => {
      e.preventDefault();
          try {
              const data = await register(username, email, password);
              localStorage.setItem("token", data.token);
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
                <td><label htmlFor="login"><b>Логин:</b></label></td>
                <td><input type="text" onChange={(e) => setUsername(e.target.value)} name="username" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="email"><b>Email:</b></label></td>
                <td><input type="email" onChange={(e) => setEmail(e.target.value)} name="email" size="40" /></td>
              </tr>
              <tr>
                <td><label htmlFor="password"><b>Пароль:</b></label></td>
                <td><input type="password" onChange={(e) => setPassword(e.target.value)} name="password" size="40" /></td>
              </tr>
              {/* <tr>
                <td><label htmlFor="agree"><b>Согласие с правилами:</b></label></td>
                <td><input type="checkbox" id="agree" name="agree" /> Да</td>
              </tr> */}
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
    );
  };
  
  export default Register;
  