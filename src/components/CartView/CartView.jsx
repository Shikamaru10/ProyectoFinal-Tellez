import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import MyButton from "../MyButton/MyButton";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate()

  if (cart.length === 0) return <h1>Carrito Vacío</h1>;

  async function handleCheckOut (evt, data){
    const order = {
      buyer: {
        name:"ezequiel",
        email:"asdasdsa@g.com",
        phone:"1231231"
      },
      items: cart,
      total: 0,
      Date: new Date(),
      
    }
 
    const orderId = await createOrder(order)
    navigate (`/thankyou/${orderId}`)

  }
  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key = {item.id} className="cart-item">
        <img src={item.imgurl} alt={item.title}></img>
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
            X
          </MyButton>
        </div>
      ))}
      <MyButton colorBtn="Green" onTouchButton={handleCheckOut}>Comprar!</MyButton>
      <MyButton>Vaciar carrito</MyButton>
    </div>
  );
}

export default CartView;
