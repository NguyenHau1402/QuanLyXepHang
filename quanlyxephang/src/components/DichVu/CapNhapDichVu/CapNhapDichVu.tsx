import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Input from '../../Input/Input';
import Button1 from '../../Button/Button';
import '../AddDichVu/AddDichVu.css'
import { Checkbox } from 'antd';


export const CapNhapDichVu = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [MaDV, setMaDV] = useState('');
    const [TenDV, setTenDV] = useState('');
    const [MoTa, setMoTa] = useState('');

    useEffect(() => {
        const fetchDeviceData = async () => {
            try {
                if (!id) {
                    console.log("ID không hợp lệ");
                    console.log(id);
                    return;
                }
                const deviceRef = doc(db, 'DichVu', id);
                const deviceSnapshot = await getDoc(deviceRef);
                if (deviceSnapshot.exists()) {
                    const deviceData = deviceSnapshot.data();
                    setMaDV(deviceData.MaDV);
                    setTenDV(deviceData.TenDV);
                    setMoTa(deviceData.MoTa);

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
            MaDV,
            TenDV,
            MoTa,

        };

        try {
            if (!id) {
                console.log("ID không hợp lệ");
                console.log(id);
                return;
            }
            const deviceRef = doc(db, 'DichVu', id);
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
                    <h1>Quản lý dịch vụ</h1>
                    <h2>Thông tin dịch vụ</h2>
                </div>
                <div className='tttb-1'>
                <Input
                    text={MaDV}
                    label={'Mã dịch vụ:*'}
                    placeholder={MaDV}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMaDV(e.target.value)}
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
                        text={TenDV}
                        label={'Tên dịch vụ:*'}
                        placeholder={'TenDV'}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTenDV(e.target.value)}                        style={{
                            width: '482px',
                            height: '44px',
                            border: '1.5px solid #D4D4D7',
                            borderRadius: '8px',
                            fontSize: '16px',
                            padding: '10px 20px',
                        }}
                    />
                </div>

                <div className='title-h2'>
                    <h2>Quy tắc cấp số</h2>
                </div>
                <div className='check-box-1'>
                    <Checkbox>
                        <div className='checkbox-content'>
                            <span className='check-box-text'>Tăng tự động từ: </span>
                            <Input
                                text={''}
                                label={''}
                                placeholder={1}
                                onChange={undefined}
                                style={{
                                    marginLeft: '140px',
                                    width: '46px',

                                }}
                            />
                            <span className='check-box-text-mg-l-50px'> đến</span>
                            <Input
                                text={''}
                                label={''}
                                placeholder={9999}
                                onChange={undefined}
                                style={{
                                    marginLeft: '240px',
                                    width: '46px',

                                }}
                            />
                        </div>
                    </Checkbox>
                </div>

                <div className='check-box-2'>
                    <Checkbox>
                        <div className='checkbox-content'>
                            <span className='check-box-text'>Prefix: </span>
                            <Input
                                text={''}
                                label={''}
                                placeholder={1}
                                onChange={undefined}
                                style={{
                                    marginLeft: '140px',
                                    width: '46px',

                                }}
                            />

                        </div>
                    </Checkbox>
                </div>
                <div className='check-box-3'>
                    <Checkbox>
                        <div className='checkbox-content'>
                            <span className='check-box-text'>Surfix: </span>
                            <Input
                                text={''}
                                label={''}
                                placeholder={1}
                                onChange={undefined}
                                style={{
                                    marginLeft: '140px',
                                    width: '46px',

                                }}
                            />

                        </div>
                    </Checkbox>
                </div>

                <div className='check-box-4'>
                    <Checkbox>
                        <div className='checkbox-content'>
                            <span className='check-box-text'>Reset mỗi ngày: </span>

                        </div>
                    </Checkbox>
                </div>




                <div className='tttb-bb-dv'>
                    <p>* Là trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className='right'>
                <div className='tttb-4'>
                    <Input
                        text={MoTa}
                        label={'Mô tả:*'}
                        placeholder={MoTa}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMoTa(e.target.value)}                        style={{
                            width: '482px',
                            height: '132px',
                            border: '1.5px solid #D4D4D7',
                            borderRadius: '8px',
                            fontSize: '16px',
                            padding: '62px 20px',
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
                        <Button1 text="Thêm dịch vụ" type="secondary" onClick={() => handleUpdateDevice()} />
                    </div>
                </div>
            </div>
        </div>
    );
};
