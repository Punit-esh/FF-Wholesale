import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../img/logo.png";
import image from "../img/Capture.png";
import { Table } from "./Table";
import html2pdf from "html-to-pdf-js";
import axios from "axios";
// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'
// import  html_to_pdf from 'html-pdf-node';
// import Pdf from "react-to-pdf";

export const Printinvoice = ({ data }) => {
  const [loader, setloader] = useState(true);

  const navigate = useNavigate();
  useLayoutEffect(() => {
    setTimeout(() => printDocument(), 0);
  }, []);
  const printDocument = () => {
    // code to print and download file converting from html to pdf
    // html2pdf(document.body);
    window.print();
  };
  return (
    <div className="printinvoice">
      <div className="fixed-header header">
        <div className="navbar1">
          <div className="invoiceno">
            INVOICE #{/* {invoiceno} */}
            {data.invoiceno}
          </div>
          <img className="logo" src={logo} />
        </div>
        <div className="navbar2">
          <div className="detail1">
            {data.date} {data.time}
            <br />
            <div className="orderno">Order {data.orderno}</div>
            <div className="order_required">{data.orderrequired}</div>
          </div>
          <div className="address">
            <div className="add1">Ganesh Distributors TN LLC</div>
            Address: 1722 C west broad st, Cookeville, TN, 38501
            <br />
            Call : +1-844-392-7867 Fax : (256) 513-4880
            <br />
            www.cstoremaster.com
            <br />
            DID #17002438 (We Report MSA)
            <br />
          </div>
        </div>
      </div>
      <table>
        <thead className="blankthead">
          <tr>
            <th>
              <div className="t-head">&nbsp;</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="content">
                <Table tabledata={data.tableData} data={data} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
