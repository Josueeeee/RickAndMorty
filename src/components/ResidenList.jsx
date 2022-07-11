import React from 'react';
import ResidentInfo from './ResidentInfo';
const ResidenList = ({locations}) => {
    return (
        <ul className='cards'>
        {locations.residents?.map(location => (
          <ResidentInfo key={location} location={location} />
        ))}
      </ul>
    );
};

export default ResidenList;