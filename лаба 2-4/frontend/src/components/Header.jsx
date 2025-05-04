import React, { useEffect, useState } from 'react';
import logo from '../static/imgs/logo_larger_transparent.png';
import { getCurrentUser, login } from '../api/user';
import { getCart, getCurrentUsersCart } from '../api/cart';

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      window.location.href = '/';
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
        }
      }
    };

    const fetchCart = async () => {
      try {
        const data = await getCurrentUsersCart();
        const totalCount = data?.reduce((acc, item) => acc + item.quantity, 0) || 0;
        setCartCount(totalCount);
      } catch (error) {
        console.error("Ошибка получения корзины:", error);
      }
    };

    fetchUser();
    fetchCart();
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

          {!user ? (
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
                        <a className='header-link' href="/register">регистрация</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </td>
          ) : (
            <td width="200" align="center" style={{ position: "relative" }}>
              <a href="/profile" className='header-link'>
                <i className="bi bi-person-circle me-1 profile"></i>
              </a>
              &nbsp;
              <a href="/cart" className='header-link' style={{ position: "relative", display: "inline-block" }}>
                <i className="bi bi-cart me-1 profile"></i>
                {cartCount > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    minWidth: "20px",
                    textAlign: "center"
                  }}>
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </a>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default Header;
