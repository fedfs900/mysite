import React from 'react';
import Highlight from './main/Highlight';
import NewSlid from './main/NewSlid';
import './Main.css';

const Main = () => {
    return (
        <div className='pagecontainer'>
            <div >
                <div className='mainslide'>
                    <div className='main_left'>
                        <NewSlid/>
                        <Highlight/>
                    </div>
                    <div className='main_right'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;