import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import './ThongTinThietBi.css'

const ThongTinThietBi = () => {
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
                const deviceRef = doc(db, "ThietBi", id);
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
            <h1>Quản lý thiết bị</h1>
            <h1>Thông tin chi tiết thiết bị</h1>
        </div><div className="container-ct">
                <div className="left"style={{ marginLeft: '20px' }}>
                    <p><strong>Mã thiết bị:</strong> {deviceInfo.MaTB}</p>
                    <p><strong>Tên thiết bị:</strong> {deviceInfo.TenTB}</p>
                    <p><strong>Địa chỉ IP:</strong> {deviceInfo.DiaChiIP}</p>
                </div>

                <div className="right">
                    <p><strong>Loại thiết bị:</strong> {deviceInfo.LoaiThietBi}</p>
                    <p><strong>Tên đăng nhập:</strong> {deviceInfo.TenDangNhap}</p>
                    <p><strong>Mật khẩu:</strong> {deviceInfo.MatKhau}</p>
                </div>
                <div className="bottom"style={{ marginLeft: '20px' }}>
                    <p><strong>Dịch vụ sử dụng:</strong> {deviceInfo.DichVuSuDung}</p>
                </div>


                {/* Hiển thị các thuộc tính khác của thiết bị */}
            </div></>


    );
};

export default ThongTinThietBi;


