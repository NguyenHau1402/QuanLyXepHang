import React, { useState } from 'react';
import Input from '../../Input/Input';
import '../AddDichVu/AddDichVu.css'
import Button1 from '../../Button/Button';
import { db } from '../../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'antd';

export const AddDichVu = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
      navigate(-1);
    };
  

   

    const [MaDV, setMaDV] = useState('');
    const [TenDV, setTenDV] = useState('');
    const [MoTa, setMoTa] = useState('');
    

    const handleAddDevice = async () => {
        const newDevice = {
            MaDV,
            TenDV,
            MoTa,
            
        };

        try {
            const docRef = await addDoc(collection(db, 'DichVu'), newDevice);
            alert("Thêm thành công");
            setMaDV('');
            setTenDV('');
            setMoTa('');
            window.location.reload();
        } catch (error) {
            console.error('Lỗi khi thêm thiết bị:', error);
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
                        placeholder={'Nhập mã dịch vụ'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaDV(e.target.value)}
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
                        placeholder={'Nhập tên dịch vụ'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTenDV(e.target.value)}
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
                        placeholder={'Mô tả dịch vụ'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoTa(e.target.value)}
                        style={{
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
                        <Button1 text="Thêm dịch vụ" type="secondary" onClick={() => handleAddDevice()} />
                    </div>
                </div>
            </div>
        </div>
    );
};
