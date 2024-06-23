import { CheckCircleOutlined, ClockCircleOutlined, DeleteOutlined, FileOutlined, MessageOutlined, ProjectOutlined, TeamOutlined, UserOutlined, } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import ViewTask from "../pages/layout/task/ViewTask";
import EditTask from "../pages/layout/task/EditTask";

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
      name:"Message ",
      path:"/message",
      icon:<MessageOutlined/>
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

  export const taskColumn=[
    {
      title:"Title",
      dataIndex:"title",
      key:"title"
    },
    {
      title:"Project",
      dataIndex:"project",
      key:"project"
    },
    {
      title:"Priority",
      dataIndex:"priority",
      key:"priority"
    },
    {
      title:"Task Status",
      dataIndex:"taskStatus",
      key:"task-status"
    },
    {
      title:"Assigned User",
      dataIndex:"assignedUser",
      key:"assigned-user"
    },
    {
      title:"Start Date	",
      dataIndex:"startDate",
      key:"start-date"
    },
    {
      title:"End Date	",
      dataIndex:"EndDate",
      key:"end-date"
    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action",
      render:()=>(
        <div style={{display:"flex",gap:"10px",justifyContent:"space-between",width:"70px"}}>
          <ViewTask />
          <EditTask />
          <Popconfirm description="Are you sure you want to delete" okText="yes" cancelText="No">
          <Button size="small" type="primary" danger><DeleteOutlined /></Button>
          </Popconfirm>
        </div>
      )
}
  ]

  export const taskData =[
    {
      key:"1",
      title:"task1",
      project:"project name",
      priority:"high",
      taskStatus:"completed",
      assignedUser:"assigneduser",
      startDate:"startdate",
      EndDate:"enddate",  
    },
    {
      key:"2",
      title:"task2",
      project:"project name",
      priority:"high",
      taskStatus:"ongoing",
      assignedUser:"assigneduser",
      startDate:"startdate",
      EndDate:"enddate",
    },
  ]

  export const defaultUser =[
    {
      label:"user1",
      path:"/user1",
    },
    {
      label:"user2",
      path:"/user2",
    },
    {
      label:"user3",
      path:"/user3",
    },
    {
      label:"user4",
      path:"/user4",
    },
    {
      label:"user5",
      path:"/user5",
    },
    {
      label:"user6",
      path:"/user6",
    },
    {
      label:"user7",
      path:"/user7",
    },
    {
      label:"user8",
      path:"/user8",
    },
    {
      label:"user9",
      path:"/user9",
    },
    {
      label:"user10",
      path:"/user10",
    },
  ] 
