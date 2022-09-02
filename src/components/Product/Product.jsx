import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../../redux/ProductsSlice";

const Product = () => {
  const dispatch = useDispatch();
  const Products1 = useSelector((state) => state.products.products1);
  const Products2 = useSelector((state) => state.products.products2);

  const addToBasket = (id, title, price, rating, img) => {
    dispatch(
      addBasket({
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      })
    );
  };

  return (
    <div className="product__card__container">
      {Products1 && (
        <div className="product__1">
          {Products1.map((product) => (
            <div key={product.id} className="product__card">
              <img
                src={require(`../../assets/ProductsImage/${product.image}`)}
                alt=""
              />
              <p>{product.title}</p>

              <div className="product__rating">
                {Array(product.rating)
                  .fill()
                  .map((x) => {
                    return <span style={{ color: "#FDA11C" }}>&#9733;</span>;
                  })}
              </div>
              <p className="product__price">
                <strong>{product.price}</strong>
                <small>TL</small>
              </p>

              <button
                onClick={() =>
                  addToBasket(
                    product.id,
                    product.title,
                    product.price,
                    product.rating,
                    product.image
                  )
                }
                className="buy__btn"
              >
                Satın Al
              </button>
            </div>
          ))}
        </div>
      )}

      {Products2 && (
        <div className="product__2">
          {Products2.map((product) => (
            <div key={product.id} className="product__card">
              <img
                src={require(`../../assets/ProductsImage/${product.image}`)}
                alt=""
              />
              <p>{product.title}</p>

              <div className="product__rating">
                {Array(product.rating)
                  .fill()
                  .map((x) => {
                    return <span style={{ color: "#FDA11C" }}>&#9733;</span>;
                  })}
              </div>
              <p className="product__price">
                <strong>{product.price}</strong>
                <small>TL</small>
              </p>

              <button
                onClick={() =>
                  addToBasket(
                    product.id,
                    product.title,
                    product.price,
                    product.rating,
                    product.image
                  )
                }
                className="buy__btn"
              >
                Satın Al
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
