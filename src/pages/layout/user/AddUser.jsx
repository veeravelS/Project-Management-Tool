import { UserAddOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import PropTypes from "prop-types"
import { useState } from "react";

const AddUser = ({open,setOpen}) => {
    const {Option} = Select;
    const {Title} = Typography
    const [selectValue,setSelectValue] = useState("");
    const handleSelectChange =(value)=>{
        setSelectValue(value)
    }
  return (
    <div>
      <Button type="primary" onClick={()=>setOpen(!open)} >
        Add User <UserAddOutlined />
      </Button>
      <Modal open={open} onCancel={()=>setOpen(!open)} footer={null}>
      <Header style={{ backgroundColor: "white", width: "100%" }}><Title style={{ marginLeft: "-45px" }} level={3}>Create User</Title></Header>
              <Form layout="vertical" hideRequiredMark>
                  <Row>
                      <Col span={24}>
                          <Form.Item
                               name="user name"
                              label="User Name"
                              rules={[
                                  {
                                      required: true,
                                      message: 'please enter user name',
                                  },
                              ]}
                          >
                              <Input placeholder="Enter user name" />
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={24}>
                          <Form.Item
                              name="email"
                              label="Email"
                              rules={[
                                {
                                    required: true,
                                    message: 'please enter email',
                                },
                            ]}
                          >
                            <Input  placeholder="Enter email" />
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                          {
                              required: true,
                              message: 'Please enter password',
                          },
                      ]}
                  >
                   <Input.Password placeholder="Enter password" />
                  </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                    <Form.Item
                      name="project"
                      label="Project"
                      rules={[
                          {
                              required: true,
                              message: 'Please Select project',
                          },
                      ]}
                  >
                    <Select
                        mode="multiple"
                      placeholder="select projects"
                      value={selectValue}
                      onChange={handleSelectChange}
                      showSearch
                  >
                      <Option value="one">one</Option>
                      <Option value="two">two</Option>
                  </Select>
                  </Form.Item>
                </Col>       
                </Row>
              <Row style={{ justifyContent: "center", margin: "20px 0" }}><Button type="primary" style={{ width: "95%" }}>Create</Button></Row>
        </Form>
      </Modal>
    </div>
  );
};
AddUser.propTypes ={
    open:PropTypes.bool,
    setOpen:PropTypes.func,

}

export default AddUser;
