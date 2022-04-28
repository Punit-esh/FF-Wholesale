import React, { useEffect, useState } from "react";
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

export const Printinvoice = () => {
  const ref = React.createRef();
  const { invoiceno } = useParams();

  const [data, setdata] = useState({});
  const [loader, setloader] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    let search_var = window.location.search.substring(1).split("&");
    console.log(search_var);
    if (
      search_var[0].split("=")[0] != "orderid" ||
      search_var[1].split("=")[0] != "token"
    ) {
      //   console.log("not equal");
      navigate("/notfound");
      return;
    }
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbwfcD6p2VLqTXC1fElUt6xsfq_UFY1xOIpHjxgj5A_yj6NZGMdParAHct7yx2Br6gfEjg/exec" +
          window.location.search
      )
      .then((response) => response.data)
      .then((data) => {
        if (data.error) {
          navigate("/notfound");
          return;
        }
        setdata({
          date: data.date == "" ? "-" : data.date,
          time: data.time == "" ? "-" : data.time,
          invoiceno: data.invoiceno == "" ? "-" : data.invoiceno,
          orderno: data.orderno == "" ? "-" : data.orderno,
          orderrequired: data.orderrequired == "" ? "-" : data.orderrequired,
          address: data.address.length == 0 ? ["-"] : data.address,
          deliveryType: data.deliveryType == "" ? "-" : data.deliveryType,
          route: data.route == "" ? "-" : data.route,
          stop: data.stop == "" ? "-" : data.stop,
          TQ: data.TQ == "" ? "-" : data.TQ,
          TST: data.TST == "" ? "-" : data.TST,
          TCoT: data.TCoT == "" ? "-" : data.TCoT,
          TCiT: data.TCiT == "" ? "-" : data.TCiT,
          TT: data.TT == "" ? "-" : data.TT,
          subT: data.subT == "" ? "-" : data.subT,
          shipping: data.shipping == "" ? "-" : data.shipping,
          return: data.return == "" ? "-" : data.return,
          discount: data.discount == "" ? "-" : data.discount,
          grandT: data.grandT == "" ? "-" : data.grandT,
          deliverT: data.deliverT == "" ? "-" : data.deliverT,
          collectedT: data.collectT == "" ? "-" : data.collectT,
          T: data.T == "" ? "-" : data.T,
          tableData: data.tableData == "" ? "-" : data.tableData,
        });
        setloader(false);
      });
    //     setTimeout(() => {
    //       setdata({
    //         date: "7/8/2019",
    //         time: "1:46 PM",
    //         no: "#100075631",
    //         orderrequired:
    //           "This order required Alabama state and Jackson county stamp",
    //         address: [
    //           "Account #100413",
    //           " HOLLYWOOD MINI MART",
    //           "32800 US HWY 72 Hollywood, Alabama, 35752",
    //         ],
    //         deliveryType: "Pickup",
    //         route: "-",
    //         stop: "-",
    //         TQ: 96,
    //         TST: "$ 46.21",
    //         TCoT: "$ 8.90",
    //         TCiT: "$0.00",
    //         TT: "55.11",
    //         // OT: "(1) $13.99",
    //         // To: "(16) $271.83",
    //         // NTo: "(76) $1041.05",
    //         // Ci: "(3) $73.92",
    //         // payCheck: "$1,400.78",
    //         // payChangeback: "$0.00",
    //         // payoutstandingbal: "$0.00",
    //         subT: "$1400.79",
    //         shiping: "$0.00",
    //         return: "$0.00",
    //         discount: "$0.00",
    //         grandT: "$1400.79",
    //         deliverT: "$0.00",
    //         collectedT: "$0.00",
    //         T: "$1400.79",
    //         tableData: [
    //           ..."11111111111111111111111111111".split("").map((el, i) => {
    //             return {
    //               id: i + 1,
    //               sku: "048500500736",
    //               product: "TROPICANA ORANGE JUICE 12/15.2OZ",
    //               qty: "1",
    //               price: "$13.99",
    //               statetax: "$0.00",
    //               countytax: "$0.00",
    //               citytax: "$0.00",
    //               amount: "$13.99",
    //             };
    //           }),
    //           ..."1111111111111111111111".split("").map((el, i) => {
    //             return {
    //               id: i + 1,
    //               sku: "048500500736",
    //               product:
    //                 "TROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZ",
    //               qty: "1",
    //               price: "$13.99",
    //               statetax: "$0.00",
    //               countytax: "$0.00",
    //               citytax: "$0.00",
    //               amount: "$13.99",
    //             };
    //           }),
    //         ],
    //       });
    //       setloader(false);
    //       // window.print();
    //       //   printDocument();
    //     }, 2000);
  }, []);
  // console.log(data);
  const printDocument = () => {
    // html2pdf(document.body)
    window.print();
  };
  return (
    // <table className='report-container printinvoice'>
    <div className="printinvoice" ref={ref}>
      {loader ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="fixed-header header">
            {/* <button onClick={printDocument}>pd</button> */}
            {/* <a href="https://restpack.io/html2pdf/save-as-pdf" target="_blank">Save this page as PDF</a> */}
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

          {/* </div> */}
          {/* </td>
                                </tr>
                            </thead> */}
          {/* <tbody className="report-container">
                                <tr>
                            <td> */}

          {/* <table>
                            <thead>
                                <tr>
                                    <td>
                                        <div class="page-header-space"></div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> */}
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
          {/* </td>
                                </tr>
                            </tbody>
                        </table> */}
          {/* </td>
                                </tr>
                            </tbody> */}
          {/* <tfoot className="report-footer">
                            <tr>
                            <td>
                            footer
                            </td>
                            </tr>
                        </tfoot> */}
          {/* <img width='100%' src={image} /> */}
        </>
      )}
    </div>
    // </table>
  );
};
