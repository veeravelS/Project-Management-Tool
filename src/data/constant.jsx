<<<<<<< HEAD
import { CheckCircleOutlined, ClockCircleOutlined, DeleteOutlined, FileOutlined, ProjectOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import EditProject from "../pages/layout/project/EditProject";
import ViewProject from "../pages/layout/project/ViewProject";
import { Button, Popconfirm } from "antd";
=======
import { CheckCircleOutlined, ClockCircleOutlined, DeleteOutlined, FileOutlined, MessageOutlined, ProjectOutlined, TeamOutlined, UserOutlined, } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import ViewTask from "../pages/layout/task/ViewTask";
import EditTask from "../pages/layout/task/EditTask";
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b

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

<<<<<<< HEAD
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
=======
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
>>>>>>> e04b00b9bdca7210c6487b283f487354fd5f185b
