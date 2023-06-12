import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { db } from "../../firebase/firebase";
import './ThietBi.css'
import ThongTinThietBi from "./ThongTinThietBi/ThongTinThietBi";
import { Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { AddThietBi } from "./AddThietBi/AddThietBi";
import {CapNhapThietBi} from "./CapNhapThietBi/CapNhapThietBi";

const TabThietBi = () => {
    const [userList, setUserList] = useState<any[]>([]);
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    useEffect(() => {
        const colRef = collection(db, "ThietBi");
        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const results: any[] = [];
            snapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setUserList(results);
        });
    }, []);
    const handleExpandRow = (recordId: string) => {
        if (expandedRows.includes(recordId)) {
            setExpandedRows((prevExpandedRows) =>
                prevExpandedRows.filter((rowId) => rowId !== recordId)
            );
        } else {
            setExpandedRows((prevExpandedRows) => [...prevExpandedRows, recordId]);
        }
    };

    const renderTrangThaiKetNoi = (_: any, record: any) => {
        if (!record.TrangThaiKetNoi || record.TrangThaiKetNoi.length === 0) {
            return null;
        }
        let color = record.TrangThaiKetNoi.length < 10 ? 'green' : 'red';
        let tagContent = record.TrangThaiKetNoi.toUpperCase();

        return (
            <Tag color={color} key={record.TrangThaiKetNoi}>
                {tagContent}
            </Tag>
        );
    };

    const renderTrangThaiHoatDong = (_: any, record: any) => {
        if (!record.TrangThaiHoatDong || record.TrangThaiHoatDong.length === 0) {
            return null;
        }
        let color = record.TrangThaiHoatDong.length < 10 ? 'green' : 'red';
        let tagContent = record.TrangThaiHoatDong.toUpperCase();

        return (
            <Tag color={color} key={record.TrangThaiHoatDong}>
                {tagContent}
            </Tag>
        );
    };
    const renderDichVuSuDung = (text: string, record: any) => {
        const xemthem = text.length > 20 ? `${text.substring(0, 20)} ... ` : text;
        const isExpanded = expandedRows.includes(record.id);

        return (
            <span className="dich-vu">
                {isExpanded ? text : xemthem}
                {text.length > 20 && (
                    <Space size="middle">
                        <span
                            className="xem-them"
                            onClick={() => handleExpandRow(record.id)}
                        >
                            {isExpanded ? " Thu gọn " : " Xem thêm "}
                        </span>
                    </Space>
                )}
            </span>
        );
    };

    const [showDetail, setShowDetail] = useState(false);

    const handleDetailClick = () => {
        setShowDetail(true);
    };

    return (
        <>
            <Table
                dataSource={userList}
                columns={[
                    {
                        title: "Mã thiết bị",
                        dataIndex: "MaTB",
                        key: "MaTB",
                        defaultSortOrder: 'ascend',
                        sorter: (a, b) => {
                            const aIndex = parseInt(a.MaTB.split('_')[1]);
                            const bIndex = parseInt(b.MaTB.split('_')[1]);
                            return aIndex - bIndex;
                        },
                    },
                    { title: "Tên thiết bị", dataIndex: "TenTB", key: "TenTB" },
                    { title: "Địa chỉ IP", dataIndex: "DiaChiIP", key: "DiaChiIP" },
                    {
                        title: "Trạng thái hoạt động",
                        dataIndex: "TrangThaiHoatDong",
                        key: "TrangThaiHoatDong",
                        filters: [
                            { text: "Hoạt động", value: "Hoạt động" },
                            { text: "Ngừng hoạt động", value: "Ngừng hoạt động" },
                        ],
                        onFilter: (value, record) => record.TrangThaiHoatDong === value,
                        render: renderTrangThaiHoatDong,
                    },
                    {
                        title: "Trạng thái kết nối",
                        dataIndex: "TrangThaiKetNoi",
                        key: "TrangThaiKetNoi",
                        filters: [
                            { text: "Mất kết nối", value: "Mất kết nối" },
                            { text: "Kết nối", value: "Kết nối" },
                        ],
                        onFilter: (value, record) => record.TrangThaiKetNoi === value,
                        render: renderTrangThaiKetNoi,
                    },
                    {
                        title: "Dịch vụ sử dụng",
                        dataIndex: "DichVuSuDung",
                        key: "DichVuSuDung",
                        render: renderDichVuSuDung,
                    },

                    Table.EXPAND_COLUMN,
                    {
                        title: "Xem thêm",
                        key: "action",
                        render: (_, record) => (
                            <Space size="middle">
                                <Link to={`/devices/detail/${record.id}`}>Chi tiết</Link>
                                <Link to={`/devices/update/${record.id}`}>Cập nhập</Link>
                            </Space>
                        ),
                    },
                ]}
                rowKey="MaTB"
            />
            <Routes>
                <Route path="/devices/detail/:id" element={<ThongTinThietBi />} />
                <Route path="/devices/update/:id" element={<CapNhapThietBi />} />
            </Routes>
        </>

    );
};

export default TabThietBi;
