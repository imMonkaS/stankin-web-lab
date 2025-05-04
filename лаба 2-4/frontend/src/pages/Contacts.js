import React, { useState } from "react";
import { postContactRequest } from "../api/contactRequest";
import OpenDocumentButton from "../components/OpenDocumentButton";

const Contacts = () => {
  document.title = 'Персона | Контакты';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "Стрижка",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Пожалуйста, согласитесь на обработку данных.");
      return;
    }

    try {
      await postContactRequest(formData);
      alert("Сообщение отправлено!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        service: "Стрижка",
        agree: false,
      });
    } catch (err) {
      console.error("Ошибка отправки:", err);
      alert("Ошибка при отправке формы.");
    }
  };

  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" cellPadding="5" valign="top" align="center"></td>
          <td>
            <hr />
            <h1 align="left">Напишите нам</h1>

            <form onSubmit={handleSubmit}>
              <table cellPadding="10">
                <tbody>
                  <tr>
                    <td><label htmlFor="name">Имя:</label></td>
                    <td><input className="contact-input" type="text" id="name" name="name" size="40" value={formData.name} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email">Email:</label></td>
                    <td><input className="contact-input" type="email" id="email" name="email" size="40" value={formData.email} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="subject">Тема:</label></td>
                    <td><input className="contact-input" type="text" id="subject" name="subject" size="40" value={formData.subject} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="message">Сообщение:</label></td>
                    <td><textarea className="contact-textarea" id="message" name="message" rows="5" cols="38" value={formData.message} onChange={handleChange}></textarea></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="service">Интересующая услуга:</label></td>
                    <td>
                      <select className="contact-select" id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option>Стрижка</option>
                        <option>Макияж</option>
                        <option>SPA</option>
                        <option>Консультация</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="agree">Согласие на обработку данных:</label></td>
                    <td>
                      <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} /> Да
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><input className="contact-submit" type="submit" value="Отправить" /></td>
                  </tr>
                </tbody>
              </table>
            </form>

            <OpenDocumentButton />

            <hr />
            <h2 style={{ color: "#8b0000" }}>Адрес</h2>
            <table cellPadding="5">
              <tbody>
                <tr><td><b>Телефон:</b></td><td>+7 (495) 123-45-67</td></tr>
                <tr><td><b>Адрес:</b></td><td>г. Москва, Лубянский проезд, 15с4</td></tr>
                <tr><td><b>Email:</b></td><td>contact@persona-salon.ru</td></tr>
              </tbody>
            </table>

            <hr />
            <h2 style={{ color: "#8b0000" }}>Мы на карте</h2>
            <div style={{ width: "100%", maxWidth: "800px", height: "400px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4523cce9a8c3e41abd99d0b1973471ec825fe981542f81bf5a2897dd17904bf&amp;source=constructor"
                width="100%" height="400" frameBorder="0" title="map"
              ></iframe>
            </div>

            <p style={{ fontStyle: "italic", color: "#555" }}>
              Мы всегда рады вашему сообщению. Ответим в течение одного рабочего дня.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contacts;
