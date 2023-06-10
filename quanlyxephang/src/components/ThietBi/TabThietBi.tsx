import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { db } from "../../firebase/firebase";
import './ThietBi.css'

const YourComponent = () => {
    const [userList, setUserList] = useState<any[]>([]);

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

    const renderTrangThaiKetNoi = ( _: any, record: any) => {
        let color = record.TrangThaiKetNoi.length < 10 ? 'green' : 'red';
        let tagContent = record.TrangThaiKetNoi.toUpperCase();

        return (
            <Tag color={color} key={record.TrangThaiKetNoi}>
                {tagContent}
            </Tag>
        );
    };

    const renderTrangThaiHoatDong = ( _: any, record: any) => {
        let color = record.TrangThaiHoatDong.length < 10 ? 'green' : 'red';
        let tagContent = record.TrangThaiHoatDong.toUpperCase();

        return (
            <Tag color={color} key={record.TrangThaiHoatDong}>
                {tagContent}
            </Tag>
        );
    };

    return (
        <Table
            dataSource={userList}
            columns={[
                { title: "Mã thiết bị", dataIndex: "MaTB", key: "MaTB" },
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
                { title: "Dịch vụ sử dụng", dataIndex: "DichVuSuDung", key: "DichVuSuDung" },
                Table.EXPAND_COLUMN,
                {
                    title: 'Xem thêm',
                    key: 'action',
                    render: (_) => (
                        <Space size="middle">
                            <a> Chi tiết </a>
                            <a> Cập nhập </a>
                        </Space>
                    ),
                },
            ]}
            rowKey="MaTB"
        />
    );
};

export default YourComponent;
