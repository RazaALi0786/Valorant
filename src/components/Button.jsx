import PropTypes from "prop-types";
// import "./Button.css";
const Button = (props) => {
  const { btnName } = props;
  return (
    // <a href="#">
    //   <p>
    //     <span className="bg"></span>
    //     <span className="base"></span>
    //     <span className="text">{btnName}</span>
    //   </p>
    // </a>
    <button className=" absolute font-mono font-bold transform -translate-x-1/2 top-[13.25rem] bg-[#ff4655] p-1 cursor-pointer aboslute left-1/2 hover:bg-[#111111] border-b-4 border-red-800 hover:border-red-500 rounded text-white md:px-4 md:py-3 md:text-2xl md:mt-56">
      {btnName}
    </button>
  );
};
Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};
export default Button;
