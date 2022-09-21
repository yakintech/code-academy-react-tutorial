import React, { useEffect, useState } from 'react'
import { supplierNetwork } from '../network/requests/supplierNetwork';

function SupplierTable() {

    const [suppliers, setsuppliers] = useState([]);


    useEffect(() => {

        supplierNetwork.getAllSuppliers()
            .then(data => {
               
                setsuppliers(data);
            })

    }, [])



    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default SupplierTable