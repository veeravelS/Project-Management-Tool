import PropTypes from "prop-types";

const TableText = ({ type, text }) => {
  return (
    <p className="TableText">
      <span style={{ color: type ? "blue" : "red" }}>
        {type ?  text  : "-"}
      </span>
    </p>
  );
};

TableText.propTypes = {
  type: PropTypes.any,
  text: PropTypes.any,
};

export default TableText;
