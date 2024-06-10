import { Typography, Button, Layout, Menu, theme, Space, Dropdown } from 'antd';
import { menu } from '../../data/constant';
import { Outlet,} from 'react-router-dom';
import { activeMenuName } from '../../store/slice/adminSlice';
const { Header, Content, Sider } = Layout;
import Common from '../../common/common';
import { useSelector } from 'react-redux';
import { DownOutlined, EditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const PageLayout = () => {
  const {Title,Text}  = Typography
    const {dispatch,navigate} = Common();
    const title = useSelector((state)=>state.admin.activeMenu);
    console.log(title)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken(); 
  const menuItems = menu.map((menuItem)=>({
    key:menuItem.path,
    icon:menuItem.icon,
    label:menuItem.name
}))
const handleMenuChange = ({key,domEvent})=>{
  const name = domEvent.currentTarget.querySelector('.ant-menu-title-content').innerText;
    navigate(key)
    dispatch(activeMenuName(name));
}
const username= JSON.parse(sessionStorage.getItem("username"))
  const Logout = (()=>{
      sessionStorage.clear();
      navigate("/login")
  })
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible >
        <div className="demo-logo-vertical" />
        <Menu style={{paddingTop:"30px"}} onClick={(e)=>handleMenuChange(e)} theme="dark" defaultSelectedKeys={["/project"]}  mode="inline" items={menuItems} />
      </Sider>
      <Layout>
        <Header
          style={{
            background:"white",
            padding: '0 16px', 
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
          }}  
        >
          <Title level={4} style={{marginLeft:"20px"}}>{title}</Title>
          <Space size="large">
          <Dropdown overlayStyle={{ minWidth: '100px'}}
      dropdownRender={() => (
        <div>
          <Space
            style={{
              display:"block",
              padding: 8,
            }}
            size="large"
          >
            <Button type="primary" block style={{marginBottom: '6px'}}><EditOutlined/>Change Password</Button>
            <Button type="primary" danger block onClick={()=>Logout()}><LogoutOutlined />LogOut</Button>
          </Space>
        </div>
      )}
    >
        <Space>
        <UserOutlined style={{fontSize:"18px"}} /> <Text style={{fontSize:"15px"}}>{username}</Text>
          <DownOutlined />
        </Space>
    </Dropdown>
              <Button type='primary' style={{backgroundColor:"#34a313"}}>Check-In</Button>
          </Space>
        </Header>
        <Content
          style={{
            margin: '20px 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 510,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
 