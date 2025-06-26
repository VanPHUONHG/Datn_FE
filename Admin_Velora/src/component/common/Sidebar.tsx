import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  FolderOutlined,
  AppstoreAddOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Dashboard',
      icon: <MailOutlined />,
    },
    {
      key: 'sub2',
      label: 'Quản lý sản phẩm',
      icon: <AppstoreOutlined />,
      children: [
        { key: 'productlist', label: 'Danh sách sản phẩm' },
        { key: 'addproduct', label: 'Thêm mới sản phẩm' },
      ],
    },
    {
      key: 'sub6',
      label: 'Quản lý biến thể',
      icon: <AppstoreAddOutlined />,
      children: [
        { key: 'variantlist', label: 'Danh sách biến thể' },
        { key: 'addvariant', label: 'Thêm mới biến thể' },
      ],
    },
    {
      key: 'sub7',
      label: 'Quản lý blog',
      icon: <FolderOutlined />,
      children: [
        { key: 'blog-list', label: 'Danh sách blog' },
        { key: 'blog-add', label: 'Thêm blog' },
      ],
    },
    {
      key: 'sub3',
      label: 'Quản lý danh mục',
      icon: <FolderOutlined />,
      children: [
        { key: 'categorylist', label: 'Danh sách danh mục' },
        { key: 'addcategory', label: 'Thêm mới danh mục' },
      ],
    },
    {
      key: 'sub5',
      label: 'Quản lý tài khoản',
      icon: <UserOutlined />,
      children: [
        { key: 'userlist', label: 'Danh sách người dùng' },
        { key: 'adminList', label: 'Danh sách admin' },
      ],
    },
    {
      key: 'sub8',
      label: 'Quản lý khuyến mãi',
      icon: <GiftOutlined />,
      children: [
        { key: 'couponlist', label: 'Danh sách mã giảm giá' },
        { key: 'addcoupon', label: 'Thêm mã giảm giá' },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Quản lý đơn hàng',
      icon: <SettingOutlined />,
    },
  ];

  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'addproduct':
        navigate('/admin/product-add');
        break;
      case 'productlist':
        navigate('/admin/product-list');
        break;
      case 'variantlist':
        navigate('/admin/variant-list');
        break;
      case 'addvariant':
        navigate('/admin/variant-add');
        break;
      case 'categorylist':
        navigate('/admin/category-list');
        break;
      case 'addcategory':
        navigate('/admin/category-add');
        break;
      case 'userlist':
        navigate('/admin/user-list');
        break;
      case 'adminList':
        navigate('/admin/admin-list');
        break;
      case 'sub4':
        navigate('/admin/order-manage');
        break;
      case 'blog-list':
        navigate('/admin/blog-list');
        break;
      case 'blog-add':
        navigate('/admin/blog-add');
        break;
      case 'couponlist':
        navigate('/admin/coupon-list');
        break;
      case 'addcoupon':
        navigate('/admin/coupon-add');
        break;
      default:
        navigate('');
        break;
    }
  };

  return (
    <div className="w-1/5 h-screen bg-white">
      <Menu
        onClick={onClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default AdminSidebar;
