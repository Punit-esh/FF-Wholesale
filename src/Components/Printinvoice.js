import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../img/logo.png'
import image from '../img/Capture.png'
import { Table } from './Table'
import html2pdf from 'html-to-pdf-js'
// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'
// import  html_to_pdf from 'html-pdf-node';
// import Pdf from "react-to-pdf";


export const Printinvoice = () => {
    const ref = React.createRef();
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
                TQ: 96,
                TST: '$46.21',
                TCoT: '$8.90',
                TCiT: '$0.00',
                TT: '55.11',
                OT: '(1) $13.99',
                To: '(16) $271.83',
                NTo: '(76) $1041.05',
                Ci: '(3) $73.92',
                payCheck: '$1,400.78',
                payChangeback: '$0.00',
                payoutstandingbal: '$0.00',
                subT: '$1400.79',
                shiping: '$0.00',
                return: '$0.00',
                discount: '$0.00',
                grandT: '$1400.79',
                deliverT: '$0.00',
                collectedT: '$0.00',
                T: '$1400.79',
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
            // window.print();
            printDocument()
        }, 2000)
    }, [])
    // console.log(data);
    const printDocument = () => {
        html2pdf(document.body)
        // element.dispatchEvent(
        //     var c = new KeyboardEvent("keydown", {
        //     key: 'p',
        //     keyCode: 80, // example values.
        //     which: 80,
        //     ctrlKey: true,  // if you aren't going to use them.
        // })
        // var doc = new jsPDF();
        // var specialElementHandlers = {
        //         '#editor': function (element, renderer) {
        //             return true;
        //         }
        //     };
        // var makePDF = document.body;

        // // fromHTML Method
        // doc.html(makePDF, {
        //             // 'width': 170,
        //             // 'elementHandlers': specialElementHandlers
        //         });
        // doc.save("output.pdf");
        // const input = document.getElementById('root');
        // html2canvas(input)
        //   .then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'JPEG', 0, 0);
        //     // pdf.output('dataurlnewwindow');
        //     pdf.save("download.pdf");
        //   });
        // var html_to_pdf = require('html-pdf-node');

        // let options = { format: 'A4' };
        // // Example of options with args //
        // // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

        // let file = { content: document.getElementById('root').innerHTML };
        // // or //
        // // let file = { url: "https://example.com" };
        // html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        //     console.log("PDF Buffer:-", pdfBuffer);
        // });
        // var doc = new jsPDF();

        // doc.html(document.body, {
        //     callback: function (doc) {
        //         doc.save();
        //     },
        //     x: 10,
        //     y: 10
        // });
        // window.print()   
    }
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
        <div className='printinvoice' ref={ref}>
            {
                loader ?
                    <h1>loading...</h1>
                    :
                    <>
                        <div className="fixed-header header">
                {/* <button onClick={printDocument}>pd</button> */}
                {/* <a href="https://restpack.io/html2pdf/save-as-pdf" target="_blank">Save this page as PDF</a> */}
                            <div className='navbar1'>
                                <div className='invoiceno'>INVOICE #
                                    {/* {invoiceno} */}
                                    123456789
                                </div>
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
                                    Call : +1-844-392-7867
                                    Fax : (256) 513-4880<br />
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
            }
        </div>
        // </table>
    )
}
