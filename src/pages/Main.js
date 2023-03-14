import React from 'react';
import Highlight from './main/Highlight';
import NewSlid from './main/NewSlid';
import './Main.css';
import NewsNews from './main/NewsNews';

const Main = () => {
    return (
        <div className='pagecontainer'>
            <div >
                <div className='mainslide'>
                    <div className='main_left'>
                        <NewSlid/>
                        <Highlight/>
                        <NewsNews/>
                    </div>
                    <div className='main_right'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;