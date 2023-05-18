import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Logoalta from '../Logo/Logo-MenuBar/Logo';
import '../MenuBar/MenuBar.css'
import DSThietBi from '../ThietBi/ThietBi';
const MenuBar = () => {
    return (
        <BrowserRouter basename="/">

            <div className='menu-bar'>

                <div className='logomenu'>
                    <Logoalta></Logoalta>
                </div>
                
                <nav>
                    <ul>
                        <li><Link to="/">
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
                                    d="M18.333 9.083V3.417c0-1.25-.533-1.75-1.858-1.75h-3.367c-1.325 0-1.858.5-1.858 1.75v5.666c0 1.25.533 1.75 1.858 1.75h3.367c1.325 0 1.858-.5 1.858-1.75ZM18.333 16.583v-1.5c0-1.25-.533-1.75-1.858-1.75h-3.367c-1.325 0-1.858.5-1.858 1.75v1.5c0 1.25.533 1.75 1.858 1.75h3.367c1.325 0 1.858-.5 1.858-1.75ZM8.75 10.917v5.666c0 1.25-.533 1.75-1.858 1.75H3.525c-1.325 0-1.858-.5-1.858-1.75v-5.666c0-1.25.533-1.75 1.858-1.75h3.367c1.325 0 1.858.5 1.858 1.75ZM8.75 3.417v1.5c0 1.25-.533 1.75-1.858 1.75H3.525c-1.325 0-1.858-.5-1.858-1.75v-1.5c0-1.25.533-1.75 1.858-1.75h3.367c1.325 0 1.858.5 1.858 1.75Z"
                                />
                            </svg>
                            <span> Dashboard</span>
                        </Link></li>
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
                            <span> Thiết bị</span>

                        </Link>
                            
                        </li>
                        <li><Link to="/services">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={20}
                                fill="none"

                            >
                                <circle cx={4.58} cy={14.402} r={0.708} fill="#A9A9B0" />
                                <circle cx={6.941} cy={14.402} r={0.708} fill="#A9A9B0" />
                                <circle cx={9.302} cy={14.402} r={0.708} fill="#A9A9B0" />
                                <g fill="#A9A9B0" clipPath="url(#a)">
                                    <path d="M13.07 5.19a1.9 1.9 0 0 1 1.216.41c.672.541.769 1.46.206 2.11-.176.205-.385.388-.583.571-.246.227-.425.472-.41.83.011.26-.21.432-.467.425-.242-.011-.41-.198-.421-.457-.023-.476.145-.878.474-1.218.223-.234.47-.443.69-.68.302-.323.235-.743-.153-.966a1.111 1.111 0 0 0-.407-.136c-.448-.055-.85.08-1.022.648a.44.44 0 0 1-.553.296c-.242-.07-.369-.3-.302-.552.202-.783.87-1.277 1.732-1.28ZM13.073 9.99a.43.43 0 0 1 .433.442.436.436 0 0 1-.47.42.432.432 0 0 1-.422-.45c.008-.24.205-.42.46-.413Z" />
                                </g>
                                <path
                                    stroke="#A9A9B0"
                                    strokeMiterlimit={10}
                                    strokeWidth={1.5}
                                    d="M21 8.186c0 1.875-1.011 3.56-2.622 4.733a.222.222 0 0 0-.089.173l-.07 1.825a.316.316 0 0 1-.484.256l-1.546-.972h-.003a.354.354 0 0 0-.298-.045c-.92.287-1.92.446-2.967.446h-.042c.028-.184.042-.37.042-.56 0-2.616-2.669-4.736-5.962-4.736-.677 0-1.326.09-1.933.253a5.163 5.163 0 0 1-.187-1.379c0-3.546 3.616-6.418 8.08-6.418C17.383 1.767 21 4.642 21 8.186ZM5.028 9.564C2.685 10.202 1 11.97 1 14.047c0 1.382.747 2.627 1.933 3.494.042.03.064.078.067.128l.05 1.345a.235.235 0 0 0 .36.19l1.142-.72.028-.019a.157.157 0 0 1 .148-.027c.69.222 1.443.345 2.234.345 3.053 0 5.572-1.825 5.92-4.176"
                                />
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M11.32 5.19h3.54v5.665h-3.54z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span> Dịch vụ</span>
                        </Link></li>
                        <li><Link to="/numbering">
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
                                    strokeMiterlimit={10}
                                    strokeWidth={1.5}
                                    d="M1.667 7.083h9.583M5 13.75h1.667M8.75 13.75h3.333"
                                />
                                <path
                                    stroke="#A9A9B0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M18.333 10.025v3.4c0 2.925-.741 3.658-3.7 3.658H5.367c-2.959 0-3.7-.733-3.7-3.658v-6.85c0-2.925.741-3.658 3.7-3.658h5.883"
                                />
                                <path
                                    stroke="#A9A9B0"
                                    strokeLinecap="round"
                                    strokeWidth={1.5}
                                    d="M13.75 5.208h4.583M16.042 7.5V2.917"
                                />
                            </svg>
                            <span> Cấp số</span>
                        </Link></li>
                        <li><Link to="/reports">
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
                            <span> Báo cáo</span>
                        </Link></li>
                        <li><Link to="/system-update"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"

                        >
                            <path
                                stroke="#A9A9B0"
                                d="m8.686 18.044-.003-.002-4.568-2.633c-.953-.643-1.332-.94-1.524-1.27-.183-.315-.224-.713-.224-1.73V7.592c0-1.019.039-1.418.218-1.732.185-.326.553-.618 1.489-1.252L8.675 1.95h.001c.345-.201.817-.314 1.312-.314.494 0 .966.113 1.31.313l.002.001 4.585 2.641c.953.643 1.333.94 1.524 1.27.183.316.224.714.224 1.731V12.4c0 1.019-.039 1.418-.217 1.732-.186.326-.554.619-1.49 1.253l-4.6 2.657c-.359.206-.835.317-1.326.317-.492 0-.966-.112-1.314-.315ZM4.233 4.817l-.015.01-.014.009-.016.01a14 14 0 0 0-.8.564c-.213.169-.395.345-.526.57-.133.23-.188.469-.213.725-.024.24-.024.527-.024.864V12.424c0 .336 0 .625.024.865.026.258.083.498.219.73.132.224.318.402.534.574.21.166.484.351.819.577l.015.011.015.01.016.01 4.55 2.624c.346.2.787.28 1.187.28s.841-.08 1.187-.28h.001l4.583-2.65.016-.01.015-.01.016-.01c.324-.22.59-.401.795-.564.211-.168.393-.345.523-.57.132-.229.186-.468.212-.724.023-.239.023-.527.023-.864V7.57c0-.337 0-.625-.024-.866a1.734 1.734 0 0 0-.219-.729c-.132-.225-.318-.403-.534-.574-.21-.167-.484-.352-.819-.578l-.015-.01-.015-.01-.016-.01-4.547-2.623-.001-.001c-.347-.202-.787-.276-1.185-.276s-.838.074-1.185.276l-4.582 2.65Z"
                            />
                            <path
                                fill="#292D32"
                                stroke="#A9A9B0"
                                d="M10 12.625a2.626 2.626 0 0 1 0-5.25 2.626 2.626 0 0 1 0 5.25Zm0-5A2.378 2.378 0 0 0 7.625 10 2.378 2.378 0 0 0 10 12.375 2.378 2.378 0 0 0 12.375 10 2.378 2.378 0 0 0 10 7.625Z"
                            />
                        </svg>
                            <span> Cài đặt hệ thống</span>
                        </Link></li>
                        <div className='logout-btn'>
                            <li><Link to="/log-out">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="none"

                                >
                                    <path
                                        stroke="#FF7506"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.333 14.167 17.5 10l-4.167-4.167M17.5 10h-10M7.5 17.5H4.167A1.667 1.667 0 0 1 2.5 15.833V4.167A1.667 1.667 0 0 1 4.167 2.5H7.5"
                                    />
                                </svg>
                                <span> Đăng xuất</span>
                            </Link></li>
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

        </BrowserRouter >
    );
};

export default MenuBar;