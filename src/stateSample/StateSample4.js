import React, { useState } from 'react'

function StateSample4() {

    const cityList = ['Türkiye', 'Rusya', 'ABD', 'Iran', 'Azerbaycan'];

    const [cities, setcities] = useState(cityList);

    const removeAll = () => {
        setcities([])
    }


    const removeItem = (index) => {

        cities.splice(index, 1);
        console.log('Cities', cities);

        //bu da olmaz çünkü referansla ATIYORUM!!!
        //let newCities = cities
        
        //referans değişmediği için state değişimi algılamıyor ve RENDER ETMİYOR!
        // setcities(cities)
        
        setcities([...cities])
        
    }

    return (<>
        <ul>
            {
                cities && cities.map((item, key) => <li onClick={() => removeItem(key)} style={{ cursor: 'pointer' }} key={key}>{item}</li>)
            }
        </ul>

        <button onClick={() => removeAll()}>Remove All</button>
    </>
    )
}

export default StateSample4