import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage, Signup,Home,CreateProduct } from "./routes/routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route paths='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/createproduct' element={<CreateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
