import React from 'react';

const SideNotice = () => {
    return (
        <div className='mininews'>
            <div className='mininews_title'>
                <h4>공지 사항</h4>
            </div>
            <div className='mininews_main'>
                <ul className='mininews_list'>
                    <li>
                        <div className='mininews_desc'>
                            <h6>버추얼 스트리머 분들의 기념일 캘린더와 기사 리액션 기능을 선보입니다.</h6>
                            <p>2023-03-14</p>
                        </div>
                        <div className='mininews_desc'>
                            <h6>VROZ 1기 팬 기자, 팬 번역가 추가 모집을 실시합니다.</h6>
                            <p>2023-03-13</p>
                        </div>
                        <div className='mininews_desc'>
                            <h6>VROZ 팬 기자, 팬 번역가 제1차 모집이 마감되었습니다.</h6>
                            <p>2023-03-07</p>
                        </div>
                        <div className='mininews_desc'>
                            <h6>VROZ에서는 버추얼 스트리머 분들의 정보를 무상으로 기사화 해드리고 있습니다.</h6>
                            <p>2023-03-04</p>
                        </div>
                        <div className='mininews_desc'>
                            <h6>VROZ의 팬 기자, 팬 번역가 제도를 본격적으로 실시합니다.</h6>
                            <p>2023-03-01</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNotice;