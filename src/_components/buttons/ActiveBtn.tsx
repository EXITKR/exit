const ActiveBtn = (props: {
  style: string,
  name: string,
  onClick: () => void
}) => {
  return (
    <>
        <div className={"active_button " + props.style} onClick={() => props.onClick()}>
            <span className="button_text">{props.name}</span>
        </div>
    </>
  );
}

export default ActiveBtn