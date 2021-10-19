import React from 'react';


const List = (props) => {
    
    const {list} =props;
    let totalQuantity = 0;
    let total = 0;
    for (const service of list) {
        total = total + service.price;
        totalQuantity = list.length;
    }

    const collectionCost = total > 0 ? 150 : 0;
    const tax = (total + collectionCost) * .10;
    const grandTotal = total + collectionCost + tax;


    return (
        <div className="bg-white text-center p-3 shadow-lg sticky-lg-top">
            <h3 className="custom-color-blue">Diagnostic Summary</h3>
            <p>Test Added: <b>{totalQuantity}</b></p>
            <p>Cost: <b>${total}</b></p>
            <p>Sample Collection: <b>${collectionCost}</b></p>
            <p>Tax: <b>${tax}</b></p>
            <p>Grand Total: <b>${grandTotal}</b></p>
            {props.children}
        </div>
    );
};

export default List;