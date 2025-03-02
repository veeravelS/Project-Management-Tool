  import { useEffect, useState } from "react";
  import Column from "./column/Column"
  import "./KanbanBoard.css"
  import { DragDropContext } from "@hello-pangea/dnd";
  import FilterOption from "../filterOption/FilterOption";
  import axios from "axios";
  import GetData from "../../common/GetData";


  const KanbanBoard = () => {
    const [tasks,setTasks] = useState({notStarted:[],ongoing:[],locallyDone:[],completed:[],todayTest:[],testing:[]});
    const [isDragging,setIsDragging] = useState(false)
    const {taskData,projectname} = FilterOption();
    const dataApi = GetData();
  console.log(taskData);

    useEffect(()=>{
    const fetchData = ()=>{
      if(Array.isArray(taskData)){
    const notStarted = taskData.filter((task)=>(task.taskstatus.title == "not started"));
    const ongoing = taskData.filter((task)=>(task.taskstatus.title=="ongoing"));
    const locallyDone = taskData.filter((task)=>(task.taskstatus.title == "locally done"));
    const completed = taskData.filter((task)=>(task.taskstatus.title=="completed"));
    const todayTest = taskData.filter((task)=>(task.taskstatus.title == "today test"));
    const testing = taskData.filter((task)=>(task.taskstatus.title == "testing"));
    setTasks({notStarted,ongoing,locallyDone,completed,todayTest,testing})
    }
  }
    fetchData();
  },[taskData]);

  const useAutoScroll = (isDragging) => {
    useEffect(() => {
      if (!isDragging) return;

      const scrollContainer = document.querySelector(".kanban-container");
      console.log(scrollContainer);

      const onDrag = (event) => {
        const { clientX } = event;
        const { right, left,width } = scrollContainer.getBoundingClientRect();

        const scrollSpeed = 30;

        if (clientX < left + 50 && scrollContainer.scrollLeft > 0) {
          scrollContainer.scrollLeft -= scrollSpeed;
        } else if (clientX > right - 50 && scrollContainer.scrollLeft < scrollContainer.scrollWidth - width) {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      };
      document.addEventListener("mousemove", onDrag);

      return () => {
        document.removeEventListener("mousemove", onDrag);
      };
    }, [isDragging]);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };
  useAutoScroll(isDragging);

    const taskstatusValue = (value)=>{
      switch(value){
        case "notstarted":
          return 3;
        case "ongoing":
          return 1;
        case "locallydone":
          return 5;
        case "completed":
          return 2;
        case "todaytest":
          return 6;
        case "testing":
          return 4;
        default:  
          return null;
      }
    }
    const getColumnById=(id)=>{
      switch(id){
        case "3":
          return "notStarted";
        case "1":
          return "ongoing";
        case "5":
          return "locallyDone";
        case "2":
          return "completed";
        case "6":
          return "todayTest";
        case "4":
          return "testing";
        default:
          return null;
      }
    } 
    const updateStatus = async(id,newStatus,task)=>{
      try {
        console.log(task);
        console.log(projectname);
        console.log(newStatus);
        const projectId = projectname.filter((project)=>project.label == task.projectname);
        console.log(projectId);
        const data={taskname:task.taskname,description:task.description,project_id:projectId[0].value,taskstatus_id:taskstatusValue(newStatus),priority:task.priority,assigned_user:task.assigned_user.id,startdate:task.startdate,enddate:task.enddate,targetstartdate:task.targetstartdate,targetfinishdate:task.targetfinishdate};
        console.log(data);
        const res = axios.put(`${import.meta.env.VITE_APP_API_URL}updatetaskstatus/updatestatus/${id}`,data,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});
        console.log(res);
        await dataApi.fetchTask();
      } catch (error) {
        console.log(error);
      }
    }
    const handleDragEnd = (result)=>{
      const {source,destination,draggableId} = result;
      if(!destination || source.droppableId === destination.droppableId) return;
      const sourceColumn = getColumnById(source.droppableId);
      const destinationColumn = getColumnById(destination.droppableId);
      console.log(sourceColumn,destinationColumn);
      const task = findItemById(draggableId,tasks[sourceColumn]);
      console.log(task)
      setTasks((prev)=>({...prev,[sourceColumn]:removeItemById(draggableId,prev[sourceColumn]),
      [destinationColumn]:[{...task,taskstatus:destinationColumn.replace(/([A-Z])/g, ' $1').toLowerCase().trim()}, ...prev[destinationColumn]],
    }))   
    console.log(destinationColumn.replace(/([A-Z])/g, ' $1').toLowerCase().trim())
    updateStatus(task.id,destinationColumn.replace(/([A-Z])/g,'$1').toLowerCase().trim(),task)
  }

      function findItemById(id,array){
        return array.find((item)=>item.id==id)
      }
      function removeItemById(id,array){
        return array.filter((item)=>item.id!=id)
      }

      const taskDatas = [
        {
          id:3,
          title:"Not Started",
          task:tasks.notStarted
        },
        {
          id:1,
          title:"Ongoing",
          task:tasks.ongoing
        },
        {
          id:5,
          title:"Locally done",
          task:tasks.locallyDone
        },
        {
          id:2,
          title:"Completed",
          task:tasks.completed
        },
        {
          id:6,
          title:"Today test",
          task:tasks.todayTest
        },
        {
          id:4,
          title:"Testing",
          task:tasks.testing
        }
      ]
    return (
      <div className="kanban-container" >
      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {taskDatas.map((task,index)=>(
          <Column title={task.title} task={task.task} id={task.id} key={index} />
        ))}
      </DragDropContext>
      </div>
    )
  }

  export default KanbanBoard