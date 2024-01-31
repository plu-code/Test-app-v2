export default function Product(props){
    const thumbnail = props.thumbnail;
    const title = props.title;
    const description = props.description;
    const id = props.id;
    const url=props.url;
    return (
        
        <div className="product" key={id}>
            <div className="image-div">    
            <a href={"/single"} id="img-link"><img className="thumb" src={thumbnail}></img></a>
            </div>
            <div className="side-bar">
                <a href={"/single"}><h2 className="product-name">
                {title}
                </h2></a>
                <h3 className="product-details">
                {description}
                </h3>
            </div>
        </div>
        
    )
}