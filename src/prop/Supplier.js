import React from 'react';
import PropTypes from 'prop-types';

//Eğer prop olarak country gelmezse default TURKEY yazsın! ****
function Supplier(props) {
    return (
        <>
            <>{props.companyName}</> 
            <>{props.country}</> 
            <>{props.addDate}</> 
            <>{props.isActive}</> 
        </>
    )
}

//proplara default değer atama
Supplier.defaultProps = {
     country : 'Turkey',
    companyName : 'Apple'
}

//propların tipini belirtme
Supplier.propTypes = {
    isActive : PropTypes.bool,
    companyName : PropTypes.string,
    //country: PropTypes.string.isRequired
}



export default Supplier