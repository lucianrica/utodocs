import { Route, Routes } from "react-router-dom";

import './App.css';
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='*' element={<PageNotFound />} />
      </ Routes>
    </>
  );
}

export default App;
