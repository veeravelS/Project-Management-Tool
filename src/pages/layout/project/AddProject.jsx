import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Typography } from "antd"
import { Header } from "antd/es/layout/layout"
import JoditEditor from "jodit-react";
import PropTypes from "prop-types"
import { useState } from "react";


function AddProject({Open,setOpen}) {
    const {Title}  = Typography;
    const {Option} = Select;
    const [selectValue,setSelectValue]  = useState("");
    const [content,setContent] = useState("");
    const config = {
        readonly: false,
        showCharsCounter: false,
        showWordsCounter: false,
        showXPathInStatusbar: false,
        showPoweredBy: false
    };
   
    const handleSelectChange = (value)=>{
        setSelectValue(value);
    }

  return (
    <div>
      <Modal open={Open} width={800} onCancel={()=>setOpen(false)} footer={null}>
        <Header style={{backgroundColor:"white",width:"100%"}}><Title style={{marginLeft:"-45px"}} level={3}>Add Project</Title></Header>
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
          <Row style={{justifyContent:"center",margin:"20px 0"}}><Button type="primary" style={{width:"95%"}}>Add </Button></Row>
        </Form>
      </Modal>
    </div>
  )
}

AddProject.propTypes = {
    Open:PropTypes.bool,
    setOpen:PropTypes.func
}

export default AddProject
