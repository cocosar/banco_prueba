import React from "react"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Action from "./Action";
import LoginForm from './Login';
import Navbar from "./Navbar";

let url = window.location.href;
function getParameters(urlString) {
  let paramString = urlString.split("?")[1]
  let queryString = new URLSearchParams(paramString)
  let urlRetorno = queryString.get('RETORNO')
  return urlRetorno
  // for (let parameter of queryString.entries()) {
  //   console.log("Key is:" + parameter[0])
  //   console.log("Value is:" + parameter[1])
  // }
};
let urlRetorno = getParameters(url);

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<LoginForm/>}/>
        <Route path="/action" element={<Action url={urlRetorno}/>}/>
      </Routes>
      <p className="footer">
        Disclaimer: Esta maqueta emula la acción de ingreso a una entidad Bancaria para efectos de pruebas.
      </p>
    </Router>
  )
}

export default App
