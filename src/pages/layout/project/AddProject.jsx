<<<<<<< HEAD
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
=======
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Slider,
  Typography,
  message,
} from "antd";
import { Header } from "antd/es/layout/layout";
import axios from "axios";
import PropTypes from "prop-types";
import {  useState } from "react";
import FilterOption from "../../../components/filterOption/FilterOption";
import JoditEditor from "jodit-react";

function AddProject({ Open, setOpen }) {
  const { Title } = Typography;
  const { Option } = Select;
  const [selectValue, setSelectValue] = useState("");
  const [form] = Form.useForm();
  const { members, customer, status } = FilterOption();
  const formatter = (value) => `${value}%`;

  const handleSelectChange = (value) => {
    setSelectValue(value);
  };
  const onFinish = async (data) => {
    try {
      console.log(data.members);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}project/projects`,
        { ...data, members:data.members ? data.members.toString() : null },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      message.success("Project added successfully");
      console.log(response);
      setOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Project add failed");
    }
  }; 
  const config = {
    readonly: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    showPoweredBy: false
};

  return (
    <div>
      <Modal
        open={Open}
        width={600}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Header style={{ backgroundColor: "white", width: "100%" }}>
          <Title style={{ marginLeft: "-45px" }} level={3}>
            Add Project
          </Title>
        </Header>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          name="basic"
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="projectname"
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                label="Project Name"
                rules={[
                  {
                    required: true,
<<<<<<< HEAD
                    message: 'please enter project name',
                  },
                ]}
              >
                <Input placeholder="Enter your project name" />
=======
                    message: "please enter project name",
                  },
                ]}
              >
                <Input placeholder="Enter project name" />
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="customer"
                label="Customer"
                rules={[
                  {
                    required: true,
<<<<<<< HEAD
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
=======
                    message: "Please select customer",
                  },
                ]}
              >
                <Select
                  placeholder="select customer"
                  value={selectValue}
                  onChange={handleSelectChange}
                  showSearch
                  options={customer.map((c) => ({
                    label: c.label,
                    value: c.value,
                  }))}
                />
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
<<<<<<< HEAD
                name="member"
=======
                name="members"
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                label="Members"
                rules={[
                  {
                    required: true,
<<<<<<< HEAD
                    message: 'Please select member',
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select member" showSearch
                    >
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
=======
                    message: "Please select member",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select member"
                  showSearch
                  options={members.map((m) => ({
                    label: m.label,
                    value: m.value,
                  }))}
                />
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
<<<<<<< HEAD
                name="status" 
=======
                name="status"
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                label="Status"
                rules={[
                  {
                    required: true,
<<<<<<< HEAD
                    message: 'Please choose the type',
                  },
                ]}  
              >
                <Select placeholder="select status">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
=======
                    message: "Please choose the type",
                  },
                ]}
              >
                <Select
                  placeholder="select status"
                  options={status.map((s) => ({
                    label: s.label,
                    value: s.value,
                  }))}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="progress"
                label="Progress(%)"
                rules={[
                  {
                    required: true,
                    message: "please enter project name",
                  },
                ]}
              >
                <Slider tooltip={{ formatter }} />
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
<<<<<<< HEAD
                name="Target start date"
=======
                name="billingtype"
                label="Billing Type"
                rules={[
                  {
                    required: true,
                    message: "Please select billing type",
                  },
                ]}
              >
                <Select placeholder="Please select billing type" showSearch>
                  <Option value="hourly rate">hourly rate</Option>
                  <Option value="Fixed rate">Fixed rate</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="rate"
                label="Rate"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
                  },
                ]}
              >
                <Input placeholder="Enter Rate" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="targetstartdate"
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                label="Target Start Date"
                rules={[
                  {
                    required: true,
<<<<<<< HEAD
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
=======
                    message: "Please select target start date",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  },
                ]}
              >
                <DatePicker
                  style={{
<<<<<<< HEAD
                    width: '100%',
=======
                    width: "100%",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
<<<<<<< HEAD
                name="Actual start date"
                label="Actual End Date"
                rules={[
                  {
                    required: true,
                    message: 'Please actual end date ',
=======
                name="targetenddate"
                label="Target End Date"
                rules={[
                  {
                    required: true,
                    message: "Please select target end date",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  },
                ]}
              >
                <DatePicker
                  style={{
<<<<<<< HEAD
                    width: '100%',
=======
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="actualstartdate"
                label="Actual Start Date"
                rules={[
                  {
                    required: true,
                    message: "Please select actual start date ",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="actualenddate"
                label="Actual End Date"
                rules={[
                  {
                    required: true,
                    message: "Please select  actual end date ",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
<<<<<<< HEAD
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
=======
              <Form.Item name="summary" label="Summary">
                <JoditEditor
                    config={config}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", margin: "20px 0" }}>
            <Button type="primary" htmlType="submit" style={{ width: "95%" }}>
              Add
            </Button>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

AddProject.propTypes = {
  Open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default AddProject;
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
