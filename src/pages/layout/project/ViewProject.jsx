import { EyeOutlined } from "@ant-design/icons";
import { Button, Descriptions, Modal, Tag, theme } from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";


const ViewProject = ({data}) => {
  const[open,setOpen]=useState(false);
  const {
    token: { bgSuccess },
  } = theme.useToken();
  const items = [
    {
      key: "1",
      label: " project Name",
      children:data ?data.projectname:"null",
    },
    {
      key: "2",
      label: "customer",
      children:data ? data.customer:"null",
    },
    {
      key: "3",
      label: "status",
      children:data ? data.status:"null",
    },
    {
      key: "4",
      label: "Target Start Date",
      children:data.targetstartdate?  moment(data.targetstartdate).format("DD-MM-YYYY"):"-",
    },
    {
      key: "5",
      label: "Target End Date",
      children:data.targetenddate?  moment(data.targetenddate).format("DD-MM-YYYY"):"-",
    },
    {
      key: "6",
      label: "Actual Start Date",
      children:data.actualstartdate?  moment(data.actualstartdate).format("DD-MM-YYYY"):"-",
    },
    {
      key: "7",
      label: "Actual End Date",
      children: data.actualenddate? moment(data.actualenddate).format("DD-MM-YYYY"):"-",
    },
    {
      key: "8",
      label: "	Project Members",
      children:data ?.members_details.map((member,index)=>(member!==null?<Tag key={index}>{member}</Tag>:""))
    }
  ];

  return (
    <div>
      <Button style={{backgroundColor:bgSuccess,color:"#fff"}}
        size="small"
        onClick={() => setOpen(!open)}
      >
        <EyeOutlined />
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <Descriptions title="Project" bordered column={1}>
    {items.map((item, index) => (
      <Descriptions.Item label={item.label} key={index} span={1}>
        {item.children}
      </Descriptions.Item>
    ))}
  </Descriptions>
      </Modal>
    </div>
  );
};

ViewProject.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ViewProject;
