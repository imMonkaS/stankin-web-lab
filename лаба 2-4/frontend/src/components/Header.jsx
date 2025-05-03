import React, { useEffect, useState } from 'react';
import logo from '../static/imgs/logo_larger_transparent.png';
import { getCurrentUser, login } from '../api/user';

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const data = await login(username, password);
        localStorage.setItem("token", data.token);
        window.location.href = '/'
    } catch (error) {
        alert("Ошибка: " + error.error);
    }
  }

  useEffect(() => {
      const fetchUser = async () => {
          const token = localStorage.getItem("token");
          if (token) {
              try {
                  const userData = await getCurrentUser();
                  setUser(userData);
              } catch (error) {
                  console.error("Ошибка получения пользователя:", error);
                  // localStorage.removeItem("token");
              }
          }
      };

      fetchUser();
  }, []);

  return (
      <table border="0" width={900} cellPadding="0" cellSpacing="0" align="center" bgcolor="#dddddd">
      <tbody>
        <tr>
          <td width="150" align="center"> 
            <a href="/"> 
              <img src={logo} width="100" height="100" alt='Persona' />
            </a> 
          </td>
          <td align="left">
            <h1>Персона</h1>
          </td>

          <td align="left" style={{ paddingLeft: 20 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const query = e.target.elements.searchInput.value;
                if (query.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
                }
              }}
            >
              <input
                type="text"
                name="searchInput"
                placeholder="Поиск..."
                style={{ padding: "5px", width: "150px" }}
              />
              <button type="submit" style={{ padding: "5px 10px", marginLeft: "5px" }}>
                🔍
              </button>
            </form>
          </td>

            {
            !user ?
          <td width="200">
            <form onSubmit={handleSubmit}>
              <table cellPadding="5" width="100%">
                <tbody>
                    <tr>
                      <td width="40%" align="right">логин: </td>
                      <td align="right">
                        <input type="username" onChange={(e) => setUsername(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td width="40%" align="right">пароль: </td>
                      <td align="right">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td align="left">
                        <input type="submit" value="войти" />
                        &nbsp;
                        <a href="/register">регистрация</a>
                      </td>
                    </tr>
                </tbody>
              </table>
            </form>
          </td>
            :
          <td width="200" align='center'>
              <a href="/profile" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle me-1 profile"></i>
              </a>
          </td>
            }
        </tr>
      </tbody>
    </table>
  );
}

export default Header;
