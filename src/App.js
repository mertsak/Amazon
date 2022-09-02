import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setUser } from "./redux/ProductsSlice";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const onSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        dispatch(setUser(authUser));
      } else {
        //logged out
        dispatch(setUser(null));
      }
    });

    return () => {
      onSubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
