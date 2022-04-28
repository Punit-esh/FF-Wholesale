import logo from "./logo.svg";
// import './App.css';
import "./style/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./Components/NotFound";
import { Printinvoice } from "./Components/Printinvoice";
import { useState } from "react";
import { CheckInvoice } from "./Components/CheckInvoice";

function App() {
  const [data, setdata] = useState({});

  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<CheckInvoice setdata={setdata} />} />
          <Route
            exact
            path="/generated-invoice"
            element={<Printinvoice data={data} />}
          />
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
