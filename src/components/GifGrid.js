import React from 'react';
import { useFecthGift } from '../hooks/useFecthGift';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images , loading } = useFecthGift( category );

    return (
    <>
            <h3 className="animate__animated animate__flash">{category}</h3>

            {loading && <p className="animate__animated animate__flash">loading</p> }
        <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem
                        key={ img.id}
                        {...img }
                        />
                    ))
                }
        </div>
    </>
    );
};

