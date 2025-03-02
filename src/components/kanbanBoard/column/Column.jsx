import { Droppable } from "@hello-pangea/dnd";
import "./Column.css";
import DragTask from "../dragTask/DragTask";
import PropTypes from "prop-types";

const Column = ({ title , task = [], id }) => {
  const TaskBackgroundColor = (id)=>{
    switch (id) {
      case 3:
        return "#cd001a";
      case 1:
        return "#ef6a00";
      case 5:
        return "#f2cd00";
      case 2:
        return "#79c300";
      case 6:
        return "#1961ae";
      case 4:
        return "#61007d";
      default:
        return "lightblue";
    }
  }
  return (
    <div className="column-container">
      <h3 className="title" style={{ backgroundColor:TaskBackgroundColor(id), color:"#fff",position: "sticky" }}>
        {title}
      </h3>
      <Droppable droppableId={id.toString()}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`task-list ${snapshot.isDraggingOver ? 'dragover' : ''}`}
          >
            {task.map((tasks,index) => (
              <DragTask task={tasks} key={tasks.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  task: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Column;