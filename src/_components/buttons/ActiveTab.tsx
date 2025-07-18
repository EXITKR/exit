import { activeTabsInterface } from "@interfaces/pagesInterface";

const ActiveTab = (props: {
  tabs: activeTabsInterface[],
  index: number,
  setIndex: (idx: number) => void
}) => {
  return (
    <>
        <div className="active_tabs">
            {props.tabs.map((item, idx) => (
                <div key={idx} className={"tab " + (props.index === idx ? "active " : " ") + "tab_" + props.tabs.length} onClick={() => props.setIndex(idx)}>
                    <span className="tab_text">{item.name}</span>
                </div>
            ))}
        </div>
    </>
  );
}

export default ActiveTab