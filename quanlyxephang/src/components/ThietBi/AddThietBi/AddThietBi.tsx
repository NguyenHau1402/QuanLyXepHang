import React, { useState } from 'react';
import Input from '../../Input/Input';
import '../AddThietBi/AddThietBi.css';
import Button1 from '../../Button/Button';
import { db } from '../../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const AddThietBi = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const [MaTB, setMaTB] = useState('');
  const [TenTB, setTenTB] = useState('');
  const [DiaChiIP, setDiaChiIP] = useState('');
  const [DichVuSuDung, setDichVuSuDung] = useState('');
  const [LoaiThietBi, setLoaiThietBi] = useState('');
  const [TenDangNhap, setTenDangNhap] = useState('');
  const [MatKhau, setMatKhau] = useState('');

  const handleAddDevice = async () => {
    const newDevice = {
      MaTB,
      TenTB,
      DiaChiIP,
      DichVuSuDung,
      LoaiThietBi,
      TenDangNhap,
      MatKhau,
    };

    try {
      const docRef = await addDoc(collection(db, 'ThietBi'), newDevice);
      alert("Thêm thành công");
      setMaTB('');
      setTenTB('');
      setDiaChiIP('');
      setDichVuSuDung('');
      setLoaiThietBi('');
      setTenDangNhap('');
      setMatKhau('');
      window.location.reload();
    } catch (error) {
      console.error('Lỗi khi thêm thiết bị:', error);
    }
  };

  return (
    <div className='container-ip'>
      <div className='left'>
        <div className='title-addtb'>
          <h1>Quản lý thiết bị</h1>
          <h2>Thông tin thiết bị</h2>
        </div>
        <div className='tttb-1'>
          <Input
            text={MaTB}
            label={'Mã thiết bị:*'}
            placeholder={'Nhập mã thiết bị'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaTB(e.target.value)}
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
            placeholder={'Nhập tên thiết bị'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTenTB(e.target.value)}
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
            placeholder={'Nhập địa chỉ IP'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiaChiIP(e.target.value)}
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
            placeholder={'Nhập dịch vụ sử dụng'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDichVuSuDung(e.target.value)}
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
            placeholder={'Chọn loại thiết bị'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoaiThietBi(e.target.value)}
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
            placeholder={'Nhập tài khoản'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTenDangNhap(e.target.value)}
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
            placeholder={'Nhập mật khẩu'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMatKhau(e.target.value)}
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
            <Button1 text="Thêm thiết bị" type="secondary" onClick={() => handleAddDevice()} />
          </div>
        </div>
      </div>
    </div>
  );
};
