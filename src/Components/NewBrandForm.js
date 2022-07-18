import React, { useState } from "react";

export const NewBrandForm = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(undefined);

    const handleQuantityInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setQuantity(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && quantity) {
            props.addNewBrand({name, quantity});
            setName('');
            setQuantity('');
        } else {
            console.log('not a good input');
        }
    };

    return(
        <div>
            <h4>Add a new brand of candy!</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder="quantity"
                    onChange={handleQuantityInput}
                    value={quantity}
                />
                <button type = 'submit'>Add a brand of candy!</button>
            </form>
        </div>
    )
}