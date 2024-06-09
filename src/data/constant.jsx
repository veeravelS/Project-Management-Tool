import { CheckCircleOutlined, ClockCircleOutlined, FileOutlined, ProjectOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

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
