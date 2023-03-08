import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <header>
            {/* 공통으로 쓰이는 공용 부분 */}
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-4 col-sm-3 col-md-2 logo'>로고</div>
                    <nav className='col-8 col-sm-9 col-md-10'>
                        <ul className='header_menu'>
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/news">NEWS</Link></li>
                            <li><Link to="/notice">공지사항</Link></li>
                            <li><Link to="/esports">e-sports</Link></li>
                            <li><Link to="/inquiry">문의</Link></li>
                            <li class="search">
                                <form method="get" action="/search" class="search-bar">
                                    <div class="row no-gutters align-items-center form-search">
                                        <div class="col-9 p-1">
                                            <input class="form-control" type="text" name="keyword"  placeholder="키워드 입력"/>
                                        </div>
                                        <div class="col-3 p-1">
                                            <button type="submit" class="w-100 genric-btn danger radius pl-0 pr-0">검색</button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;