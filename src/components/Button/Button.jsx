import "./Button.css";

export default function Button(props) {
  return (
    <button className={props.buttonClassName} type={props.buttonType}>
      {props.buttonText}
    </button>
  );
}
