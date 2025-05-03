const NotFound = () => {
    document.title = 'Персона | Страница не найдена';
  
    return (
      <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center">
            </td>
            <td>
              <hr />
              <h1 style={{ color: 'darkred' }}>Ошибка 404</h1>
              <p>К сожалению, страница не найдена.</p>
              <p>
                Возможно, вы перешли по устаревшей ссылке или ввели неправильный адрес.
              </p>
              <p>
                <a href="/">Вернуться на главную</a>
              </p>
              <hr />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default NotFound;
  