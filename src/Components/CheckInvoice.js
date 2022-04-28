import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckInvoice = ({ setdata }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let search_var = window.location.search.substring(1).split("&");
    console.log(search_var);
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
          navigate("/notfound");
          return;
        }
        setdata({
          date: data.date == "" ? "-" : data.date,
          time: data.time == "" ? "-" : data.time,
          invoiceno: data.invoiceno == "" ? "-" : data.invoiceno,
          orderno: data.orderno == "" ? "-" : data.orderno,
          orderrequired:
            "The order required Alabama state and Jackson county stamp",
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
        // setloader(false);
        navigate("/generated-invoice");

        // printDocument();
      });
  }, []);

  return <div className="loading">Loading ...</div>;
};
