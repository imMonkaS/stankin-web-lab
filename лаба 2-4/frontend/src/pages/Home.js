import enter from '../static/imgs/salon-enter.jpg';
import interier from '../static/imgs/interier.jpg';
import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  document.title = 'Персона | Главная'

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HzGgppHRgEYN0p1S-wMm4zu9O42SCF0AaQ&s",
    "https://p0.zoon.ru/preview/EcuQcsjgTPjph1EZDndBSA/630x384x85/1/3/0/original_5e29533d4059a73643054f4f_66b9e7e45b9506.83283020.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ1nsLs2ubyHLDvJH_N9bBnQS5JZzMxMSRA&s",
    "https://avatars.mds.yandex.net/get-altay/14451083/2a0000019541bb852955f6a689aa55b81b49/L",
    "https://p0.zoon.ru/preview/K5FQ2RzlhCCoUgY7PDY-lw/630x384x85/1/b/8/original_566a74ba757e57af248b4579_67d2a95c43f439.85179485.jpg",
  ];

  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

    return (
      <table border="0" width="900" cellPadding="5" align="center" bgcolor="#eeeeee">
    <tbody>
      <tr>
        <td width="150" valign="top" align="center">
          <a className='sidebar-link' href="#persona">Персона</a><br />
          <a className='sidebar-link' href="#aboutUs">О нас</a><br />
          <a className='sidebar-link' href="#history">История фирмы</a><br />
          <a className='sidebar-link' href="#workers">Сотрудники</a><br />
          <a className='sidebar-link' href="#cons">Наши преимущества</a><br />
          <a className='sidebar-link' href="#obsl">Что входит в обслуживание</a><br />
          <a className='sidebar-link' href="#process">Процесс обслуживания</a>
        </td>
        <td>
          <h1 align="left" id='persona'>Салон красоты «Персона»</h1>
          <div style={{ height: '206px' }}>
            <p>
              <img src={enter} width="256" height="206" align="left" alt="Вход в салон" />
              Мы рады приветствовать вас на официальном сайте нашего салона. <br />
              Здесь вы найдете информацию о наших услугах, мастерах и уникальных предложениях.<br />
              <b><i>Сделайте первый шаг к совершенству вместе с нами!</i></b>
            </p>
          </div>
          <hr />

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {images.slice(0, 4).map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                thumbnail
                style={{ width: "150px", cursor: "pointer" }}
                onClick={() => handleOpen(idx)}
              />
            ))}
          </div>

          <ImageCarousel
            show={showCarousel}
            onHide={() => setShowCarousel(false)}
            images={images}
            startIndex={currentIndex}
          />

          <hr />

          <h2 id='aboutUs'>О нас</h2>
          <p><b>«Персона»</b> — это салон красоты, где профессионализм сочетается с индивидуальным подходом к каждому клиенту. <br />
          Мы стремимся подчеркнуть вашу естественную красоту и подарить чувство уверенности в себе.</p>
          <p>
            В нашем салоне вы найдете уютную атмосферу, дружелюбный персонал и передовые технологии ухода за волосами, кожей и ногтями.
          </p>
          <img src={interier} width="300" alt="Интерьер салона" />
          <h2 id='history'>История фирмы</h2>
          <p>Салон «Персона» открыл свои двери в 2010 году. <br />
          С тех пор мы выросли из небольшой студии в один из ведущих центров красоты города. <br />
          Мы развиваемся вместе с нашими клиентами, постоянно расширяя спектр услуг и повышая квалификацию сотрудников.</p>
          <p><i>Мы гордимся тем, что уже более 10 лет остаемся верными своему делу и завоевали доверие тысяч клиентов.</i></p>
          <h2 id='workers'>Сотрудники</h2>
          <table border="3" cellPadding="20" cellSpacing="5">
            <tbody>
              <tr>
                <td colSpan="4" align="center">Сотрудники</td>
              </tr>
              <tr>
                <td colSpan="2" align="center">СПА и макияж</td>
                <td colSpan="2" align="center">Прически</td>
              </tr>
              <tr>
                <td><i>Косметолог</i>: <b>Ирина Смирнова</b></td>
                <td><i>SPA-мастер</i>: <b>Александра Котова</b></td>
                <td><i>Стилист</i>: <b>Анна Петрова</b></td>
                <td><i>Парикмахер</i>: <b>Мария Иванова</b></td>
              </tr>
              <tr>
                <td><i>Мастер по макияжу</i>: <b>Ольга Литвинова</b></td>
                <td><i>SPA-терапевт</i>: <b>Наталья Белая</b></td>
                <td><i>Барбер</i>: <b>Дмитрий Жуков</b></td>
                <td><i>Колорист</i>: <b>Светлана Ким</b></td>
              </tr>
            </tbody>
          </table>
          <p>Каждый специалист регулярно проходит обучение и участвует в международных конкурсах красоты.</p>
          <h2 id='cons'>Наши преимущества</h2>
          <ul>
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Современное оборудование</li>
            <li>Премиум-косметика</li>
          </ul>
          <h2 id='obsl'>Что входит в обслуживание</h2>
          <ol type="a">
            <li>Консультация с мастером</li>
            <li>Выбор подходящего ухода</li>
            <li>Завершение процедуры и рекомендации</li>
          </ol>
          <h2 id='process'>Процесс обслуживания</h2>
          <ol type="A">
            <li>Подготовка</li>
            <li>Основной этап
              <ol type="a">
                <li>Очищение и диагностика</li>
                <li>Основной уход</li>
              </ol>
            </li>
            <li>Завершение процедуры</li>
          </ol>
        </td>
      </tr>
    </tbody>
  </table>
    );
};

export default Home;