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
                        <img src="assets/2-1.jpg"/>
                        <h5 className='highbox_sub'>디알엑스 챌린저스 '스폰지' 배영준 "우승 시 노래부르겠다"</h5>
                        <p className='highbox_desc'>내용...</p>
                        <p className='date'>2일전</p>
                    </li>
                    <li className='highbox_2'>
                        <img src="assets/2-2.jpg"/>
                        <h6 className='highbox_sub'>대월향과 니지산지, 홀로라이브 소속의 버추얼 스트리머가 단체 콜라보 방송 진행!</h6>
                        <p className='highbox_desc'>한국의 버추얼 유튜버 대월향이 니지산지 소속인 민수하와 하윤, 홀로라이브 인도네시아 소속인...</p>
                        <p className='date'>2일전</p>
                    </li>
                    <li className='highbox_3'>
                        <img src="assets/2-3.jpg"/>
                        <h6 className='highbox_sub'>제목</h6>
                        <p className='highbox_desc'>내용...</p>
                        <p className='date'>2일전</p>
                    </li>
                    <li className='highbox_4'>
                        <img src="assets/2-4.jpg"/>
                        <h6 className='highbox_sub'>제목</h6>
                        <p className='highbox_desc'>내용...</p>
                        <p className='date'>2일전</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Highlight;