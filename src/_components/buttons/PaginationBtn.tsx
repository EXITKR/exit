"use client"
import { useRouter } from "next/navigation";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const PaginationBtn = (props: {
    next_name: string,
    next_url: string,
    next_disabled: boolean,
    prev_name: string,
    prev_url: string,
    prev_disabled: boolean,
}) => {
    const router = useRouter()
    return (
        <>
            <div className="pagination">
                <div className="inner_main pagination_inner">
                    <div className={"pagi_button " + (props.prev_disabled ? "disabled" : "" )} onClick={() => router.push(props.prev_url)}>
                        <FaArrowCircleLeft className="pagi_icon" />
                        <span className="button_text">{props.prev_name}</span>
                    </div>

                    <div className={"pagi_button " + (props.next_disabled ? "disabled" : "" )} onClick={() => router.push(props.next_url)}>
                        <span className="button_text">{props.next_name}</span>
                        <FaArrowCircleRight className="pagi_icon" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaginationBtn