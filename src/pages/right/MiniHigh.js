import React from 'react';

const MiniHigh = () => {
    return (
        <div className='mininews'>
            <div className='mininews_title'>
                <h4>많이 본 기사</h4>
            </div>
            <div className='mininews_main'>
                <ul className='mininews_list'>
                    <li>
                        <div className='mininews_desc'>
                            <h6>1. [인터뷰] “성장형 아이돌이 되고 싶어요!”… '니나' 주신님을 영접하다.</h6>
                            <p>7일전</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MiniHigh;