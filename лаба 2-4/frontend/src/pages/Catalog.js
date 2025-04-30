import enter from '../static/imgs/salon-enter.jpg';
import interier from '../static/imgs/interier.jpg';

const Catalog = () => {
    return (
        <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center">
              <a href="index.html">Главная</a><br />
              <a href="catalog.html">Каталог</a><br />
              <a href="contacts.html">Контакты</a><br />
              {/* <a href="#">Страница 4</a> */}
            </td>
  
            <td>
              <hr />
              <h1 align="left">Каталог услуг</h1>
  
              <h2 style={{ color: '#8b0000' }}>Парикмахерские услуги</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="product1.html">
                        <img src="src/strijka.jpg" width="200" height="200" alt="Стрижка и укладка" /><br />
                        <b>Стрижка и укладка</b>
                      </a>
                    </td>
                    <td>
                      <a href="product2.html">
                        <img src="src/okras.jpg" width="200" height="200" alt="Окрашивание волос" /><br />
                        <b>Окрашивание волос</b>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <h2 style={{ color: '#8b0000' }}>Косметология и уход</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="src/face.jpg" width="200" height="200" alt="Уход за кожей лица" /><br />
                        <b>Уход за кожей лица</b>
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <img src="src/spa.jpg" width="200" height="200" alt="SPA-программы" /><br />
                        <b>SPA-программы</b>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <h2 style={{ color: '#8b0000' }}>Макияж</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src="src/makiyaj.jpg" width="200" height="200" alt="Дневной и вечерний макияж" /><br />
                        <b>Дневной и вечерний макияж</b>
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <img src="src/svadebniy.jpg" width="200" height="200" alt="Свадебный макияж" /><br />
                        <b>Свадебный макияж</b>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <hr />
              <p style={{ fontStyle: 'italic', color: '#555' }}>
                Выберите интересующую услугу, чтобы узнать больше.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default Catalog;