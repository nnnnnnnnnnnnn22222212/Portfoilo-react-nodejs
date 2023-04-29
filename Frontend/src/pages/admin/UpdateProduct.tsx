import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Upload, Select , DatePicker } from 'antd';
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

const UpdateProductPage = (props) => {
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
  const { RangePicker } = DatePicker;
  const navigate = useNavigate()
  // const { register, handleSubmit, reset } = useForm()
  const { id } = useParams() // lấy id từ url
  const [product, setProduct] = useState()
  useEffect(() => {
      const currentProduct = props.products.find(product => product.id == id) // tìm product có id trùng với id trên url
      
      setProduct(currentProduct) // reset lại form với giá trị của product
      
      
  }, [props])
  useEffect(() => 
  {
    setFields()
  },[product])
  const [form] = Form.useForm();
  const setFields = () => {// hàm này để set lại giá trị cho các input
    form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
        id: product?.id,
        name: product?.name,
        category: product?.category,
        describe: product?.describe,
        github: product?.github,
        preview	: product?.preview	


    })
}
    

    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/products')
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
      <div>
       <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
          <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Vui lòng không để trống danh mục' }]} >
            <Select>
              <Select.Option value="Danh mục 1">Danh mục 1</Select.Option>
              <Select.Option value="Danh mục 2">Danh mục 2</Select.Option>
              <Select.Option value="Danh mục 3">Danh mục 3</Select.Option>
            </Select>
          </Form.Item>
  
          
  
      <Form.Item
        label="Description"
        name="describe"
        rules={[{ required: true, message: 'Vui lòng không để trống describe' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Github"
        name="github"
   
      ><Input /></Form.Item>
  
  <Form.Item
        label="Preview"
        name="preview"
  
      ><Input /></Form.Item>
  
  
  <Form.Item label="Thời gian: " name="starttime">
            <RangePicker />
          </Form.Item>
  
      
          
          <Form.Item
        label="Image"
        name="image"
      >
         <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
      </Form.Item>
  
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="Thêm mới">
          Thêm mới
        </Button>
      </Form.Item>
    </Form>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
        
    )
}

export default UpdateProductPage