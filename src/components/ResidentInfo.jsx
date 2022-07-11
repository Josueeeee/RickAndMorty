import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({ location }) => {
    const [showItem, setShowItem] = useState({})
    const [isLoading, SetIsLoading] = useState(true)
    useEffect(() => {
        axios.get(location)
            .then(res => {setShowItem(res.data)
            SetIsLoading(false)})
    }, [])
    // console.log(showItem)
    

    return (
        <div>
            {isLoading? (
                <div className='card'>
                    <img src="./src/public/portalItem.gif" alt=""/>
                </div>
            ): (
                <div className='card'>
                <div className='status'>
                    <div className='statusc' style={showItem.status === "Alive" ? { background: "#00fa2a" } : showItem.status === "Dead" ? { background: "red" } : { background: "gray" }}></div>
                    <p>{showItem.status}</p>
                </div>
                <div className='image'>
                    <img src={showItem.image} alt="" />
                </div>
                <div className='info'>
                    <h4>{showItem.name}</h4>
                    <div>
                        <div className='space'>
                            <p className='colorGray'>Species:</p>
                            <p><b>{showItem.species}</b></p>
                        </div>
                        <div className='space'>
                            <p className='colorGray'>origin:</p>
                            <p><b>{showItem.origin?.name}</b></p>
                        </div>
                        <div className='space'>
                            <p className='colorGray'>episodes where apper:</p>
                            <p><b>{showItem.episode?.length}</b> </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
            
        </div>

    );
};

export default ResidentInfo;