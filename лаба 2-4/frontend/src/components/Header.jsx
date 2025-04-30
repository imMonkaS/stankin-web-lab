import React from 'react';
import logo from '../static/imgs/logo_larger_transparent.png';

const Header = () => (
    <table border="0" width={900} cellPadding="0" cellSpacing="0" align="center" bgcolor="#dddddd">
    <tbody>
      <tr>
        <td width="150" align="center"> 
          <a href="index.html"> 
            <img src={logo} width="100" height="100" />
          </a> 
        </td>
        <td align="left">
          <h1>Персона</h1>
        </td>
        <td width="200">
          <table cellPadding="5" width="100%">
            <tbody>
              <tr>
                <td width="40%" align="right">логин: </td>
                <td align="right">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td width="40%" align="right">пароль: </td>
                <td align="right">
                  <input type="password" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td align="left">
                  <input type="submit" value="войти" />
				  &nbsp;
				  <a HREF="/register">регистрация</a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Header;
