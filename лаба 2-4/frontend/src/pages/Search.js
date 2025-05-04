import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProduct } from '../api/product';

const Search = () => {
  const [products, setProducts] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    document.title = `Персона | Результаты поиска: ${query}`;
  }, [query]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await searchProduct({ name: query });
        setProducts(resp);
      } catch (error) {
        console.error("Ошибка при поиске:", error);
      }
    };

    if (query?.trim()) {
      fetchProducts();
    }
  }, [query]);

  return (
    <table border="0" width="900" cellPadding="5" align="center">
      <tbody>
        <tr>
          <td width="150" valign="top" align="center">
          </td>

          <td>
            <hr />
            <h1 align="left">Результаты поиска: <span style={{ color: '#8b0000' }}>{query}</span></h1>

            <table>
              <tbody>
                <tr>
                  {products && products.length > 0 ? (
                    products.map((el, index) => (
                      <td key={index} align="center" style={{ padding: 10 }}>
                        <a href={`/catalog/product?product_id=${el.id}`}>
                          <img src={el.image} width="200" height="200" alt={el.name} /><br />
                          <b>{el.name}</b>
                        </a>
                      </td>
                    ))
                  ) : (
                    <td>Ничего не найдено</td>
                  )}
                </tr>
              </tbody>
            </table>

            <hr />
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              Используйте другие ключевые слова, если не нашли нужное.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Search;
