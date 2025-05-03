import { useEffect, useState } from "react";
import { getCurrentUser, updateCurrentUser } from "../api/user";

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
                if (userData.first_name != null){
                  setFirstName(userData.first_name)
                }
                if (userData.last_name != null){
                  setLastName(userData.last_name)
                }
                if (userData.middle_name != null){
                  setMiddleName(userData.middle_name)
                }
            } catch (error) {
                console.error("Ошибка получения пользователя:", error);
                // localStorage.removeItem("token");
            }
        }
    };

    fetchUser();
}, []);

  const handleChangeData = (e) => {
    e.preventDefault();
    const updateUser = async () => {
      try {
          const userData = await updateCurrentUser({
            "first_name": firstName,
            "last_name": lastName,
            "middle_name": middleName
          });
          // window.location.href = '/profile'
      } catch (error) {
          console.error("Ошибка получения пользователя:", error);
          // localStorage.removeItem("token");
      }
  };

  updateUser();
  }

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

              <form onSubmit={handleChangeData}>
                <h2 style={{ color: "#8b0000" }}>Данные</h2>
                <table>
                  <tbody>
                  <tr>
                      <td><b>ФИО:</b> </td>
                      <td> {user && lastName} {user && firstName} {user && middleName} </td>
                    </tr>
                    <tr>
                      <td><b>Имя:</b></td>
                      <td><input onChange={e => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                      <td><b>Фамилия:</b></td>
                      <td><input onChange={e => setLastName(e.target.value)} /></td>
                    </tr>
                    <tr>
                      <td><b>Отчество:</b></td>
                      <td><input onChange={e => setMiddleName(e.target.value)} /></td>
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
  