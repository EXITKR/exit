import { ContentBoxInterface } from "@interfaces/pagesInterface";
import Image from "next/image";

const ContentBox = (props: {
    content_box: ContentBoxInterface
}) => {
    return (
        <div className="content_box d-flex">
            {/* <div className="content_box_title">
                <div className={"title_div " + props.content_box.background}>
                    <span className="title_text">
                        {props.content_box.title}
                    </span>
                </div>
            </div> */}
            {props.content_box.content
                ?
                <div className="content_box_content">
                    <pre className="content_text">{props.content_box.content}</pre>
                </div>
                :
                null
            }
            <div className="content_box_contents">
                {props.content_box.content_list && props.content_box.content_list.map((item, idx) => (
                    <div className="contents_div" key={idx}>
                        {item.image_list?.map((val, index) => (
                            <div className="image_div" key={index}>
                                <Image className="image" src={val.image} alt={val.name} />
                                <span className="source_text">{val.source}</span>
                            </div>
                        ))}
                        <div className="content_div">
                            {item.content
                                ?
                                <span className="content_title">{item.title}</span>
                                :
                                null
                            }
                            <pre className="content_text">{item.content}</pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentBox