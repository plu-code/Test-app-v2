import RenderProduct from "./RenderProduct";
import { useState, useEffect } from "react";
export default function Home(props){
    let section = props.section
    const [currentPage, setCurrentPage] = useState(props.currentPage)
    let itemno = props.itemno
    const products = []
    for (let i = itemno; i < itemno+10; i++){
        products.push(<RenderProduct section = {section} currentPage={currentPage} itemno={itemno+i}  />)
    }
    return <div className="products">
        {products}
        </div>;
}    
