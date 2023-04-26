import React from 'react'
import banner from '../image/banner.png'
import Logoalta from '../../components/Logo'
import Input from '../../components/Input'
import Button1 from '../../components/Button'
export const Login = () => {
  return <div className='container'>
    <div className='background'>
      <div className='leftLogo'>
        <Logoalta></Logoalta>
        
        <div className='inputname-location'>
          <Input text={''} label={'Tên đăng nhập *'} placeholder={'Tên của bạn...'} onChange={undefined}></Input>
        </div>
        <div className='inputpass-location'>
          <Input text={''} label={'Mật khẩu *'} placeholder={'Mật khẩu...'} onChange={undefined}></Input>
        </div>
        <div className='button-login'>
          <Button1 text = 'Đăng nhập'></Button1>
        </div>
      </div>


      <div className='banner'>

        <div className='banner-img2'>
          <img alt='banner' src={banner}></img>
        </div>

      </div>
    </div>
  </div>

}

