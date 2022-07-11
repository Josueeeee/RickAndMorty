import React from 'react';

const LocationsInfo = ({locations}) => {
    return (
        <div>
            <div className='title'>
                <h2>{locations.name}</h2>
            </div>
            <div className='cardsheader'>
                <div className='cardheader'>
                    <div className='card'><p><b>Type:</b><br />{locations.type}</p></div><div></div>
                    <div className='card'><p><b>Dimension:</b><br />{locations.dimension} </p></div>
                    <div className='card'><p><b>population: </b> <br />{locations.residents?.length} </p></div>
                </div>
            </div>
        </div>
    );
};

export default LocationsInfo;