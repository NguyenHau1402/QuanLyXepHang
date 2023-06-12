import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import './ThongTinThietBi.css'
const ThongTinThietBia = () => {
    const [deviceInfo, setDeviceInfo] = useState<any>(null);

    useEffect(() => {
        const fetchDeviceInfo = async () => {
            try {
                // Lấy thông tin chi tiết của thiết bị từ Firestore
                const deviceRef = doc(db, "ThietBi", "1Q63chl1P6u2bi7QWVxN");
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
    }, []);

    if (!deviceInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-ct">
            <div className="header">
                <h1>Thông tin chi tiết thiết bị</h1>
            </div>
            <div className="left">
                <p><strong>Mã thiết bị:</strong> {deviceInfo.MaTB}</p>
                <p><strong>Tên thiết bị:</strong> {deviceInfo.TenTB}</p>
                <p><strong>Địa chỉ IP:</strong> {deviceInfo.DiaChiIP}</p>
            </div>

            <div className="right">
                <p><strong>Loại thiết bị:</strong> {deviceInfo.LoaiThietBi}</p>
                <p><strong>Tên đăng nhập:</strong> {deviceInfo.TenDangNhap}</p>
                <p><strong>Mật khẩu:</strong> {deviceInfo.MatKhau}</p>
            </div>
            <div className="bottom">
                <p><strong>Dịch vụ sử dụng:</strong> {deviceInfo.DichVuSuDung}</p>
            </div>


            {/* Hiển thị các thuộc tính khác của thiết bị */}
        </div>

    );
};

export default ThongTinThietBia;
