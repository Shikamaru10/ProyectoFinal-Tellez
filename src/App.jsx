import React, { StrictMode } from "react"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartView from "./components/CartView/CartView"
import ThankYou from "./components/ThankYou/ThankYou"
import { CartContextProvider } from "./context/cartContext"


function App() {
  return (
    <div className="App">
      <StrictMode>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory"element={<ItemListContainer />}/>
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/thankyou/:idOrder" element={<ThankYou />} />
            <Route  path="*" element={<h1>Error 404: Está página no existe</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </StrictMode>
    </div>
  );
}

export default App;
