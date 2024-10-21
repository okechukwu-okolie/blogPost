import Title from "../Title/Title";

const MainBodyContent=(props)=>{
    return(
        <div className="mainBodyContent">
            <p><h2>{props.number1}</h2>{props.mainBlogContent1}</p>
            <br />
            <br />
            <p><h2>{props.number2}</h2>{props.mainBlogContent2}</p>
            <br />
            <b></b>
            <p><h2>{props.number3}</h2>{props.mainBlogContent3}</p>
            <br />
            <b></b>
            <p><h2>{props.number4}</h2>{props.mainBlogContent4}</p>
            <br /><b></b>
            <p><h2>{props.number5}</h2>{props.mainBlogContent5}</p>
            <br /><b></b>
            <p><h2>{props.number6}</h2>{props.mainBlogContent6}</p>
            <br /><b></b>
            <p><h2>{props.number7}</h2>{props.mainBlogContent7}</p>
            <br /><b></b>
            <p><h2>{props.number8}</h2>{props.mainBlogContent8}</p>
            <br /><b></b>
            <p><h2>{props.number9}</h2>{props.mainBlogContent9}</p>
            <br /><b></b>
            <p><h2>{props.number10}</h2>{props.mainBlogContent10}</p>
            <br /><b></b>

           
        </div>
    );
}

export default MainBodyContent;