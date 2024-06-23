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
                label="Project Name"
                rules={[
                  {
                    required: true,
                    message: "please enter project name",
                  },
                ]}
              >
                <Input placeholder="Enter your project name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="customer"
                label="customer"
                rules={[
                  {
                    required: true,
                    message: "Please select customer",
                  },
                ]}
              >
                <Select 
                placeholder="select customer" 
                value={selectValue} 
                onChange={handleSelectChange}
                showSearch
                options={customer.map(c => ({ label: c.label, value: c.value }))}
                />       
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="members"
                label="Members"
                rules={[
                  {
                    required: true,
                    message: "Please select member",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Please select member" showSearch  options={members.map(m => ({ label: m.label, value: m.value }))}
                    />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[
                  {
                    required: true,
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
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
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
                label="Target Start Date"
                rules={[
                  {
                    required: true,
                    message: "Please select target start date",
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
                name="targetenddate"
                label="Target End Date"
                rules={[
                  {
                    required: true,
                    message: "Please select target end date",
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
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
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
