import React from 'react';
import { Divider, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './DichVu.css'

interface DataType {
    key: string;
    madichvu: string;
    tendichvu: string;
    mota: string;
    trangthaihoatdongs: string[];

}


const columns: ColumnsType<DataType> = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'madichvu',
        key: 'madichvu',

    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tendichvu',
        key: 'tendichvu',

    },
    {
        title: 'Mô tả',
        dataIndex: 'mota',
        key: 'mota',

    },
    {
        title: 'Trạng thái hoạt động',
        key: 'trangthaihoatdongs',
        dataIndex: 'trangthaihoatdongs',
        filters: [
            {
                text: 'Ngưng hoạt động',
                value: 'Ngưng hoạt động',
            },
            {
                text: 'Hoạt động',
                value: 'Hoạt động',
            },

        ],

        onFilter: (value, record) => record.trangthaihoatdongs.join("").indexOf(String(value)) === 0,
        render: (_, { trangthaihoatdongs }) => (
            <>
                {trangthaihoatdongs.map((trangthaihoatdong) => {
                    let color = trangthaihoatdong.length < 10 ? 'green' : 'red';

                    return (
                        <Tag color={color} key={trangthaihoatdong}>
                            {trangthaihoatdong.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },

    {
        title: 'Xem thêm',
        key: 'action',
        render: (_) => (
            <Space size="middle">
                <a> Chi tiết </a>
                <a> Cập nhập </a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '2',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '3',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Ngưng hoạt động'],
    },
    {
        key: '4',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '5',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Ngưng hoạt động'],
    },
    {
        key: '6',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Ngưng hoạt động'],
    },
    {
        key: '7',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '8',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '9',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Ngưng hoạt động'],
    },
    {
        key: '10',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },
    {
        key: '11',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Ngưng hoạt động'],
    },
    {
        key: '12',
        madichvu: 'KIO_01',
        tendichvu: 'Kiosk',
        mota: 'Mô tả dịch vụ 1',
        trangthaihoatdongs: ['Hoạt động'],
    },


];

const DSDichVu: React.FC = () => (
    <Table
        columns={columns}

        
        dataSource={data}

    />


);
export default DSDichVu;