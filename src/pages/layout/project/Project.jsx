import { Button, Popconfirm, Select,Table,Tag, message } from "antd";
import { Header } from "antd/es/layout/layout";
import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import AddProject from "./AddProject";
import axios from "axios";
import ViewProject from "./ViewProject";
import EditProject from "./EditProject";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import FilterOption from "../../../components/filterOption/FilterOption";
import TableText from "../../../components/tableText/TableText";

const Project = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { customer, status } = FilterOption();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}project/projects`)
      .then((res) => {
        setLoading(true);
        console.log(res.data);
        const newData = res.data.map((item) => ({
          ...item,
          members_details: item.members_details
            ? item.members_details.map((member) =>
                member ? member.username : null
              )
            : null,
        }));
        setData(newData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
      axios.delete(`${import.meta.env.VITE_APP_API_URL}project/projects/${id}`)
      .then((res)=>{
        console.log(res)
        message.success("project deleted successfully");
      })
     .catch ((error) =>{
      console.log(error);
      message.error("project can't deleted");
    })
  };

  const projectColumn = [
    {
      title: "Name",
      dataIndex: "projectname",
      key: "name",
      sorter: (a, b) => a.projectname.localeCompare(b.projectname),
      render: (_, item) => (
        <TableText type={item?.projectname} text={item?.projectname} />
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      sorter: (a, b) => a.customer.localeCompare(b.customer),
      render: (_, item) => (
        <TableText type={item?.customer} text={item?.customer} />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, item) => (
        <TableText type={item?.status} text={item?.status} />
      ),
    },
    {
      title: "Start Date",
      dataIndex: "actualstartdate",
      key: "start-date",
      render: (_, item) => (
        <TableText
          type={item?.actualstartdate}
          text={moment(item.actualstartdate).format("DD-MM-YYYY")}
        />
      ),
    },
    {
      title: "End Date",
      dataIndex: "actualenddate",
      key: "end-date",
      render: (_, item) => (
        <TableText
          type={item?.actualenddate}
          text={moment(item.actualstartdate).format("DD-MM-YYYY")}
        />
      ),
    },
    {
      title: "Project Members",
      dataIndex: "members_details",
      key: "project-members",
      render: (_, item) =>
        item.members_details.map((member, index) =>
          member !== null ? <Tag key={index}>{member}</Tag> : ""
        ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (_, item) => (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            width: "70px",
          }}
        >
          <ViewProject data={item} />
          <EditProject data={item} />
          <Popconfirm
            description="Are you sure you want to delete"
            okText="yes"
            cancelText="No"
            onConfirm={() => handleDelete(item.id)}
          >
            <Button size="small" type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "0",
        }}
      >
        <Button type="primary" onClick={() => setOpen(true)}>
          Add Project
          <MdAdd />
        </Button>
        <div style={{ gap: "20px", display: "flex", marginLeft: "435px" }}>
          <Select
            style={{ width: "250px" }}
            showSearch
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="select customer"
            options={customer.map((c, index) => ({
              label: c.label,
              value: c.value,
              key: index,
            }))}
          />
          <Select
            style={{ width: "250px" }}
            showSearch
            dropdownStyle={{
              maxHeight: 400,
              overflow: "auto",
            }}
            placeholder="select status"
            options={status.map((s, index) => ({
              label: s.label,
              value: s.value,
              key: index,
            }))}
          />
        </div>
        <AddProject Open={open} setOpen={setOpen} />
      </Header>
      {/* <Table size="small" scroll={{y:300}} columns={projectColumn} dataSource={data} loading={loading} bordered /> */}
      <table border={1} width={1050} style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
          {projectColumn.map((thead, index) => (
            <th key={index} style={{padding:"5px"}}>{thead.title}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.id} style={{textAlign:"center"}}>
              <td style={{padding:"5px"}} >{datas.projectname}</td>
              <td style={{padding:"5px"}}>{datas.customer}</td>
              <td style={{padding:"5px"}}>{datas.status}</td>
              <td style={{padding:"5px"}}>{datas.actualstartdate?moment(datas.actualstartdate).format("DD-MM-YYYY"):null}</td>
              <td style={{padding:"5px"}}>{datas.actualenddate?moment(datas.actualenddate).format("DD-MM-YYYY"):null}</td>
              <td style={{padding:"5px"}}>{datas.members_details.map((members,index)=>(members!==null?<Tag key={index}>{members}</Tag>:" "))}</td>
              <td style={{display:"flex",justifyContent:"space-evenly",padding:"10px"}}><ViewProject data={datas} /><EditProject data={datas} /><button style={{backgroundColor:"red",color:"white",borderRadius:"5px",border:"none",padding:"5px"}} onClick={()=>handleDelete(datas.id)}><DeleteOutlined /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Project;
