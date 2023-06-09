import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { db } from "../../firebase/firebase";
import './DichVu.css'
import { Link, Route, Routes } from "react-router-dom";
import { CapNhapThietBi } from "../ThietBi/CapNhapThietBi/CapNhapThietBi";
import ThongTinThietBi from "../ThietBi/ThongTinThietBi/ThongTinThietBi";
import ThongTinDichVu from "./ThongTinDichVu/ThongTinDichVu";

const TabDichVu = () => {
    const [userList, setUserList] = useState<any[]>([]);




    useEffect(() => {
        const colRef = collection(db, "DichVu");
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
        let color = record.TrangThaiHoatDong.length < 10 ? 'green' : 'red';
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
                    title: "Mã dịch vụ",
                    dataIndex: "MaDV",
                    key: "MaDV",
                    defaultSortOrder: 'ascend',
                    sorter: (a, b) => {
                        const aIndex = parseInt(a.MaDV.split('_')[1]);
                        const bIndex = parseInt(b.MaDV.split('_')[1]);
                        return aIndex - bIndex;
                    },
                },
                { title: "Tên dịch vụ", dataIndex: "TenDV", key: "TenDV" },
                { title: "Mô tả", dataIndex: "MoTa", key: "MoTa" },
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
                Table.EXPAND_COLUMN,
                {
                    title: "Xem thêm",
                    key: "action",
                    render: (_, record) => (
                        <Space size="middle">
                            <Link to={`/services/detail/${record.id}`}>Chi tiết</Link>
                            <Link to={`/services/update/${record.id}`}>Cập nhập</Link>
                        </Space>
                    ),
                },
            ]}
            rowKey="MaDV" /><Routes>
                <Route path="/services/detail/:id" element={<ThongTinDichVu />} />
                <Route path="/services/update/:id" element={<CapNhapThietBi />} />
            </Routes></>

    );
};

export default TabDichVu;
