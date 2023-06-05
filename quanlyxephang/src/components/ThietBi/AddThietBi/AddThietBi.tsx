import React from 'react'
import Input from '../../Input/Input'
import '../AddThietBi/AddThietBi.css'
export const AddThietBi = () => {
  return (
    <div className='container-ip'>
      <div className='left'>
        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  text={''}
                  label={'Mã thiết bị:*'}
                  placeholder={'Nhập mã thiết bị'}
                  onChange={undefined}
                  style={{
                    width: '520px',
                    height: '44px',
                    border: '1.5px solid #D4D4D7',
                    borderRadius: '8px',
                    fontSize: '16px',
                    padding: '10px 20px',
                  }}
                />
              </td>
              <td>báds</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='right'>

      </div>

      <div className='footer'>
        <p>123</p>
      </div>



    </div>

  )
}
