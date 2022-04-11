import React from 'react'

export const Table = ({ tabledata, data }) => {
    return (
        <table className='table_data page' >
            <thead>
                <div className='address_shipingmethod'>
                    <div>
                        <div className='address_shipingmethod_title'>ADDRESS</div>
                        <div className='address_shipingmethod_body mr'>
                            {data.address?.map(el => <>{el}<br /></>)}
                        </div>
                    </div>
                    <div>
                        <div className='address_shipingmethod_title ml'>SHIPPING METHOD</div>
                        <div className='address_shipingmethod_body ml'>
                            Delivery Type: {data.deliveryType}<br />
                            Route: {data.route}, Stop: {data.stop}
                        </div>
                    </div>
                </div>
                <tr className='table_heading'>
                    <td className='row1'>No</td>
                    <td className='row2'>PRODUCT</td>
                    <td className='row3'>QTY</td>
                    <td className='row4'>PRICE</td>
                    <td className='row5'>STATE<br />TAX</td>
                    <td className='row6'>COUNTY<br />TAX</td>
                    <td className='row7'>CITY<br />TAX</td>
                    <td className='row8'>AMOUNT</td>
                </tr>
            </thead>
            {
                tabledata?.map(el =>
                    <tr className='table_row'>
                        <td className='row1'>{el.id}</td>
                        <td className='row2'>{el.product}</td>
                        <td className='row3'>{el.qty}</td>
                        <td className='row4'>{el.price}</td>
                        <td className='row5'>{el.statetax}</td>
                        <td className='row6'>{el.countytax}</td>
                        <td className='row7'>{el.citytax}</td>
                        <td className='row8'>{el.amount}</td>
                    </tr>
                )
            }
        </table>
    )
}
