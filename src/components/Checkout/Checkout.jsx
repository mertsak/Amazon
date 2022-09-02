import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CurrencyFormat from "react-currency-format";

import CheckoutBanner from "../../assets/checkoutBanner.png";

import { removeBasket } from "../../redux/ProductsSlice";

import {
  incrementQuantity,
  decrementQuantity,
} from "../../redux/ProductsSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.products.basket);
  const user = useSelector((state) => state.products.user);

  const removeToBasket = (id) => {
    dispatch(removeBasket(id));
  };

  const getBasketTotal = (basket) => {
    let total = 0;
    basket.map((x) => (total += x.price * x.quantity));
    return total;
  };

  const getBasketQuantity = (basket) => {
    let total = 0;
    basket.map((x) => (total += x.quantity));
    return total;
  };

  return (
    <div className="checkout__container">
      <div className="checkout__banner__container">
        <div className="checkout__con">
          <img src={CheckoutBanner} alt="" />

          <div className="checkout__price">
            <CurrencyFormat
              renderText={(value) => (
                <p>
                  Subtotal({getBasketQuantity(basket)} items):{" "}
                  <strong>{value} TL</strong>
                </p>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
            />

            <div>
              <div className="checkout__price__gift">
                <input type="checkbox" />
                <span style={{ whiteSpace: "nowrap" }}>
                  This order contains a gift
                </span>
              </div>

              <button className="checkout__btn">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
      {basket.length === 0 ? (
        <div className="checkout__empty">
          <h2> {user?.email} Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket . to buy one or more item , click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <>
          <h3>Your Shopping Basket</h3>
          <hr />
          <div className="checkout__product">
            <div className="checkout__item__con">
              {basket.map((x) => (
                <>
                  <div className="checkout__item__c">
                    <div className="checkout__item">
                      <img
                        src={require(`../../assets/ProductsImage/${x.img}`)}
                        alt=""
                      />
                      <div className="checkout__content">
                        <p className="checkout__item__title">{x.title}</p>
                        <CurrencyFormat
                          renderText={(value) => (
                            <p className="checkout__item__price">
                              {value} <span>TL</span>
                            </p>
                          )}
                          value={x.price}
                          decimalScale={2}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        <p>
                          {Array(x.rating)
                            .fill()
                            .map((x) => {
                              return (
                                <span style={{ color: "#FDA11C" }}>
                                  &#9733;
                                </span>
                              );
                            })}
                        </p>
                        <button
                          onClick={() => removeToBasket(x.id)}
                          className="checkout__item__btn"
                        >
                          Remove From Basket
                        </button>
                      </div>
                    </div>

                    <div className="amount__count">
                      <button onClick={() => dispatch(incrementQuantity(x.id))}>
                        +
                      </button>
                      <span>{x.quantity}</span>
                      <button onClick={() => dispatch(decrementQuantity(x.id))}>
                        -
                      </button>
                    </div>
                  </div>

                  <hr />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
