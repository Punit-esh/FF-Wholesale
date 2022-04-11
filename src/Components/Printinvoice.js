import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../img/logo.png'
import image from '../img/Capture.png'
import { Table } from './Table'

export const Printinvoice = () => {
    const { invoiceno } = useParams()

    const [data, setdata] = useState({})
    const [loader, setloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setdata({
                date: '7/8/2019',
                time: '1:46 PM',
                orderno: '#100075631',
                orderrequired: 'This order required Alabama state and Jackson county stamp',
                address: ['Account #100413', ' HOLLYWOOD MINI MART', '32800 US HWY 72', ' Hollywood, Alabama, 35752'],
                deliveryType: 'Pickup',
                route: '-',
                stop: '-',
                TQ:96,
                TST:'$46.21',
                TCoT:'$8.90',
                TCiT:'$0.00',
                TT:'55.11',
                OT:'(1) $13.99',
                To:'(16) $271.83',
                NTo:'(76) $1041.05',
                Ci:'(3) $73.92',
                payCheck:'$1,400.78',
                payChangeback:'$0.00',
                payoutstandingbal:'$0.00',
                subT:'$1400.79',
                shiping:'$0.00',
                return:'$0.00',
                discount:'$0.00',
                grandT:'$1400.79',
                deliverT:'$0.00',
                collectedT:'$0.00',
                T:'$1400.79',
                tableData: [
                    ...'11111111111111111111111111111'.split("").map(
                        (el, i) => {

                            return {
                                id: i + 1,
                                sku: '048500500736',
                                product: 'TROPICANA ORANGE JUICE 12/15.2OZ',
                                qty: '1',
                                price: '$13.99',
                                statetax: '$0.00',
                                countytax: '$0.00',
                                citytax: '$0.00',
                                amount: '$13.99'
                            }
                        }
                    ),
                    ...'1111111111111111111111'.split("").map(
                        (el, i) => {

                            return {
                                id: i + 1,
                                sku: '048500500736',
                                product: 'TROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZTROPICANA ORANGE JUICE 12/15.2OZ',
                                qty: '1',
                                price: '$13.99',
                                statetax: '$0.00',
                                countytax: '$0.00',
                                citytax: '$0.00',
                                amount: '$13.99'
                            }
                        }
                    )
                ]
            })
            setloader(false)
        }, 2000)
    }, [])
    console.log(data);
    // var doc = new jsPDF();
    // var specialElementHandlers = {
    //     '#editor': function (element, renderer) {
    //         return true;
    //     }
    // };

    // $('#cmd').click(function () {
    //     doc.fromHTML($('#content').html(), 15, 15, {
    //         'width': 170,
    //             'elementHandlers': specialElementHandlers
    //     });
    // });
    // const downloadpdf = ()=>{
    //     doc.fromHTML(document.getElementById('root'), 15, 15, {
    //         'width': 170,
    //         'elementHandlers': specialElementHandlers
    //     });
    //     doc.save('sample-file.pdf');
    // }
    return (
        // <table className='report-container printinvoice'>
        <div className='printinvoice'>
            {
                loader ?
                    <h1>loading...</h1>
                    :
                    <>
                        <div className="fixed-header header">
                    {/* <button onClick={downloadpdf}>dp</button> */}

                            {/* <div className="page-header" > */}

                            <div className='navbar1'>
                                <div className='invoiceno'>INVOICE #{invoiceno}</div>
                                <img className='logo' src={logo} />
                            </div>
                            <div className='navbar2'>

                                <div className='detail1'>
                                    {data.date} {data.time}<br />
                                    <div className='orderno'>
                                        Order {data.orderno}
                                    </div>
                                    <div className='order_required'>
                                        {data.orderrequired}
                                    </div>
                                </div>
                                <div className='address'>
                                    <div className='add1'>
                                        Ganesh Distributors TN LLC
                                    </div>
                                    Address: 1722 C west broad st, Cookeville, TN, 38501<br />
                                    Call : +1-844-392-7867 Fax : (256) 513-4880<br />
                                    www.cstoremaster.com<br />
                                    DID #17002438 (We Report MSA)<br />
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
                            <thead>
                                <tr>
                                    <th>
                                        <div class="t-head">&nbsp;</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="content">
                                            <Table tabledata={data.tableData} data = {data} />
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
            }
        </div>
        // </table>
    )
}
