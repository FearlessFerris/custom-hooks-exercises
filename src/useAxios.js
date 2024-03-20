// Implementation of useAxios Logic and Functionality 

import React, { useState } from 'react';
import axios from 'axios';

// const useAxios = ( url ) => {

//     const [ data, setData ] = useState( [] );

//     const fetchData = async () => {
//         try{
//             const response = await axios.get( url );
//             console.log( response.data );
//             setData( ( prevData ) => [ ...prevData, response.data ]);
//         }
//         catch( error ){
//             console.error( `An Error occurred while trying to complete your request`, error );
//         }
//     };

//     return [ data, fetchData ];
// }

// export default useAxios;

// PokeDex Implementation 

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const fetchData = async (urlSuffix) => {
    const response = await axios.get(`${baseUrl}${urlSuffix}`);
    setData((prevData) => [...prevData, response.data]);
  };

  return [data, fetchData];
};

export default useAxios;
