import Input from "../../../components/Input/Input"
import Button1 from "../../../components/Button/Button"

import banner from './Banner/Banner.svg'
import '../Login/Login.css'
import Logoalta from "../../../components/Logo/Logo-Login/Logo"
export const Login = () => {
  return <div className='background'>
    <div className='leftLogo'>
      <div className="logo-location">
        <Logoalta></Logoalta>
      </div>


      <div className='inputname-location'>
        <Input text={''} label={'Tên đăng nhập *'} placeholder={'Tên của bạn...'} onChange={undefined}></Input>
      </div>
      <div className='inputpass-location'>
        <Input text={''} label={'Mật khẩu *'} placeholder={'Mật khẩu...'} onChange={undefined}></Input>
      </div>
      <div className='button-login'>
        <Button1 type='primary' text='Đăng nhập'></Button1>
      </div>
    </div>


    <div className='banner'>

      <div className='banner-img2'>
        <img alt='banner' src={banner}></img>
      </div>

    </div>
  </div>

}

