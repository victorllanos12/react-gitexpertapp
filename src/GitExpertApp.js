import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Green arrow']);

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            {/* <button onClick={handleApp}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                    <GifGrid
                    key={category}
                    category={category}/>
                    ))
                }
            </ol>
        </>
    );
}

export default GitExpertApp
