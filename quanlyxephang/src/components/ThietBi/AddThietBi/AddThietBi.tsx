import React from 'react'
import Input from '../../Input/Input'
import '../AddThietBi/AddThietBi.css'
import Button1 from '../../Button/Button'
export const AddThietBi = () => {
  return (
    <div className='container-ip'>

      <div className='left'>
        <div className='title-addtb'>
          <h1>Quản lý thiết bị</h1>
          <h2>Thông tin thiết bị</h2>
        </div>
        <div className='tttb-1'>
          <Input
            text={''}
            label={'Mã thiết bị:*'}
            placeholder={'Nhập mã thiết bị'}
            onChange={undefined}
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
            text={''}
            label={'Tên thiết bị:*'}
            placeholder={'Nhập tên thiết bị'}
            onChange={undefined}
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
            text={''}
            label={'Địa chỉ IP:*'}
            placeholder={'Nhập địa chỉ IP'}
            onChange={undefined}
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
            text={''}
            label={'Dịch vụ:*'}
            placeholder={'Nhập dịch vụ sử dụng'}
            onChange={undefined}
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
            text={''}
            label={'Loại thiết bị:*'}
            placeholder={'Chọn loại thiết bị'}
            onChange={undefined}
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
            text={''}
            label={'Tên đăng nhập:*'}
            placeholder={'Nhập tài khoản'}
            onChange={undefined}
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
            text={''}
            label={'Mật khẩu:*'}
            placeholder={'Nhập mật khẩu'}
            onChange={undefined}
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
            <Button1 text={'Hủy bỏ'} type={'tertiary'}></Button1>
          </div>
          <div className='btn-ttb'>
            <Button1 text={'Thêm thiết bị'} type={'secondary'}></Button1>
          </div>

        </div>

      </div>



    </div>

  )
}
