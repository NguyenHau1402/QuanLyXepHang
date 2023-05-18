import React from 'react';
import { Divider, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './ThietBi.css'

interface DataType {
    key: string;
    mathietbi: string;
    tenthietbi: string;
    diachiip: string;
    trangthaihoatdongs: string[];
    trangthaiketnois: string[];
    dichvus: string;
    xemthem: string;
}


const columns: ColumnsType<DataType> = [
    {
        title: 'Mã thiết bị',
        dataIndex: 'mathietbi',
        key: 'mathietbi',

    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'tenthietbi',
        key: 'tenthietbi',

    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'diachiip',
        key: 'diachiip',

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
        title: 'Trạng thái kết nối',
        key: 'trangthaiketnois',
        dataIndex: 'trangthaiketnois',
        filters: [
            {
                text: 'Mất kết nối',
                value: 'Mất kết nối',
            },
            {
                text: 'Kết nối',
                value: 'Kết nối',
            },

        ],
        onFilter: (value, record) => record.trangthaiketnois.join("").indexOf(String(value)) === 0,
        render: (_, { trangthaiketnois }) => (
            <>
                {trangthaiketnois.map((trangthaiketnoi) => {
                    let color = trangthaiketnoi.length < 10 ? 'green' : 'red';

                    return (
                        <Tag color={color} key={trangthaiketnoi}>
                            {trangthaiketnoi.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },

    {
        title: 'Dịch vụ sử dụng',
        dataIndex: 'dichvus',
        key: 'dichvus',

    },

    Table.EXPAND_COLUMN,
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
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '2',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Hoạt động'],
        trangthaiketnois: ['Kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '3',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '4',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '5',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '6',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '7',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Hoạt động'],
        trangthaiketnois: ['Kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '8',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '9',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '10',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '11',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '12',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '13',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '14',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '15',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '16',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '17',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '18',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '19',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '20',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    {
        key: '21',
        mathietbi: 'KIO_01',
        tenthietbi: 'Kiosk',
        diachiip: '192.168.1.10',
        trangthaihoatdongs: ['Ngưng hoạt động'],
        trangthaiketnois: ['Mất kết nối'],
        dichvus: 'Khám tim mạch, Khám sản...',
        xemthem: 'Khám tim mạch, Khám sản - phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát'
    },
    
];

const DSThietBi: React.FC = () => (
    <Table
        columns={columns}

        expandable={{
            expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.xemthem}</p>,
        }}
        dataSource={data}

    />


);
export default DSThietBi;