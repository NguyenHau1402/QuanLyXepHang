import { Link, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import './ThongTinCapSo.css'
import Button1 from "../../Button/Button";

const ThongTinCapSo = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    const [deviceInfo, setDeviceInfo] = useState<any>(null);

    useEffect(() => {
        const fetchDeviceInfo = async () => {
            try {

                if (!id) {
                    console.log("ID không hợp lệ");
                    console.log(id);
                    return;
                }
                const deviceRef = doc(db, "CapSo", id);
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
            <h1>Quản lý cấp số</h1>
            <h1>Thông tin cấp số</h1>
        </div><div className="container-ct">
                <div className="left" style={{ marginLeft: '20px' }}>
                    <p><strong>Họ tên:</strong> {deviceInfo.TenKH}</p>
                    <p><strong>Tên dịch vụ:</strong> {deviceInfo.TenDV}</p>
                    <p><strong>Số thứ tự:</strong> {deviceInfo.STT}</p>
                    <p><strong>Thời gian cấp:</strong> {deviceInfo.ThoiGianCap}</p>
                    <p><strong>Hạn sử dụng:</strong> {deviceInfo.HanSuDung}</p>
                </div>

                <div className="right">
                    <p><strong>Nguồn cấp:</strong> {deviceInfo.NguonCap}</p>
                    <p><strong>Trạng thái:</strong> {deviceInfo.TrangThaiHoatDong}</p>
                    <p><strong>Số điện thoại:</strong> {<span>0927131801</span>}</p>
                    <p><strong>Địa chỉ Email:</strong> {<span>haunguyen.1402.2002@gmail.com</span>}</p>
                </div>

                <div className='update-btn'>
                    <div className='img-add'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                           
                        >
                            <path
                                fill="#FF9138"
                                d="M16.889.333H7.112C2.865.333.333 2.865.333 7.111v9.765c0 4.259 2.532 6.79 6.779 6.79h9.765c4.247 0 6.778-2.531 6.778-6.778V7.111c.012-4.246-2.52-6.778-6.767-6.778ZM14.24 16.818H8.5a.881.881 0 0 1-.875-.875c0-.478.397-.875.875-.875h5.74a2.721 2.721 0 0 0 2.719-2.718A2.714 2.714 0 0 0 14.24 9.63H8.325l.304.304a.884.884 0 0 1-.012 1.248.865.865 0 0 1-.619.257.865.865 0 0 1-.618-.257L5.548 9.34a.88.88 0 0 1 0-1.237L7.38 6.271a.88.88 0 0 1 1.237 0 .88.88 0 0 1 0 1.237l-.385.385h6.008a4.476 4.476 0 0 1 4.469 4.468c0 2.462-2.007 4.457-4.469 4.457Z"
                            />
                        </svg>
                    </div>
                    <Button1 type='add' text='Quay lại'  onClick={handleCancel}></Button1>
                </div>



                {/* Hiển thị các thuộc tính khác của thiết bị */}
            </div></>


    );
};

export default ThongTinCapSo;


