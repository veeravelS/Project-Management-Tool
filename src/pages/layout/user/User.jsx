import { Header } from "antd/es/layout/layout";
import AddUser from "./AddUser";
import { useEffect, useState } from "react";
import { Button, Input, Table } from "antd";
import Common from "../../../common/common";
import { getUserData } from "../../../store/slice/adminSlice";
import axios from "axios";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import { DeleteOutlined } from "@ant-design/icons";

const User = () => {
  const {dispatch} =  Common()
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const [open,setOpen] = useState(false);
  useEffect(()=>{
        axios.get(`${import.meta.env.VITE_APP_API_URL}user/getusers`)
        .then((res)=>{
          setLoading(true)
          console.log(res);
          setData(res.data);
          const Data = res.data;
        dispatch(getUserData(Data));
        setLoading(false)
        })
        .catch((err)=>{
          console.log(err);
          setLoading(false)
        })
  },[])
  const handleDelete = ()=>{

  }
   const userColumn = [
    {
      title:"User Name",
      dataIndex:"username",
      key:"user-name"
    },
    {
      title:"Email",
      dataIndex:"email",
      key:"email"
    },
    {
      title:"role",
      dataIndex:"role_name",
      key:"password",
      render:(_,item)=>(
        item.role.role_name
      )
    },
    {
      title:"Projects",
      dataIndex:"projects",
      key:"project"
    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action",
      render:(_,item)=>(
        <div  style={{display:"flex",gap:"10px",justifyContent:"space-between",width:"50px"}}>
          <ViewUser data={item} />
          <EditUser data={item} />
          <Button size="small"  type="primary" onClick={()=>handleDelete(item.id)} danger><DeleteOutlined /></Button>
        </div>
      )
    }
  ]
  return (
    <div>
      <Header style={{ backgroundColor: "#fff", display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom:"15px", padding: '0' }}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
          <AddUser open={open} setOpen={setOpen} />
          <Input placeholder="Search user" style={{width:"40%",height:"30%"}}></Input>
        </div>
      </Header>
      <Table size="small" columns={userColumn} dataSource={data} loading={loading} bordered />
    </div>
  );
}; 

export default User;
