import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProduct } from "../api/product";

const Product = () => {
  const [searchParams] = useSearchParams();
  const product_id = searchParams.get("product_id");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(product_id)
        const result = await searchProduct({ id: product_id });
        if (Array.isArray(result) && result.length > 0) {
          setProduct(result[0]);
          console.log(result[0])
        }
      } catch (error) {
        console.error("Ошибка загрузки продукта:", error);
      }
    };

    if (product_id) {
      fetchProduct();
    }
  }, [product_id]);

  useEffect(() => {
    document.title = `Персона | ${product?.name || "Услуга"}`;
  }, [product]);

  if (!product) {
    return <p align="center">Загрузка...</p>;
  }

  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" cellPadding="5" valign="top" align="center">
          </td>
          <td></td>
          <td>
            <hr />
            <h1 align="left">{product.name}</h1>

            <h2 style={{ color: "#8b0000" }}>Описание товара</h2>
            <img
              src={`${product.image}`}
              width="300"
              height="300"
              align="left"
              style={{ marginRight: 20, marginBottom: 20 }}
              alt={product.name}
            />

            <p>{product.short_description}</p>

            <div style={{ clear: "both" }}></div>

            <h2 style={{ color: "#8b0000" }}>Характеристики товара</h2>
            <ul>
              {product.properties?.map((prop) => (
                <li key={prop.id}>
                  <b>{prop.property_name}:</b> {prop.property_value}{" "}
                  {Number(prop.property_price) > 0 &&
                    `(+${prop.property_price} ₽)`}
                </li>
              ))}
            </ul>

            <h2 style={{ color: "#8b0000" }}>Подробное описание товара</h2>
            <p>{product.description}</p>

            <hr />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Product;
