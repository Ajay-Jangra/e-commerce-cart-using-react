import { useEffect } from "react"
import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import Profile from './components/profile/Profile';
import { ToastContainer } from "react-toastify";

import { useCart } from './context/cart'


import Register from './components/Register';
import { auth } from './firebase.js';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./redux/reducers/userSlice.js";
import Footer from "./components/footer/Footer"
 

function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }


  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch])



  return (
    <>
      {!user ? (
        <>
          <div style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column", marginTop: "5%" }}>
            <h1 style={{ display: "flex", alignContent: "center", justifyContent: "center", padding: "20px" }}>Welcome to the SUSTAINABLE_CART 😀😀</h1>
            <Register />
          </div>
        </>
      ) : (
        <>
          <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
          <ToastContainer position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
            <div>
              <Footer />
            </div> 
          
        </>
      )
      }
    </>
  );
}

export default App;
