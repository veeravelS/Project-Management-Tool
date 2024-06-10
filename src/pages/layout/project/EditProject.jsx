import { EditOutlined } from "@ant-design/icons"
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd"
import { useState } from "react"
import PropTypes from "prop-types"
import { Header } from "antd/es/layout/layout"
import { Option } from "antd/es/mentions"
import JoditEditor from "jodit-react"
import Title from "antd/es/typography/Title"


const EditProject = () => {
    const [open,setOpen] = useState(false);
    const [content,setContent] = useState("");
    const [selectValue,setSelectValue]  = useState("");
    const handleSelectChange = (value)=>{
      setSelectValue(value);
  }
    const config = {
      readonly: false,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      showPoweredBy: false
  };
  return (
    <div><Button type="primary" onClick={()=>setOpen(true)}><EditOutlined /></Button>
    <Modal open={open} width={800} onCancel={()=>setOpen(false)} footer={null}>
        <Header style={{backgroundColor:"white",width:"100%"}}><Title style={{marginLeft:"-45px"}} level={3}>Edit Project</Title></Header>
      <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="project name"
                label="Project Name"
                rules={[
                  {
                    required: true,
                    message: 'please enter project name',
                  },
                ]}
              >
                <Input placeholder="Enter your project name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="customer"
                label="Customer"
                rules={[
                  {
                    required: true,
                    message: 'Please select customer',
                  },
                ]}
              >
                <Select 
                placeholder="select customer" 
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
                name="member"
                label="Members"
                rules={[
                  {
                    required: true,
                    message: 'Please select member',
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select member" showSearch
                    >
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status" 
                label="Status"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}  
              >
                <Select placeholder="select status">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Target start date"
                label="Target Start Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select target start date',
                  },
                ]}
              >
                 <DatePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                name="Target end date"
                label="Target End Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select target end date',
                  },
                ]}
              >
                 <DatePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
              </Col>
            <Col span={12}>
              <Form.Item
                name="Actual start date"
                label="Actual Start Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select actual start date ',
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Actual start date"
                label="Actual End Date"
                rules={[
                  {
                    required: true,
                    message: 'Please actual end date ',
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
            <Form.Item
                name="summary"
                label="Summary"
              >   <JoditEditor
              tabIndex={1}
              value={content}
              onBlur={newContent => setContent(newContent)}
              config={config} 
          />
          </Form.Item>
            </Col>
          </Row>
          <Row style={{justifyContent:"center",margin:"20px 0"}}><Button type="primary" style={{width:"95%"}}>Edit</Button></Row>
        </Form>
      </Modal>
    </div>
  )
}

EditProject.propTypes = {
    Open:PropTypes.bool,
    setOpen:PropTypes.func
}

export default EditProject