const TitleContent = (props)=>{
    return(
        <div className="title">
            <h1>{props.title}</h1>
            <h3>by <span>{props.author}</span></h3>
            <h2 className="blogNumber">{props.blogNumber}</h2>
            <h5> {props.date}</h5>
        </div>
    );
}
export default TitleContent