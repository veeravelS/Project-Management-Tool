import { CheckCircleOutlined, ClockCircleOutlined, DeleteOutlined, FileOutlined, ProjectOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import EditProject from "../pages/layout/project/EditProject";
import ViewProject from "../pages/layout/project/ViewProject";
import { Button, Popconfirm } from "antd";

export const menu =[
    {
        name:"Project",
        path:"/project",
        icon:<ProjectOutlined />
    },
    {
        name:"Task",
        path:"/task",
        icon:<FileOutlined />
    },
    {
        name:"User",
        path:"/user",
        icon:<UserOutlined />
    },
    {
        name:"Attendance report ",
        path:"/attendance-report",
        icon:<CheckCircleOutlined />
    },
    {
        name:"Task status ",
        path:"/task-status",
        icon:<ClockCircleOutlined/>
    },
    {
        name:"role",
        path:"/role",
        icon:<TeamOutlined/>
    },
    {
        name:"Company setting ",
        path:"/company-setting",
        icon:<ClockCircleOutlined/>
    },
]

export const projectColumn = [
    {
        title:"Name",
        dataIndex:"name",
        key:"name",
        sorter: (a, b) => a.name - b.name,
    },
    {
      title:"Customer",
      dataIndex:"customer",
      key:"customer",
      sorter: (a, b) => a.customer - b.customer,
    },
    {
        title:"Status",
        dataIndex:"status",
        key:"status",
      },
      {
        title:"Start Date",
        dataIndex:"startDate",
        key:"start-date",
      },
      {
        title:"End Date",
        dataIndex:"endDate",
        key:"end-date"
      },
      {
        title:"Project Members",
        dataIndex:"projectMembers",
        key:"project-members",
      },
      {
        title:"Action",
        dataIndex:"action",
        key:"action",
        render:()=>(
          <div style={{display:"flex",gap:"10px",justifyContent:"space-between",width:"120px"}}>
            <ViewProject />
            <EditProject />
            <Popconfirm description="Are you sure you want to delete" okText="yes" cancelText="No">
            <Button danger><DeleteOutlined /></Button>
            </Popconfirm>
          </div>
        )
  }]

  export const projectData=[
    {
        key:"1",
        name:'project1',
        customer:"customer1",
        status:"status1",
        startDate:"start date1",
        endDate:"end Date1",
        projectMembers:"projectMember 1",
        action:"action1"
    },
    {
        key:"2",
        name:'project2',
        customer:"customer2",
        status:"status2",
        startDate:"start date2",
        endDate:"end Date2",
        projectMembers:"projectMember 2",
        action:"action2"
    },
  ]