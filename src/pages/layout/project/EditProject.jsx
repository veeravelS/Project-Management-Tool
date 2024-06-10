import { EditOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"
import { useState } from "react"


const EditProject = () => {
    const [open,setOpen] = useState(false)
  return (
    <div><Button type="primary" onClick={()=>setOpen(true)}><EditOutlined /></Button>
    <Modal open={open} onCancel={()=>setOpen(!open)} footer={null}></Modal></div>
  )
}

export default EditProject