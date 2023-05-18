import React from 'react'
import '../TrangChu/TrangChu.css'
import MenuBar from '../../components/MenuBar/MenuBar'
import DSThietBi from '../../components/ThietBi/ThietBi'
export const TrangChu = () => {
    return (
        <div className='background'>
            <div className='left'>
                <MenuBar></MenuBar>
            </div>
            <div className='right'>
                <div className='padding-table'>
                    <DSThietBi></DSThietBi>
                </div>

            </div>
        </div>
    )
}
