import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Summary from "./pages/Summary";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import Orders from "./admin/Orders";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/product/:id?" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/logout" component={Logout} />
      <Route path="/profile" component={Profile} />
      <Route path="/summary" component={Summary} />
      <Route path="/order-success" component={OrderSuccess} />
      <Route path="/order-history" component={OrderHistory} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/admin-orders" component={Orders} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
