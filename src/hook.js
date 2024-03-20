// Implementation of useFlip Logic and Functionality 

import React, { useState } from 'react';

const useFlip = () => {
    const [ isFlipped, setIsFlipped ] = useState( false );

    const toggleFlip = () => {
        console.log( isFlipped );
        setIsFlipped( !isFlipped );
        console.log( isFlipped );
    }

    return [ isFlipped, toggleFlip ];
}

export default useFlip;