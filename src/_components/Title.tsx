const Title = (props: {
    title: string,
    desc: string
}) => {
    return (
        <>
            <div className="title_section">
                <div className="inner_main title_main">
                    <span className="title">{props.title}</span>
                    <span className="desc">{props.desc}</span>
                </div>
            </div>
        </>
    );
}

export default Title