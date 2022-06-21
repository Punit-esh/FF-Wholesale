import React from "react";

export const Table = ({ tabledata, data }) => {
  return (
    <>
      <table className="table_data page">
        <thead>
          <tr>
            <td>
              <div className="address_shipingmethod">
                <div>
                  <div className="address_shipingmethod_title">ADDRESS</div>
                  <div className="address_shipingmethod_body mr">
                    {data.address?.map((el, i) => (
                      <span key={i}>
                        {el}
                        <br />
                      </span>
                    ))}
                    {/* {data.address} */}
                  </div>
                </div>
                <div>
                  <div className="address_shipingmethod_title ml">
                    SHIPPING METHOD
                  </div>
                  <div className="address_shipingmethod_body ml">
                    Delivery Type: {data.deliveryType}
                    <br />
                    Route: {data.route}, Stop: {data.stop}
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="table_heading">
            <td className="row1">No</td>
            <td className="row2">PRODUCT</td>
            <td className="row3">QTY</td>
            <td className="row4">PRICE</td>
            <td className="row5">
              STATE
              <br />
              TAX
            </td>
            <td className="row6">
              COUNTY
              <br />
              TAX
            </td>
            <td className="row7">
              CITY
              <br />
              TAX
            </td>
            <td className="row8">AMOUNT</td>
          </tr>
        </thead>
        <tbody>
          {tabledata?.map((el, i) => (
            <tr key={i} className="table_row">
              <td className="row1">{el.id == "" ? "-" : el.id}</td>
              <td className={"row2" + (el.product == "" ? " t-center" : "")}>
                {el.product == "" ? "-" : el.product}
              </td>
              <td className="row3">{el.qty}</td>
              <td className="row4">$ {el.price.trim() == "" ? "0.00" : Number(el.price).toFixed(2)}</td>
              <td className="row5">$ {el.statetax.trim() == "" ? "0.00" : Number(el.statetax).toFixed(2)}</td>
              <td className="row6">
                $ {el.countytax.trim() == "" ? "0.00" : el.countytax}
              </td>
              <td className="row7">$ {el.citytax.trim() == "" ? "0.00" : Number(el.citytax).toFixed(2)}</td>
              <td className="row8">$ {el.amount.trim() == "" ? "0.00" : Number(el.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page_footer">
        <div className="colm1_colm2">
          <div className="colm1">
            <div>
              <span>Total Quantity :</span>
              <span>{data.TQ}</span>
            </div>
            <div>
              <span>Total State Tax :</span>
              <span>$ {Number(data.TST).toFixed(2)}</span>
            </div>
            <div>
              <span>Total County Tax :</span>
              <span>$ {Number(data.TCoT).toFixed(2)}</span>
            </div>
            <div>
              <span>Total City Tax :</span>
              <span>$ {Number(data.TCiT).toFixed(2)}</span>
            </div>
            <div className="line"></div>
            <div>
              <span>TOTAL TAX :</span>
              <span>$ {Number(data.TT).toFixed(2)}</span>
            </div>
            <div className="line"></div>
            {/* <div>
              <span>Others :</span>
              <span>{data.OT}</span>
            </div>
            <div>
              <span>Tobacco :</span>
              <span>{data.To}</span>
            </div>
            <div>
              <span>Non Tobacco :</span>
              <span>{data.NTo}</span>
            </div>
            <div>
              <span>Cigarette :</span>
              <span>{data.Ci}</span>
            </div> */}
          </div>
          {/* <div className="colm2">
            <div className="bold">Payments :</div>
            <div className="line"></div>
            <div>
              <span>Check :</span>
              <span>{data.payCheck}</span>
            </div>
            <div className="line"></div>
            <div>
              <span>Change Back :</span>
              <span>{data.payChangeback}</span>
            </div>
            <div className="line"></div>
            <div>
              <span className="bold">Outstanding bal :</span>
              <span>{data.payoutstandingbal}</span>
            </div>
          </div> */}
        </div>
        <div className="colm3">
          <div>
            <span>Subtotal </span>
            <span>$ {Number(data.subT).toFixed(2)}</span>
          </div>
          <div>
            <span>Shipping </span>
            <span>$ {Number(data.shipping).toFixed(2)}</span>
          </div>
          <div>
            <span>Return </span>
            <span>$ {Number(data.return).toFixed(2)}</span>
          </div>
          <div>
            <span>Total Discount </span>
            <span>$ {Number(data.discount).toFixed(2)}</span>
          </div>
          <div className="line"></div>
          <div>
            <span>Grand Total </span>
            <span>$ {Number(data.grandT).toFixed(2)}</span>
          </div>
          <div>
            <span>Delivered Tote Amount</span>
            <span>$ {Number(data.deliverT).toFixed(2)}</span>
          </div>
          <div>
            <span>Collected Tote Amount</span>
            <span>$ {Number(data.collectedT).toFixed(2)}</span>
          </div>
          <div className="line"></div>
          <div className="bold">
            <span>Total :</span>
            <span className="red">$ {Number(data.T).toFixed(2)}</span>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="term ">
        <span>Term:</span> Please take advice of Local Law Enforcement of County
        & City to sell any kind of Legalize product in state of Alabama.
        CstoreMaster is not responsible for any Legal matters & will not take
        any return on these. By acceptance of goods delivered by you, I agree to
        pay your reasonable attorney’s fees and costs of collection should I
        fail to pay as agreed. Any check returned for insufficient funds or stop
        payment shall result in a fee of $30 charged to customer Thank You!
      </div>
      <div className="print_btn" onClick={() => { window.print(); }}>
        Print
      </div>
    </>
  );
};
