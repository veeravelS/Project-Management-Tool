import { EyeOutlined } from "@ant-design/icons";
import { Button, Descriptions, Modal } from "antd";
import { themeConfig } from "../../../config/theme";
import { useState } from "react";
import PropTypes from "prop-types"

const items = [
  {
    key: "1",
    label: "Name",
    children: "project name",
  },
  {
    key: "2",
    label: "customer",
    children: "customer name",
  },
  {
    key: "3",
    label: "status",
    children: "status",
  },
  {
    key: "4",
    label: "Start Date",
    children: "Start Date",
  },
  {
    key: "5",
    label: "End Date",
    children: "End Date",
  },
  {
    key: "6",
    label: "	Project Members",
    children: "	Project Members",
  },
];

const TaskDescriptions = ({ items }) => (
  <Descriptions title="Project" bordered column={1}>
    {items.map((item, index) => (
      <Descriptions.Item label={item.label} key={index} span={1}>
        {item.children}
      </Descriptions.Item>
    ))}
  </Descriptions>
);
const ViewTask = () => {
  const [open, setOpen] = useState(false);
  const {
    token: { bgSuccess },
  } = themeConfig;
  return (
    <div>
      <Button size="small"
        onClick={() => setOpen(!open)}
        type="primary"
        style={{ backgroundColor: bgSuccess }}
      >
        <EyeOutlined />
      </Button>
      <Modal open={open} onCancel={()=>setOpen(!open)} onOk={()=>setOpen(!open)}> <TaskDescriptions items={items} /></Modal>
    </div>
  );
};

TaskDescriptions.propTypes = {
    items:PropTypes.array
}

export default ViewTask;
