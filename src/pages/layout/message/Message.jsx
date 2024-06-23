import { Button, Input, Layout, Menu, Space, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { defaultUser } from "../../../data/constant";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { SendOutlined, UserOutlined } from "@ant-design/icons";

const Message = () => {
  const { Title } = Typography;
  const { Search } = Input;
  return (
    <div>
      <Layout
        style={{
          position: "relative",
          height: "460px",
          boxShadow: "1px 1px 4px gray",
        }}
      >
        <Sider
          style={{
            overflow: "auto",
            height: "100%",
            left: 0,
            top: 0,
            bottom: 0,
            position: "sticky",
          }}
        >
          <div className="demo-logo-vertical" />
          <Search style={{ margin: "10px", width: "87%" }} />
          <Menu
            style={{ width: "100%", height: "100%" }}
            theme="dark"
            mode="inline"
            items={defaultUser}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={4}>
              <Space>
                <UserOutlined />
                Username
              </Space>
            </Title>
          </Header>
          <Content></Content>
          <Footer
            style={{
              backgroundColor: "gray",
              display: "flex",
              height: "50px",
              alignItems: "center",
              padding: "0",
            }}
          >
            <Input
              placeholder="Write your message"
              style={{ height: "50px", width: "80%" }}
            />
            <Input
              type="file"
              style={{
                backgroundColor: "yellow",
                width: "10%",
                height: "50px",
              }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              style={{ height: "50px", width: "10%" }}
            />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Message;
