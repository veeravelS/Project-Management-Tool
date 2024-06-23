import { EditOutlined } from "@ant-design/icons"
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import { useState } from "react"


const EditTask = () => {
    const [open,setOpen] = useState(false);
    const [selectValue,setSelectValue] = useState("")
    const {Title} = Typography
    const {Option} = Select

    const handleSelectChange =(value)=>{
        setSelectValue(value)
    }
  return (
    <div>
        <Button size="small" type="primary" onClick={()=>setOpen(true)} ><EditOutlined /></Button>
        <Modal open={open} onCancel={()=>setOpen(false)} footer={null}>
        <Header style={{ backgroundColor: "white", width: "100%" }}><Title style={{ marginLeft: "-45px" }} level={3}>Edit Task</Title></Header>
              <Form layout="vertical" hideRequiredMark>
                  <Row>
                      <Col span={24}>
                          <Form.Item
                               name="task name"
                              label="Task Name"
                              rules={[
                                  {
                                      required: true,
                                      message: 'please enter task name',
                                  },
                              ]}
                          >
                              <Input placeholder="Enter task name" />
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={24}>
                          <Form.Item
                              name="description"
                              label="Description"
                          >
                            <Input.TextArea />
                          </Form.Item>
                      </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                    <Form.Item
                      name="task status"
                      label="Task status"
                      rules={[
                          {
                              required: true,
                              message: 'Please select task status',
                          },
                      ]}
                  >
                    <Select
                      placeholder="select status"
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
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                      name="priority"
                      label="priority"
                      rules={[
                          {
                              required: true,
                              message: 'Please select task status',
                          },
                      ]}
                  >
                    <Select
                      placeholder="select priority"
                      value={selectValue}
                      onChange={handleSelectChange}
                      showSearch
                  >
                      <Option value="one">one</Option>
                      <Option value="two">two</Option>
                  </Select>
                  </Form.Item>
                </Col>       
                <Col span={12}>
                <Form.Item
                      name="Assigned User"
                      label="Assigned user"
                      rules={[
                          {
                              required: true,
                              message: 'Please select assigned user',
                          },
                      ]}
                  >
                      <Select placeholder="Assigned user">
                          <Option value="private">Private</Option>
                          <Option value="public">Public</Option>
                      </Select>
                      </Form.Item>
                </Col>
                </Row>
                <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                      name="start date"
                      label="Start Date"
                      rules={[
                          {
                              required: true,
                              message: 'Please select start date',
                          },
                      ]}
                  >
                      <DatePicker
                          style={{
                              width: '100%',
                          }}
                          getPopupContainer={(trigger) => trigger.parentElement} />
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="end date"
                      label="End Date"
                      rules={[
                          {
                              required: true,
                              message: 'Please select end date',
                          },
                      ]}
                  >
                      <DatePicker
                          style={{
                              width: '100%',
                          }}
                          getPopupContainer={(trigger) => trigger.parentElement} />
                  </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                      name="start date"
                      label="Target Start Date"
                      rules={[
                          {
                              required: true,
                              message: 'Please select start date',
                          },
                      ]}
                  >
                      <DatePicker
                          style={{
                              width: '100%',
                          }}
                          getPopupContainer={(trigger) => trigger.parentElement} />
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="end date"
                      label="Target End Date"
                      rules={[
                          {
                              required: true,
                              message: 'Please select end date',
                          },
                      ]}
                  >
                      <DatePicker
                          style={{
                              width: '100%',
                          }}
                          getPopupContainer={(trigger) => trigger.parentElement} />
                  </Form.Item>
              </Col>
              </Row>
              <Row style={{ justifyContent: "center", margin: "20px 0" }}><Button type="primary" style={{ width: "95%" }}>Edit</Button></Row>
        </Form>
        </Modal>
    </div>
  )
}

export default EditTask