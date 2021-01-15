import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

const Catalogy: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data);
    });
  }, [])

  const handleAddToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  },[dispatch])

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <strong>{product.price}</strong> {" "}

          <button
           type="button"
           onClick={() => handleAddToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
}

export default Catalogy;