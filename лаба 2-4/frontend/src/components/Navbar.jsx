import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../api/user';

const Navbar = () => {

  const [user, setUser] = useState(null);

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

    fetchUser();
  }, []);

  return (
    <table border="0" width="900" cellPadding="5" align="center" bgcolor="#eeeeee">
      <tbody>
        <tr>
          <td align="center"><a className='header-link' href="/">Главная</a></td>
          <td align="center"><a className='header-link' href="/catalog"> Каталог </a></td>
          <td align="center"><a className='header-link' href="/contacts"> Контакты </a></td>
          {user && <td align="center"><a className='header-link' href="/reviews/post"> Оставить отзыв</a></td>}
        </tr>
      </tbody>
    </table>
  );
}

export default Navbar;
