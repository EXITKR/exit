import { SyncLoader } from "react-spinners";

const Loading = (props: {
    message: string
}) => {
    const override = {
        margin: '0 auto',
        marginTop: '50vh',
    };
    return (
        <>
            <div className="loading_page">
                <SyncLoader
                    color="#537571"
                    loading={true}
                    cssOverride={override}
                    size={25}
                    speedMultiplier={0.8}
                    margin={5}
                />
                <span className="loading_text">{props.message}</span>
            </div>
        </>
    );
}

export default Loading