import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

    const [totalItems, setIndex] = useState(0);
    // initialize states
    const [cart, setCart] = useState([]);
    const [totalPrice, setPrice] = useState(0);

    const updatePrice = () => {
      let sum = 0;
      cart.forEach(i => sum += i.price);
      setPrice(sum);
    }

    // hepful for development assignment!!
    useEffect(() => {
      updatePrice();
    }, [cart]);
    

  // let item = bakeryData[totalItems];

  return (
    <div className="App">
      <h1>Serendipity Sweets Shop</h1> 
      <h4>One stop shop for anything sweet</h4>

      <div className = "wrapper">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} cart={cart} updateCart={setCart}/>
        //<p>Bakery Item {index}</p> // replace with BakeryItem component
      ))}

      
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map(e => <p>{e.name}</p>)}
        <p> {totalPrice} </p>

      </div>
    </div>

    // <div className="App">
    // <h1>Serendipity Sweets Shop</h1>
    // <p>One stop shop for anything sweet</p>
    // <div className="wrapper">
    //   <ItemList list={itemList} add={this.addToCart}></ItemList>
    //   <Cart
    //     cart={this.state.cart}
    //     addOne={this.addOne}
    //     removeOne={this.removeOne}
    //     remove={this.removeFromCart}
    //   ></Cart>
    // </div>
    // </div>

  );
}

export default App;
