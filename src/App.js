
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import { Home, Cart } from "./pages";


function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/cart" element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
