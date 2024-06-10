import { EyeOutlined } from '@ant-design/icons'
import { Button, Descriptions, Modal } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import { useState } from 'react'


const ViewProject = () => {
    const [open,setOpen] = useState(false)
  return (
    <div><Button type='primary' style={{backgroundColor:"#34a313"}}  onClick={()=>setOpen(!open)} >
        <EyeOutlined />
        </Button>
        <Modal open={open} onCancel={()=>setOpen(false)} footer={null} width={720}>
            <Header style={{backgroundColor:"white"}}><Title level={3}>Project</Title></Header>
            <Descriptions title="project" />
        </Modal>
    </div>
  )
}

export default ViewProject