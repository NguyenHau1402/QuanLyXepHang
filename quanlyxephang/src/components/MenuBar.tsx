import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Logoalta from './Logo';
const Dashboard = () => {
    return (
        <BrowserRouter basename="/">

            <div className='menu-bar'>

                <div className='logomenu'>
                    <Logoalta></Logoalta>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/devices">Thiết bị</Link></li>
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

export default Dashboard;