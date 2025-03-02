import {Typography, Button, Layout, Menu, theme, Space, Dropdown, Popover} from 'antd';
import { menu } from '../../data/constant';
import { Outlet,} from 'react-router-dom';
import { activeMenuName, selectedMenu } from '../../store/slice/adminSlice';
const { Header, Content, Sider } = Layout;
import Common from '../../common/common';
import { useSelector } from 'react-redux';
import { ClockCircleOutlined, DownOutlined, EditOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const PageLayout = () => {
<<<<<<< HEAD
  const {Title,Text}  = Typography
=======
  const {Title,Text}  = Typography;
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
    const {dispatch,navigate} = Common();
    const title = useSelector((state)=>state.admin.activeMenu);
    const initialActiveMenu = useSelector((state)=>state.admin.selectedMenus);
    const [activeMenu,setActiveMenu] = useState(initialActiveMenu || ["/"]);
    const [log,setLog] = useState(true);
    const [collapsed,setCollapse] = useState(false)
    const [logTime,setLogTime] = useState(null)
    const {
    token:{colorBgContainer,borderRadiusLG,bgSuccess,headerBoxShadow,headerBorderRadius},
    } = theme.useToken(); 
    const menuItems = menu.map((menuItem)=>({
    key:menuItem.path,
    icon:menuItem.icon,
    label:menuItem.name
    }));
  const handleMenuChange=({key,domEvent})=>{
  const name = domEvent.currentTarget.querySelector('.ant-menu-title-content').innerText;
    navigate(key);
    setActiveMenu([key]);
    dispatch(selectedMenu([key]));
    dispatch(activeMenuName(name));
<<<<<<< HEAD
}
const username= JSON.parse(sessionStorage.getItem("username"))
=======
  }
  const getTimeString=()=>{
    return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})
  }
  const username= JSON.parse(sessionStorage.getItem("username"))
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
  const Logout = (()=>{
      sessionStorage.clear();
      navigate("/login")
  });

  const handleCheckIn=()=>{
    setLog(false);
    const currentTime = getTimeString()
    setLogTime(currentTime)
  };

  const handleCheckOut =()=>{
      setLog(true);
      const currentTime = getTimeString()
      setLogTime(currentTime)
  };
    
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapse} style={{ overflow: 'auto',
          height: '100vh',
            position: 'fixed',
            display:"block",
            left: 0,
            top: 0,
            bottom: 0,
      }}>
        <div className="demo-logo-vertical" />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70px"}}>
        <img src='https://pm.jnanain.com/public/uploads/media/logo.png' alt='jnana' style={{height:"40px",width:"40px"}} />
        </div>
        <Menu style={{paddingTop:"15px"}} onClick={(e)=>handleMenuChange(e)} selectedKeys={activeMenu} theme="dark"   mode="inline" items={menuItems} />
      </Sider>
      <Layout style={{marginLeft:collapsed ? "80px":"200px",transition:"0.5s"}}>
        <Header
          style={{
            background:"white",
            padding: '0 16px', 
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow:headerBoxShadow,
            borderRadius:headerBorderRadius
          }}  
        >
          <Title level={4} style={{marginLeft:"20px"}}>{title}</Title>
          <Space size="large">
          <Dropdown overlayStyle={{ minWidth: '100px',marginRight:"100px"}}
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
<<<<<<< HEAD
        <Space>
=======
        <Space wrap={false} style={{marginRight:"10px"}}>
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
        <UserOutlined style={{fontSize:"18px"}} /> <Text style={{fontSize:"15px"}}>{username}</Text>
          <DownOutlined />
        </Space>
    </Dropdown>
        <Popover placement="bottom" content={logTime ? <Space style={{fontSize:"14px"}}>{logTime?<ClockCircleOutlined />:""}{logTime}</Space>:""} >   
          {log ?<Button  style={{backgroundColor:bgSuccess,color:"#fff",width:"110px"}} onClick={handleCheckIn} >Check-In</Button>:<Button onClick={handleCheckOut}  style={{backgroundColor:bgSuccess,opacity:0.5,color:"#fff",width:"110px"}}>Check-Out</Button> }
        </Popover>
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
  )
}

export default PageLayout;
 