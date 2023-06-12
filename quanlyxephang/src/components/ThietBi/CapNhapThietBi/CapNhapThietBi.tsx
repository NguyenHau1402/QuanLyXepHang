import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Input from '../../Input/Input';
import Button1 from '../../Button/Button';
import '../AddThietBi/AddThietBi.css'


export const CapNhapThietBi = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [MaTB, setMaTB] = useState('');
  const [TenTB, setTenTB] = useState('');
  const [DiaChiIP, setDiaChiIP] = useState('');
  const [DichVuSuDung, setDichVuSuDung] = useState('');
  const [LoaiThietBi, setLoaiThietBi] = useState('');
  const [TenDangNhap, setTenDangNhap] = useState('');
  const [MatKhau, setMatKhau] = useState('');

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        if (!id) {
            console.log("ID không hợp lệ");
            console.log(id);
            return;
        }
        const deviceRef = doc(db, 'ThietBi', id);
        const deviceSnapshot = await getDoc(deviceRef);
        if (deviceSnapshot.exists()) {
          const deviceData = deviceSnapshot.data();
          setMaTB(deviceData.MaTB);
          setTenTB(deviceData.TenTB);
          setDiaChiIP(deviceData.DiaChiIP);
          setDichVuSuDung(deviceData.DichVuSuDung);
          setLoaiThietBi(deviceData.LoaiThietBi);
          setTenDangNhap(deviceData.TenDangNhap);
          setMatKhau(deviceData.MatKhau);
        } else {
          console.log('Thiết bị không tồn tại.');
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu thiết bị:', error);
      }
    };

    fetchDeviceData();
  }, [id]);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleUpdateDevice = async () => {
    const updatedDevice = {
      MaTB,
      TenTB,
      DiaChiIP,
      DichVuSuDung,
      LoaiThietBi,
      TenDangNhap,
      MatKhau,
    };

    try {
        if (!id) {
            console.log("ID không hợp lệ");
            console.log(id);
            return;
        }
      const deviceRef = doc(db, 'ThietBi', id);
      await updateDoc(deviceRef, updatedDevice);
      alert('Cập nhật thành công');
      navigate(-1);
    } catch (error) {
      console.error('Lỗi khi cập nhật thiết bị:', error);
    }
  };

  return (
    <div className='container-ip'>
      <div className='left'>
        <div className='title-addtb'>
          <h1>Quản lý thiết bị</h1>
          <h2>Cập nhật thông tin thiết bị</h2>
        </div>
        <div className='tttb-1'>
          <Input
            text={MaTB}
            label={'Mã thiết bị:*'}
            placeholder={MaTB}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMaTB(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-2'>
          <Input
            text={TenTB}
            label={'Tên thiết bị:*'}
            placeholder={TenTB}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTenTB(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-3'>
          <Input
            text={DiaChiIP}
            label={'Địa chỉ IP:*'}
            placeholder={DiaChiIP}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDiaChiIP(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-7'>
          <Input
            text={DichVuSuDung}
            label={'Dịch vụ:*'}
            placeholder={DichVuSuDung}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDichVuSuDung(e.target.value)}
            style={{
                width: '1042px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-bb'>
          <p>* Là trường thông tin bắt buộc</p>
        </div>
      </div>

      <div className='right'>
        <div className='tttb-4'>
          <Input
            text={LoaiThietBi}
            label={'Loại thiết bị:*'}
            placeholder={LoaiThietBi}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLoaiThietBi(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-5'>
          <Input
            text={TenDangNhap}
            label={'Tên đăng nhập:*'}
            placeholder={TenDangNhap}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTenDangNhap(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
        <div className='tttb-6'>
          <Input
            text={MatKhau}
            label={'Mật khẩu:*'}
            placeholder={MatKhau}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMatKhau(e.target.value)}
            style={{
                width: '482px',
                height: '44px',
                border: '1.5px solid #D4D4D7',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '10px 20px',
              }}
          />
        </div>
      </div>

      <div className='footer'>
        <div className='footer-container'>
          <div className='btn-hb'>
            <Button1 text={'Hủy bỏ'} type={'tertiary'} onClick={handleCancel} />
          </div>
          <div className='btn-ttb'>
            <Button1 text="Cập nhật" type="secondary" onClick={handleUpdateDevice} />
          </div>
        </div>
      </div>
    </div>
  );
};
