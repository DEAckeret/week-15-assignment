import React from "react";
import { NewBrandForm } from './NewBrandForm';

export const Candy = (props) => {
    const { candy, updateCandy } = props;

    const deleteBrand = (brandId) => {
        const updateCandy = {
            ...candy,
            brand: candy.brand.filter((x) => x._id !== brandId)
        };
        updateCandy(updateCandy);
    }

    const addNewBrand = (brand) => updateCandy({...candy, brands: [...candy.brands, brand ]});

    const brands = () => (
        <ul>
            {candy.brands.map((brand, index) => (
                <li key={index}>
                    <label>{`${brand.name} Quantity: ${brand.quantity}`}</label>
                    <button onClick={(e) => deleteBrand(brand._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{candy.name}</h1>
            {
                brands({ brands, candyId: candy._id, deleteBrand})
            }
            <NewBrandForm addNewBrand={addNewBrand} />
        </div>
    );
};