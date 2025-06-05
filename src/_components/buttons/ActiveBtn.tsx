const ActiveBtn = (props: {
  style: string,
  name: string,
  disabled: boolean,
  onClick: () => void
}) => {
  return (
    <>
        <button type="button" className={"active_button " + props.style} onClick={() => props.onClick()} disabled={props.disabled}>
            <span className="button_text">{props.name}</span>
        </button>
    </>
  );
}

export default ActiveBtn