<<<<<<< HEAD
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
=======
import { EditOutlined } from "@ant-design/icons";
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
  message,
} from "antd";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
/* import RichTextEditor from "../../../components/richTextEditor/RichTextEditor"; */
import moment from "moment";
import FilterOption from "../../../components/filterOption/FilterOption";
import axios from "axios";
import JoditEditor from "jodit-react";

const EditProject = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [selectValue, setSelectValue] = useState("");
  const { members, status, customer } = FilterOption();
  const handleSelectChange = (value) => {
    setSelectValue(value);
  };
  const formatter = (value) => `${value}%`;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        projectname: data.projectname,
        customer: data.customer,
        members: data.members_details.map((member) => member!==null?member:null),
        status: data.status,
        targetstartdate: data.targetstartdate
          ? moment(data.targetstartdate)
          : null,
        targetenddate: data.targetenddate ? moment(data.targetenddate) : null,
        actualstartdate: data.actualstartdate
          ? moment(data.actualstartdate)
          : null,
        actualenddate: data.actualenddate ? moment(data.actualenddate) : null,
        summary: data.summary,
      });
    }
  }, [open, form, data]);
  const { Option } = Select;
  const config = {
    readonly: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    showPoweredBy: false
};

  const onFinish = async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_URL}project/projects/${data.id}`,
        {
          ...data,
          members: data.members ? data.members.toString() : "null",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      message.success(`${data.projectname} updated successfully`);
    } catch (error) {
      console.log(error);
      message.error("error can't updated");
    }
  };

  return (
    <div>
      <Button size="small" type="primary" onClick={() => setOpen(true)}>
        <EditOutlined />
      </Button>
      <Modal
        open={open}
        width={800}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Header style={{ backgroundColor: "white", width: "100%" }}>
          <Title style={{ marginLeft: "-45px" }} level={3}>
            Edit Project
          </Title>
        </Header>
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          name="basic"
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
=======
                    message: "please enter project name",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  },
                ]}
              >
                <Input placeholder="Enter your project name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="customer"
<<<<<<< HEAD
                label="Customer"
                rules={[
                  {
                    required: true,
                    message: 'Please select customer',
=======
                label="customer"
                rules={[
                  {
                    required: true,
                    message: "Please select customer",
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
                  },
                ]}
              >
                <Select 
                placeholder="select customer" 
                value={selectValue} 
                onChange={handleSelectChange}
                showSearch
<<<<<<< HEAD
                >
                    <Option value="one">one</Option>
                    <Option value="two">two</Option>
                </Select>
=======
                options={customer.map(c => ({ label: c.label, value: c.value }))}
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
                <Select mode="multiple" placeholder="Please select member" showSearch  options={members.map(m => ({ label: m.label, value: m.value }))}
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
                    message: "Please actual end date ",
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
=======
              <Form.Item name="summary" label="Summary">
                <JoditEditor
                    config={config}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", margin: "20px 0" }}>
            <Button htmlType="submit" type="primary" style={{ width: "95%" }}>
              Edit
            </Button>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

EditProject.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EditProject;
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
