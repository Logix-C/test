import React, { useState } from 'react';

const ReadMoreReadLess = ({limit, children}) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    const text = children;

    return (
    <div className='read-more-read-less'>
        {isReadMoreShown ? text : text.substring(0, limit) + " ..."}
        <button class="btn" onClick={toggleBtn}>{isReadMoreShown ? 'Show Less' : 'Read More'}</button>            
    </div>
)
}

export default ReadMoreReadLess;