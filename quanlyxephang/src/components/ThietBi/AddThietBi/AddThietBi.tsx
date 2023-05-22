import React from 'react'
import Input from '../../Input/Input'
import '../AddThietBi/AddThietBi.css'
export const AddThietBi = () => {
  return (
    <div className='container-ip'>
      <div className='left'>
        <Input
          text={''}
          label={'Mã thiết bị:*'}
          placeholder={'Nhập mã thiết bị'}
          onChange={undefined}
          style={{
            width: '540px',
            height: '44px',
            border: '1.5px solid #D4D4D7',
            borderRadius: '8px',
            fontSize: '16px',
            padding: '10px 270px 10px 12px',
          }}
        ></Input>
      </div>
      <div className='right'>
        
      </div>

      <div className='footer'>
        <p>123</p>
      </div>



    </div>

  )
}
