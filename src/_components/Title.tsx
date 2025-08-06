const Title = (props: {
    title: string,
    desc: string
}) => {
    return (
        <>
            <div className="title_section">
                <div className="title_blur">
                    <div className="inner_main title_main">
                        <span className="title">{props.title}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Title