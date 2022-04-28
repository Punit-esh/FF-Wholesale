import logo from "./logo.svg";
// import './App.css';
import "./style/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./Components/NotFound";
import { Printinvoice } from "./Components/Printinvoice";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Printinvoice />} />
          {/* <Route path='/:invoiceno' element={<Printinvoice/>} /> */}
          {/* <Route path='/invoice/:invoiceno' element={<Printinvoice/>} /> */}
          <Route path="/*" element={<NotFound />} />
          {/* <Route path='/notfound' element={<NotFound/>} /> */}
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </>
  );
}

export default App;
