import React from 'react';

const Pages = ({pages}) => {
    console.log(pages)
    return (
        <div >
            <div className='pages'>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            </div>
            <div className='Footer'>
                Jeffrey Josué Ramírez Rodiguez
            </div>
        </div>
    );
};

export default Pages;