import React from 'react';
import logo from '../static/imgs/logo_larger_transparent.png';

const Header = () => (
    <table border="0" width={900} cellpadding="0" cellspacing="0" align="center" bgcolor="#dddddd">
	<tr>
	<td width="150" align="center"> <a href="index.html"> <img src={logo} width="100" height="100" /> </a> </td>
	<td align="left"><h1>Персона</h1></td>
	<td width="200">
		<table  cellpadding="5"  width="100%">
			<tr>
				<td width="40%" align="right">логин: </td>
				<td align="right"><input type="text" /></td>
			</tr>
			<tr>
				<td width="40%" align="right">пароль: </td>
				<td align="right"><input type="password" /></td>
			</tr>
			<tr>
			 <td> </td>
				<td align="left"><input type="submit" value="войти" /> </td>
			</tr>
		</table>
	</td>
	</tr>
</table> 
);

export default Header;
