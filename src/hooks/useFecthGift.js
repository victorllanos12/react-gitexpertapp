import { useEffect, useState } from "react";
import { getGif } from '../helpers/getGif';


export const useFecthGift = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGif(category)
            .then(imgs =>{

                setState({
                    data:imgs,
                    loading:false

                });
            })

    },[category])


    return state;//{data: {}, loading: true}

};
