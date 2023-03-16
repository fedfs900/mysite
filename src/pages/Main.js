import React from 'react';
import Highlight from './main/Highlight';
import NewSlid from './main/NewSlid';
import './Main.css';
import NewsNews from './main/NewsNews';
import MiniHigh from './right/MiniHigh';

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
                        <MiniHigh/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;