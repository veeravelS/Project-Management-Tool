import {  Input, Select, Table } from "antd";
import {  Header } from "antd/es/layout/layout";
import AddTask from "./AddTask";
import { taskColumn, taskData } from "../../../data/constant";
import { useState } from "react";

const Task = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
        <Header style={{backgroundColor:"#fff",display: 'flex',flexDirection:"column",marginBottom:"30px", padding: '0',height:"120px"}}>
          <div style={{display:"flex",padding:0,justifyContent:"space-between",alignItems:"center",}}>
            <AddTask open={open} setOpen={setOpen}/>
            <Input placeholder="Search Task" style={{width:"45%",height:"50%"}} />
          </div>
          <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <Select showSearch placeholder="Select Project" style={{width:"30%"}
            }></Select>
            <Select showSearch placeholder="Select Assigned User" style={{width:"30%"}} />
            <Select showSearch placeholder="Select Status"  style={{width:"30%"}} />
          </div>
        </Header>
            <Table size="small" bordered columns={taskColumn} dataSource={taskData} />      
    </div>
  );
};

export default Task;
