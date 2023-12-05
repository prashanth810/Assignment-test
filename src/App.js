import Nav from "./components/Nav";
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Singleproduct from "./components/Singleproduct";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Getcart from "./cart/Getcart";
import Logout from "./authentication/Logout";
import Addpost from "./components/Addpost";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">

    
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<Singleproduct/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cart" element={<Getcart/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/add" element={<Addpost/>} />
          {/* <Route path="/up/:id" element={<Update/>} /> */}
          <Route path="/update/:id2" element={<Update/>} />
        </Routes>
     
     
    </div>
  );
}

export default App;
