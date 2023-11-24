import AdminPage from "./components/AdminPage/AdminPage";
import Debug from "./components/Debug/Debug";
import MainPage from "./components/MainPage/MainPage";
import NavigationHistory from "./components/NavigationHistory/NavigationHistory";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const products = [
  { id: 1, name: "Помідори", price: 90, selected: false },
  { id: 2, name: "Огірки", price: 80, selected: false },
  { id: 3, name: "Яблука", price: 20, selected: false },
  { id: 4, name: "Апельсин", price: 60, selected: false },
  { id: 5, name: "Ківі", price: 80, selected: false },
  { id: 6, name: "Банани", price: 70, selected: false },
];

export const DataContext = createContext(products);

export default function App() {
  return (
    <Router>
      <NavigationHistory>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={`/productInfo/:idx`} element={<ProductInfo />} />
          <Route path="/debug" element={<Debug />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </NavigationHistory>
    </Router>
  );
}
