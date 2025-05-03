import enter from '../static/imgs/salon-enter.jpg';
import interier from '../static/imgs/interier.jpg';
import { useEffect, useState } from 'react';
import { getCategories, searchProduct } from '../api/product';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  document.title = 'Персона | Каталог'
  const [categories, setCategories] = useState(null)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [searchParams] = useSearchParams();
  const category_id = searchParams.get('category');

  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const resp = await getCategories();
            setCategories(resp);
            setCurrentCategory(resp.find(obj => obj.id == category_id))
            if (category_id === null) window.location.href = `http://localhost:3000/catalog?category=1`
        } catch (error) {
            console.error("Ошибка получения пользователя:", error);
            // localStorage.removeItem("token");
        }
    };

    fetchCategories();
}, []);

useEffect(() => {
  const fetchProducts = async () => {
      try {
          const resp = await searchProduct({
            category_id: category_id
          });
          setProducts(resp);
          console.log(resp);
          if (resp.length === 0 ) window.location.href = `http://localhost:3000/catalog?category=1`
      } catch (error) {
          console.error("Ошибка получения услуги:", error);
          // localStorage.removeItem("token");
      }
  };

  fetchProducts();
}, []);

    return (
        <table border="0" width="900" cellPadding="5" align="center">
        <tbody>
          <tr>
            <td width="150" cellPadding="5" valign="top" align="center">
              { categories &&
                categories.map((el, index) => (
                  <div key={index}>
                    <a href={`/catalog?category=${el.id}`}>{el.name}</a> <br />
                  </div>
                ))
              }
            </td>
  
            <td>
              <hr />
              <h1 align="left">Каталог услуг {}</h1>

              <h2 style={{ color: '#8b0000' }}>{currentCategory && currentCategory.name}</h2>
              <table>
                <tbody>
                  <tr>
                    { products &&
                      products.map((el, index) => (
                        <td key={index} align='center'>
                          <a href={`/catalog/product?product_id=${el.id}`}>
                            <img src={el.image} width="200" height="200" alt={el.name} /><br />
                            <b>{el.name}</b>
                          </a>
                        </td>
                      ))
                    }
                    
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