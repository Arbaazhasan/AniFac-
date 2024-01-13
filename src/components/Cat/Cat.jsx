import React from 'react';
import './cat.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { refreshPage } from '../../Reducers.js';
import { getCatData, getDogData } from '../../api/animals.js';


const Cat = ({ category, img, fact, refresh }) => {

    const dispatch = useDispatch();


    useEffect(() => {
        category === "Cats" ? dispatch(getCatData()) : dispatch(getDogData());

    }, [refresh, category]);


    return (
        <div>
            <div className='factImage'>

                <h1>{category}</h1>

                <div className="image">
                    <img src={img} alt='iamge' />
                </div>

                <div className='paragraph'>
                    <p>{fact}</p>

                    <button onClick={() => { dispatch(refreshPage()); }} >Next</button>

                </div>

            </div>
        </div>

    );
};

export default Cat;