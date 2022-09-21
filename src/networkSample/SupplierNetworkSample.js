import React, { useEffect } from 'react'
import { apiManager } from '../service/api'

function SupplierNetworkSample() {

    useEffect(() => {

        
        

        //eğer sunucu 2xx dışında (200,201,202 success hariç) bir sonuç dönerse catch bloğunda yakala!
        apiManager.getAll('supplierss')
            .then(data => console.log('DATA', data))
            .catch(err => console.log('Supplier Network comp error!!', err))


      



    }, [])


    return (<>

    </>
    )
}

export default SupplierNetworkSample