import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"

const EditUser = ({data}) => {
  const [open, setOpen] = useState(false);
  const {Option} = Select;
  const [form] = Form.useForm()
  const [selectValue,setSelectValue] = useState("");
  const handleSelectChange = (value)=>{
    setSelectValue(value)
  }
  useEffect(()=>{
      if(open){
        form.setFieldValue({
            username:data.username,
            email:data.email,
            role:data.role,
            project:data.project
        })
      }
  },[form,open,data])
  const {Title} = Typography;
  return (
    <div>
      <Button onClick={() => setOpen(!open)} size="small" type="primary">
        <EditOutlined />
      </Button>
      <Modal open={open} onCancel={()=>setOpen(!open)} footer={null}>
      <Header style={{ backgroundColor: "white", width: "100%" }}><Title style={{ marginLeft: "-45px" }} level={3}>Edit User</Title></Header>
      <Form form={form} layout="vertical" hideRequiredMark>
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
              <Row style={{ justifyContent: "center", margin: "20px 0" }}><Button type="primary" style={{ width: "95%" }}>Edit</Button></Row>
        </Form>
      </Modal>
    </div>
  );
};

EditUser.propTypes={
  data:PropTypes.object.isRequired
}

export default EditUser;
