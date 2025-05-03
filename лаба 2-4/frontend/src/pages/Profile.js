import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/user";

const Profile = () => {
  document.title = 'Персона | Профиль'

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const userData = await getCurrentUser();
                setUser(userData);
                if (userData.firstName !== null){
                  setFirstName(userData.firstName)
                }
                if (userData.lastName !== null){
                  setLastName(userData.firstName)
                }
                if (userData.middleName !== null){
                  setMiddleName(userData.middleName)
                }
            } catch (error) {
                console.error("Ошибка получения пользователя:", error);
                // localStorage.removeItem("token");
            }
        }
    };

    fetchUser();
}, []);

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    window.location.href = '/'
  }
    return (
      <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center">
            </td>
            <td></td>
            <td>
              <hr />
              <h1 align="left">Личный кабинет {user && user.username}</h1>

              <form>
                <h2 style={{ color: "#8b0000" }}>Данные</h2>
                <table>
                  <tbody>
                  <tr>
                      <td><b>ФИО:</b> {user && lastName} {user && firstName} {user && middleName} </td>
                    </tr>
                    <tr>
                      <td><b>Имя:</b></td>
                      <td><input /></td>
                    </tr>
                    <tr>
                      <td><b>Фамилия:</b></td>
                      <td><input /></td>
                    </tr>
                    <tr>
                      <td><b>Отчество:</b></td>
                      <td><input /></td>
                    </tr>
                    <tr>
                      <td><b>Email:</b></td>
                      <td>{user && user.email}</td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit"> Поменять </button>
              </form>
              <button onClick={handleLogout}> Выйти </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default Profile;
  