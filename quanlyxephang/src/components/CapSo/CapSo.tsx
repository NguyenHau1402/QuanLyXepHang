import React from 'react';
import { Divider, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './CapSo.css'
import moment from 'moment'

interface DataType {
    key: string;
    stt: string;
    tenkhachhang: string;
    tendichvu: string;
    thoigiancap: Date;
    hansudung: Date;
    trangthaihoatdongs: string[];
    nguoncap: string;

}


const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',

    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'tenkhachhang',
        key: 'tenkhachhang',

    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tendichvu',
        key: 'tendichvu',
        filters: [
            {
                text: 'Khám tim mạch',
                value: 'Khám tim mạch',
            },
            {
                text: 'Khám sản - Phụ khoa',
                value: 'Khám sản - Phụ khoa',
            },
            {
                text: 'Khám răng hàm mặt',
                value: 'Khám răng hàm mặt',
            },
            {
                text: 'Khám tổng quát',
                value: 'Khám tổng quát',
            },
            {
                text: 'Khám hô hấp',
                value: 'Khám hô hấp',
            },
            {
                text: 'Khám tai mũi họng',
                value: 'Khám tai mũi họng',
            },

        ],
        onFilter: (value, record) => record.tendichvu.indexOf(String(value)) === 0,

    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'thoigiancap',
        key: 'thoigiancap',
        render: (date) => {
            const formattedDate = moment(date).format('DD/MM/YYYY HH:mm'); // Định dạng lại ngày giờ
            return <span>{formattedDate}</span>;
          },
    },
    {
        title: 'Hạn sử dụng',
        dataIndex: 'hansudung',
        key: 'hansudung',
        render: (date) => {
            const formattedDate = moment(date).format('DD/MM/YYYY HH:mm'); // Định dạng lại ngày giờ
            return <span>{formattedDate}</span>;
          },
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'trangthaihoatdongs',
        dataIndex: 'trangthaihoatdongs',
        filters: [
            {
                text: 'Đang chờ',
                value: 'Đang chờ',
            },
            {
                text: 'Đã sử dụng',
                value: 'Đã sử dụng',
            },
            {
                text: 'Bỏ qua',
                value: 'Bỏ qua',
            },

        ],

        onFilter: (value, record) => record.trangthaihoatdongs.join("").indexOf(String(value)) === 0,
        render: (_, { trangthaihoatdongs }) => (
            <>
                {trangthaihoatdongs.map((trangthaihoatdong) => {
                    let color = trangthaihoatdong.length > 8 ? 'grey' : 'blue';
                    if (trangthaihoatdong === 'Bỏ qua') {
                        color = 'red';
                      }
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
        title: 'Nguồn cấp',
        dataIndex: 'nguoncap',
        key: 'nguoncap',
        filters: [
            {
                text: 'Kiosk',
                value: 'Kiosk',
            },
            {
                text: 'Hệ thống',
                value: 'Hệ thống',
            },
            

        ],
        onFilter: (value, record) => record.nguoncap.indexOf(String(value)) === 0,

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
        stt: '20100001',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tim mạch',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Kiosk',
    },
    {
        key: '2',
        stt: '20100002',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám sản - Phụ khoa',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Kiosk',
    },
    {
        key: '3',
        stt: '20100003',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám răng hàm mặt',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Hệ thống',
    },
    {
        key: '4',
        stt: '20100004',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tai mũi họng',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Kiosk',
    },
    {
        key: '5',
        stt: '20100005',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám hô hấp',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đã sử dụng'],
        nguoncap: 'Hệ thống',
    },
    {
        key: '6',
        stt: '20100006',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tổng quát',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đã sử dụng'],
        nguoncap: 'Hệ thống',
    },
    {
        key: '7',
        stt: '20100007',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tim mạch',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Kiosk',
    },
    {
        key: '8',
        stt: '20100008',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tai mũi họng',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Bỏ qua'],
        nguoncap: 'Kiosk',
    },
    {
        key: '9',
        stt: '20100009',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tim mạch',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đã sử dụng'],
        nguoncap: 'Kiosk',
    },
    {
        key: '10',
        stt: '20100010',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tổng quát',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Hệ thống',
    },
    {
        key: '11',
        stt: '20100011',
        tenkhachhang: 'Lê Huỳnh Ái Vân',
        tendichvu: 'Khám tim mạch',
        thoigiancap: new Date(2021, 10, 7, 14, 30),
        hansudung: new Date(2021, 10, 12, 14, 30),
        trangthaihoatdongs: ['Đang chờ'],
        nguoncap: 'Kiosk',
    },


];

const DSCapSo: React.FC = () => (
    <Table
        columns={columns}

        
        dataSource={data}

    />


);
export default DSCapSo;