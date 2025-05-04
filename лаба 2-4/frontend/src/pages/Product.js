import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProduct } from "../api/product";
import { addToCart } from "../api/cart";

const Product = () => {
  const [searchParams] = useSearchParams();
  const product_id = searchParams.get("product_id");

  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("success");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await searchProduct({ id: product_id });
        if (Array.isArray(result) && result.length > 0) {
          setProduct(result[0]);
        }
      } catch (error) {
        console.error("Ошибка загрузки услуги:", error);
      }
    };

    if (product_id) {
      fetchProduct();
    }
  }, [product_id]);

  useEffect(() => {
    document.title = `Персона | ${product?.name || "Услуга"}`;
  }, [product]);

  const showNotification = (message, type = "success") => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleOrderClick = async () => {
    try {
      await addToCart({
        product_id: product.id,
        quantity: 1,
      });
      showNotification("Добавлено в корзину ✅", "success");
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
      showNotification("Не удалось добавить в корзину ❌", "error");
    }
  };

  if (!product) {
    return <p align="center">Загрузка...</p>;
  }

  return (
    <>
      {notification && (
        <div
          style={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: notificationType === "success" ? "#5cb85c" : "#d9534f",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            transition: "opacity 0.3s"
          }}
        >
          {notification}
        </div>
      )}

      <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center"></td>
            <td></td>
            <td>
              <hr />
              <h1 align="left">{product.name}</h1>

              <h2 className="product-section-title">Описание товара</h2>
              <img
                src={`${product.image}`}
                width="300"
                height="300"
                align="left"
                className="product-main-image"
                style={{ marginRight: 20, marginBottom: 20 }}
                alt={product.name}
              />

              <p className="short-description">{product.short_description}</p>

              <div style={{ clear: "both" }}></div>

              <h2 className="product-section-title">Характеристики товара</h2>
              <ul className="characteristics-list">
                {product.properties?.map((prop) => (
                  <li key={prop.id}>
                    <b>{prop.property_name}:</b> {prop.property_value}{" "}
                    {Number(prop.property_price) > 0 && `(+${prop.property_price} ₽)`}
                  </li>
                ))}
              </ul>

              <h2 className="product-section-title">Подробное описание товара</h2>
              <p className="full-description">{product.description}</p>

              <hr />

              <button
                onClick={handleOrderClick}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#5cb85c",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                🛒 Заказать
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Product;
