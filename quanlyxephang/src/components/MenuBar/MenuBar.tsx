import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Logoalta from '../Logo/Logo-MenuBar/Logo';
import '../MenuBar/MenuBar.css'
const MenuBar = () => {
    return (
        <BrowserRouter basename="/">

            <div className='menu-bar'>

                <div className='logomenu'>
                    <Logoalta></Logoalta>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/devices">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="none"
                            >
                                <path
                                    stroke="#A9A9B0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M5.367 1.667h9.258c2.967 0 3.708.742 3.708 3.7v5.275c0 2.967-.741 3.7-3.7 3.7H5.367c-2.959.008-3.7-.733-3.7-3.692V5.367c0-2.958.741-3.7 3.7-3.7ZM10 14.35v3.983M1.667 10.833h16.666M6.25 18.333h7.5"
                                />
                            </svg>
                            <span>Thiết bị</span>
                        </Link>
                        </li>
                        <li><Link to="/services">Dịch vụ</Link></li>
                        <li><Link to="/numbering">Cấp số</Link></li>
                        <li><Link to="/reports">Báo cáo</Link></li>
                        <li><Link to="/system-update">Cập nhật hệ thống</Link></li>
                        <div className='logout-btn'>
                            <li><Link to="/log-out">Đăng xuất</Link></li>
                        </div>

                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h2>Trang Dashboard</h2>} />
                    <Route path="/devices" element={<h2>Trang Thiết bị</h2>} />
                    <Route path="/services" element={<h2>TrangDịch vụ</h2>} />
                    <Route path="/numbering" element={<h2>Trang Cấp số</h2>} />
                    <Route path="/reports" element={<h2>Trang Báo cáo</h2>} />
                    <Route path="/system-update" element={<h2>Trang Cập nhật hệ thống</h2>} />
                    <Route path="/log-out" element={<h2>Đăng xuất</h2>} />
                </Routes>
            </div>

        </BrowserRouter>
    );
};

export default MenuBar;