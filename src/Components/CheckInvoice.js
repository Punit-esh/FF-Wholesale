import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { Table } from "./Table";

export const CheckInvoice = () => {
  const [data, setdata] = useState({});
  const [loader, setloader] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let search_var = window.location.search.substring(1).split("&");
    // console.log(search_var);
    if (
      search_var[0].split("=")[0] != "orderid" ||
      search_var[1].split("=")[0] != "token"
    ) {
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
          // navigate("/notfound");
          return;
        }
        setdata({
          date: data.date == "" ? "-" : data.date,
          time: data.time == "" ? "-" : data.time,
          invoiceno: data.invoiceno == "" ? "-" : data.invoiceno,
          orderno: data.orderno == "" ? "-" : data.orderno,
          // orderrequired:
          //   "The order required Alabama state and Jackson county stamp",
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
        // navigate("/generated-invoice");

        if (window.innerWidth >= 700) {
          // setTimeout(() => printDocument(), 1000);
        }
      });
  }, []);
  const printDocument = () => {
    // code to print and download file converting from html to pdf
    // html2pdf(document.body);
    window.print();
  };
  if (window.innerWidth < 700) {
    return (
      <div className="phone_err">
        <span>Please view it on your Desktop</span>
      </div>
    );
  }
  console.log(data);

  return loader ? (
    <>
      <div className="loading">Loading ...</div>
    </>
  ) : (
    <>
      <div className="printinvoice">
        <div className="fixed-header header">
          <div className="navbar1">
            <div className="invoiceno">
              INVOICE #{/* {invoiceno} */}
              {data.invoiceno}
            </div>
            {/* <div className="logo"> */}
            <img className="logo" src={logo} />
            {/* </div> */}
          </div>
          <div className="navbar2">
            <div className="detail1">
              {data.date} {data.time}
              <br />
              <div className="orderno">Order {data.orderno}</div>
              {/* <div className="order_required">{data.orderrequired}</div> */}
            </div>
            <div className="address">
              <div className="add1">
                F&F Wholesale
              </div>
              {/* Address: 1722 C west broad st, Cookeville, TN, 38501 */}
              Address: Skyline Mart, 20482 AL-79,
              <br />
              Scottsboro, AL 35768
              <br />
              {/* Call : +1-844-392-7867 Fax : (256) 513-4880 */}
              Call : +1 (931) 636-8890
              <br />
              {/* www.cstoremaster.com */}
              {/* <br /> */}
              {/* DID #17002438 (We Report MSA) */}
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
      {/* <div className="phone_err">phone err</div> */}
    </>
  );
};
