import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { db } from "../../firebase/firebase";
import './CapSo.css'
import { Link, Route, Routes } from "react-router-dom";
import ThongTinCapSo from "./ThongTinCapSo/ThongTinCapSo";

const TabCapSo = () => {
    const [userList, setUserList] = useState<any[]>([]);
    useEffect(() => {
        const colRef = collection(db, "CapSo");
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

    const renderTrangThaiHoatDong = (_: any, record: any) => {
        if (!record.TrangThaiHoatDong || record.TrangThaiHoatDong.length === 0) {
            return null;
        }
        let color = record.TrangThaiHoatDong.length > 8 ? 'gray' : 'blue';
        if (record.TrangThaiHoatDong.length === 6) {
            color = 'red';
        }
        if (record.TrangThaiHoatDong.length === 13) {
            color = 'green';
        }
        if (record.TrangThaiHoatDong.length === 14) {
            color = 'blue';
        }
        if (record.TrangThaiHoatDong.length === 4) {
            color = 'gray';
        }
        let tagContent = record.TrangThaiHoatDong.toUpperCase();

        return (
            <Tag color={color} key={record.TrangThaiHoatDong}>
                {tagContent}
            </Tag>
        );
    };

    return (
        <><Table
            dataSource={userList}
            columns={[
                {
                    title: "STT",
                    dataIndex: "STT",
                    key: "STT",
                    defaultSortOrder: 'ascend',
                    sorter: (a, b) => {
                        const aIndex = parseInt(a.STT);
                        const bIndex = parseInt(b.STT);
                        return aIndex - bIndex;
                    },
                },
                { title: "Tên khách hàng", dataIndex: "TenKH", key: "TenKH" },
                {
                    title: "Tên dịch vụ",
                    dataIndex: "TenDV",
                    key: "TenDV",
                    filters: [
                        { text: "Khám sản - Phụ khoa", value: "Khám sản - Phụ khoa" },
                        { text: "Khám răng", value: "Khám răng" },
                        { text: "Khám tổng quát", value: "Khám tổng quát" },
                    ],
                    onFilter: (value, record) => record.TenDV === value,
                },
                { title: "Thời gian cấp", dataIndex: "ThoiGianCap", key: "ThoiGianCap" },
                { title: "Hạn sử dụng", dataIndex: "HanSuDung", key: "HanSuDung" },
                {
                    title: "Trạng thái",
                    dataIndex: "TrangThaiHoatDong",
                    key: "TrangThaiHoatDong",
                    filters: [
                        { text: "Đang chờ", value: "Đang chờ" },
                        { text: "Đã sử dụng", value: "Đã sử dụng" },
                        { text: "Bỏ qua", value: "Bỏ qua" },
                        { text: "Đã hoàn thành", value: "Đã hoàn thành" },
                        { text: "Đang thực hiện", value: "Đang thực hiện" },
                        { text: "Vắng", value: "Vắng" },
                    ],
                    onFilter: (value, record) => record.TrangThaiHoatDong === value,
                    render: renderTrangThaiHoatDong,
                },
                {
                    title: "Nguồn cấp",
                    dataIndex: "NguonCap",
                    key: "NguonCap",
                    filters: [
                        { text: "Kiosk", value: "Kiosk" },
                        { text: "Hệ thống", value: "Hệ thống" },
                    ],
                    onFilter: (value, record) => record.NguonCap === value,
                },
                Table.EXPAND_COLUMN,
                {
                    title: "Xem thêm",
                    key: "action",
                    render: (_, record) => (
                        <Space size="middle">
                            <Link to={`/numbering/detail/${record.id}`}>Chi tiết</Link>

                        </Space>
                    ),
                },
            ]}
            rowKey="MaDV" /><Routes>
                <Route path="/numbering/detail/:id" element={<ThongTinCapSo />} />

            </Routes></>

    );
};

export default TabCapSo;
