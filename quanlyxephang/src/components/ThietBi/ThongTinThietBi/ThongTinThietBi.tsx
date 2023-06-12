import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import './ThongTinThietBi.css'
import Button1 from "../../Button/Button";

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
                <div className="left" style={{ marginLeft: '20px' }}>
                    <p><strong>Mã thiết bị:</strong> {deviceInfo.MaTB}</p>
                    <p><strong>Tên thiết bị:</strong> {deviceInfo.TenTB}</p>
                    <p><strong>Địa chỉ IP:</strong> {deviceInfo.DiaChiIP}</p>
                </div>

                <div className="right">
                    <p><strong>Loại thiết bị:</strong> {deviceInfo.LoaiThietBi}</p>
                    <p><strong>Tên đăng nhập:</strong> {deviceInfo.TenDangNhap}</p>
                    <p><strong>Mật khẩu:</strong> {deviceInfo.MatKhau}</p>
                </div>
                <div className="bottom" style={{ marginLeft: '20px' }}>
                    <p><strong>Dịch vụ sử dụng:</strong> {deviceInfo.DichVuSuDung}</p>
                </div>

                <div className='update-btn'>
                    <Link to={`/devices/update/${id}`}>


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
                        <Button1 type='add' text='Cập nhập thiết bị'></Button1>

                    </Link>
                </div>



                {/* Hiển thị các thuộc tính khác của thiết bị */}
            </div></>


    );
};

export default ThongTinThietBi;


