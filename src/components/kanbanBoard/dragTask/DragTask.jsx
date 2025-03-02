import { Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types"
import "./DragTask.css"
const DragTask = ({task,index}) => {
    const bgColorChange = (isDragging,isDraggable,isBackLog)=>{
        if(isDragging) return "light-green";
        if(isDraggable) return isBackLog?"#F2D7D5":"#DCDCDC";
        return isBackLog ?"#F2D7D5":"#EAF4FC";
    }

  return (
    <div>
        <Draggable draggableId={task.id.toString()} key={task.id} index={index}>
            {(provided,snapshot)=>(
                 <div className="DragTask-container" style={{backgroundColor:bgColorChange(snapshot.isDragging,task.isDraggable,task.isBackLog),}} {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef} >
                        <div style={{display:'flex',justifyContent:"start",padding:"2"}}>
                            <span>
                                <small>{task.id}</small>
                            </span>
                        </div>
                        <div style={{display:"flex",justifyContent:"start",padding:"2"}}>
                            <h3>{task.taskname}</h3>
                        </div>
                 </div> 
            )}
        </Draggable>
    </div>
  )
}

DragTask.propTypes = {
    task:PropTypes.shape({id:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,taskname:PropTypes.string.isRequired,isDraggable:PropTypes.bool,isBackLog:PropTypes.bool}).isRequired,
    index:PropTypes.number.isRequired,
}
export default DragTask