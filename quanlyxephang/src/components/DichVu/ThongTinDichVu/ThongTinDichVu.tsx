import { Link, useParams } from "react-router-dom";
import { Firestore, collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import './ThongTinDichVu.css'
import Button1 from "../../Button/Button";
import { Space, Table, Tag } from "antd";

const ThongTinDichVu = () => {
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
    const { id } = useParams();
    console.log(id);
    const [deviceInfo, setDeviceInfo] = useState<any>(null);
    useEffect(() => {
        const fetchDeviceInfo = async () => {
            try {

                if (!id) {
                    console.log("ID không hợp lệ");
                    console.log(id);
                    return;
                }
                const deviceRef = doc(db, "DichVu", id);
                const deviceSnap = await getDoc(deviceRef);
                if (deviceSnap.exists()) {
                    setDeviceInfo(deviceSnap.data());
                } else {
                    console.log("Document không tồn tại");
                }
            } catch (error) {
                console.error("Lỗi khi lấy thông tin chi tiết thiết bị: ", error);
            }
        };

        fetchDeviceInfo();
    }, [id]);

    if (!deviceInfo) {
        return <div>Loading...</div>;
    }

    return (
        <><div className="header">
            <h1>Quản lý dịch vụ</h1>
            <h1>Thông tin dịch vụ</h1>
        </div><div className="container-ct">
                <div className="left" style={{ marginLeft: '20px' }}>
                    <p><strong>Mã dịch vụ:</strong> {deviceInfo.MaDV}</p>
                    <p><strong>Tên dịch vụ:</strong> {deviceInfo.TenDV}</p>
                    <p><strong>Mô tả:</strong> {deviceInfo.MoTa}</p>
                </div>

                <div className="right">
                    <Table
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

                        ]}
                        rowKey="MaDV"
                    />
                </div>
                <div className="bottom" style={{ marginLeft: '20px' }}>

                </div>

                <div className='update-btn'>
                    <Link to={`/services/update/${id}`}>


                        <div className='img-add'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"

                            >
                                <path
                                    fill="#FF9138"
                                    fillRule="evenodd"
                                    d="M17.443.345a6.21 6.21 0 0 1 4.58 1.62 6.278 6.278 0 0 1 1.632 4.592v10.885a6.268 6.268 0 0 1-1.62 4.592 6.238 6.238 0 0 1-4.592 1.62H6.558a6.22 6.22 0 0 1-4.592-1.62 6.22 6.22 0 0 1-1.62-4.592V6.557a6.22 6.22 0 0 1 1.62-4.592A6.22 6.22 0 0 1 6.558.345h10.885Zm-6.632 17.307 7.844-7.867a1.85 1.85 0 0 0 0-2.599L17.14 5.671a1.843 1.843 0 0 0-2.61 0l-.781.793a.31.31 0 0 0 0 .431s1.853 1.841 1.887 1.888a.79.79 0 0 1 .21.536c0 .42-.338.77-.769.77a.732.732 0 0 1-.513-.21l-1.946-1.935a.254.254 0 0 0-.35 0l-5.559 5.56a2.099 2.099 0 0 0-.618 1.444l-.07 2.762c0 .152.047.292.152.397a.555.555 0 0 0 .396.163h2.739c.56 0 1.096-.222 1.504-.618Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <Button1 type='add' text='Cập nhập dịch vụ'></Button1>

                    </Link>
                </div>



                {/* Hiển thị các thuộc tính khác của thiết bị */}
            </div></>


    );
};

export default ThongTinDichVu;
