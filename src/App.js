import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//pages
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MealDetailsPage from './pages/MealDetailsPage/MealDetailsPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

//components
import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/meal/:id" element = {<MealDetailsPage />} />
        <Route path = "/meal/category/:name" element = {<CategoryPage />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
