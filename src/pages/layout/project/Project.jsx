import { Button, Select, Table,} from "antd";
import { Header } from "antd/es/layout/layout";
import { MdAdd } from "react-icons/md";
import { projectColumn, projectData } from "../../../data/constant";
import { useState } from "react";
import AddProject from "./AddProject";

const Project = () => {
  const [open, setOpen] = useState(false);
  const { Option } = Select;
  

  return (
    <div>
      <Header
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom:"20px",
        }}
      >
        <Button style={{marginLeft:"-10px"}} type="primary" onClick={() => setOpen(true)}>
          Add Project
          <MdAdd />
        </Button>
        <div style={{ width: "600px",gap:"20px", marginLeft: "370px", display: "flex" }}>
          <Select
            style={{ width: "250px" }}
            showSearch
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="select customer"
          >
            {" "}
            <Option value="one">one</Option>
            <Option value="two">two</Option>
          </Select>
          <Select
            style={{ width: "250px" }}
            showSearch
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="select status"
          >
            {" "}
            <Option value="one">one</Option>
            <Option value="two">two</Option>
          </Select>
        </div>
        <AddProject Open={open} setOpen={setOpen} />
      </Header>
      <Table columns={projectColumn} dataSource={projectData} bordered />
    </div>
  );
};

export default Project;
