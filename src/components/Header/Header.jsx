import React, { useState } from "react";
import { Link } from "react-router-dom";

// react-icons
import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

import { useSelector } from "react-redux";

import { auth } from "../../firebase";

// images
import AmazonLogo from "../../assets/Amazon_logo 1.svg";
import Basket from "../../assets/carbon_shopping-cart-minus.svg";


const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const basket = useSelector((state) => state.products.basket);
  const user = useSelector((state) => state.products.user);

  let total = 0;

  basket.map((x) => {
    total += x.quantity;
    return total;
  });

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <nav className="header">
        <div className="header__left">
          <div className="header__logo__container">
            <Link to="/">
              <img
                className="amazon__logo"
                src={AmazonLogo}
                alt="Amazon Logo"
              />
            </Link>
          </div>

          <div className="jellyfish__container">
            <GoLocation
              style={{
                color: "white",
                fontSize: "15px",
                marginTop: "15px",
              }}
            ></GoLocation>
            <div className="jellyfish__content">
              <span style={{ opacity: 0.6, fontSize: "12px" }}>Merhaba</span>
              <span className="jellyfish">Teslimat adresi seçin</span>
            </div>
          </div>
        </div>

        <div className="header__middle">
          <button className="all__cate">
            Tüm kategoriler <IoMdArrowDropdown style={{ fontSize: 14 }} />
          </button>

          <input type="text" />
          <button type="submit" className="search__icon">
            <AiOutlineSearch style={{ fontSize: 16 }} />
          </button>
        </div>

        <div className="header__right">
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="login__list"
          >
            <span className="login">
              Merhaba , {user ? user.email : "Giriş yapın"}
            </span>
            <span className="account">
              Hesap ve Listeler <IoMdArrowDropdown style={{ fontSize: 14 }} />
            </span>

            {isHovering && (
              <div onMouseEnter={handleMouseEnter} className="modal">
                <div className="modal__login">
                  <Link
                    to={!user && "/login"}
                    onClick={login}
                    className="login__btn"
                  >
                    {user ? "Çıkış Yap" : "Giriş Yap"}
                  </Link>

                  {user ? (
                    ""
                  ) : (
                    <span className="modal__login__text">
                      Yeni müşteri misinizi ?
                      <Link to="/login" className="member">Üye olun</Link>
                    </span>
                  )}
                </div>

                <hr />

                <div className="modal__list__account">
                  <div className="modal__list">
                    <h4>Listelerim</h4>
                    <div>Liste Oluşturun</div>
                    <div>Hediye Bulun</div>
                  </div>

                  <div className="line__up"></div>

                  <div className="modal__account">
                    <h4>Hesabım</h4>
                    <div>Hesabım</div>
                    <div>Siparişlerim</div>
                    <div>Benim İçin Önerilenler</div>
                    <div>Prime Üyeliğim</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="return__order">
            <span className="return">İadeler</span>
            <span className="order">ve Siparişler</span>
          </div>

          <Link to="/checkout" className="shopping">
            <span className="count">{total}</span>
            <img className="basket__icon" src={Basket} alt="" />
            <div className="shopping__basket">
              <span className="shopping__text">Alışveriş</span>
              <span className="basket">Sepeti</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
