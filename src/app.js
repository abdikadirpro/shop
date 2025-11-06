import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from '../src/components/pages/home'
import About from '../src/components/pages/about'
import Contact from '../src/components/pages/contact'
import Cart from '../src/components/pages/cart'
import { useState } from "react";



const App = ()=>{
    const [cart , setcart] = useState(7);
    return( 
        <div className="container">
         <Header cart = {cart} setcart = {setcart} />
       <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/cart" element = {<Cart setcart={setcart} />}/>
       </Routes>
        </div>
      
    )                       
}
export default App;