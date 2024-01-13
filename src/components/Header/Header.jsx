import React, { useEffect, useState } from 'react';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnimal } from '../../Reducers';

const Header = () => {

    const dispatch = useDispatch();

    const CategoryHandler = (val) => {
        dispatch(changeAnimal({ val: val }));

    };


    return (
        <div>

            <div className="header">

                <div onClick={() => { CategoryHandler("Dogs"); }}>
                    <p>Dogs</p>
                </div>

                <div onClick={() => { CategoryHandler("Cats"); }}>
                    <p>Cats</p>
                </div>

            </div>

        </div>
    );
};

export default Header;