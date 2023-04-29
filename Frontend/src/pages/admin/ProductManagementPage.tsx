import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const  ProductManagementPage = (props) => {
 
  const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const [collapsed, setCollapsed] = useState(false);
const {
  token: { colorBgContainer },
} = theme.useToken();


  const removeProduct = (id) => {
    props.onRemove(id);
  };

  interface DataType {
    key: string;
    price: string;
  
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img  width={100} src={image} alt="" />,
    },
    {
      title: 'Describe',
      dataIndex: 'describe',
      key: 'describe',
    },
    {
      title: 'Github',
      dataIndex: 'github',
      key: 'github',
    },
    {
      title: 'Preview',
      dataIndex: 'preview',
      key: 'preview',
    },
    {
      title: 'Start Time',
      dataIndex: 'starttime',
      key: 'starttime',
    },
    {
      title: 'End Time',
      dataIndex: 'endtime',
      key: 'endtime',
    },
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <Space size="middle">
          <Button onClick={() => {removeProduct(record.key)}} type="primary" danger>Remove</Button>
    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  
  const data = props.products.map((item => {
    return {
      key: item._id,
      name: item.name,
      category: item.category,
      // src: item.src,
      describe: item.describe,
      github: item.github,
      preview: item.preview,
      starttime: item.starttime,
      endtime: item.endtime,
      
     
    }
  }))
  return  (
  <div>
     <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
        <Button type="primary"><Link to={`/admin/products/add`}>Thêm mới</Link></Button>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />;
        </Content>
        
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </div>)
  
  
//  
};

export default ProductManagementPage;
