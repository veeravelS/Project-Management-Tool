import { EyeOutlined } from "@ant-design/icons"
import { Button, Descriptions, Modal, theme } from "antd"
import { useState } from "react";
import PropTypes from "prop-types"



const ViewUser = ({data}) => {
    const {token:{bgSuccess}} =theme.useToken();
    const [open,setOpen] = useState(false);
    console.log(data)
    const items =[
        {
            key:"1",
            label:"username",
            children:data?.username
        },
        {
            key:"2",
            label:"email",
            children:data?.email
        },
        {
            key:"3",
            label:"password",
            children:data?.password
        },
        {
            key:"4",
            label:"role",
            children:data?.role.role_name
        },
        {
            key:"5",
            label:"projects",
            children:"-"
        }
    ]
  return (
    <div><Button onClick={()=>setOpen(!open)} size="small" style={{backgroundColor:bgSuccess,color:"white"}} ><EyeOutlined /></Button>
    <Modal open={open} onCancel={()=>setOpen(!open)} onOk={()=>setOpen(!open)}>
    <Descriptions title="User Details" bordered column={1}>
            {items.map((item,index)=>{
                return(
                  <Descriptions.Item label={item.label} key={index} span={1} >
                    {item.children}
                  </Descriptions.Item>
)})}
        </Descriptions></Modal></div>
  )
}

ViewUser.propTypes = {
    data:PropTypes.object.isRequired
}

export default ViewUser