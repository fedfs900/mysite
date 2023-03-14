import React from 'react';

const Highlight = () => {
    return (
        <div className='highbox'>
            <div className='highbox_title'>
                <h2>인터뷰</h2>
            </div>
            <div className='highbox_main'>
                <ul className='highbox_list'>
                    <li className='highbox_1'>
                        <img src="assets/003.jpg"/>
                        <h5 className='highbox_sub'>디알엑스 챌린저스 '스폰지' 배영준 "우승 시 노래부르겠다"</h5>
                        <p className='highbox_desc'>내용...</p>
                    </li>
                    <li className='highbox_2'>
                        <img src="assets/003.jpg"/>
                        <h6 className='highbox_sub'>제목</h6>
                        <p className='highbox_desc'>내용...</p>
                    </li>
                    <li className='highbox_3'>
                        <img src="assets/003.jpg"/>
                        <h6 className='highbox_sub'>제목</h6>
                        <p className='highbox_desc'>내용...</p>
                    </li>
                    <li className='highbox_4'>
                        <img src="assets/003.jpg"/>
                        <h6 className='highbox_sub'>제목</h6>
                        <p className='highbox_desc'>내용...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Highlight;