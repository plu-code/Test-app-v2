import Product from "./Product";
import { useState, useEffect } from "react";

export default function RenderProduct(props){
    const section= props.section;
    const currentPage= props.currentPage;
    const itemno= props.itemno;
    const [id, setId] = useState(null);
    const [thumb, setThumb] = useState(null);
    const [tit, setTit] = useState(null);
    const [desc, setDesc] = useState(null);
    let item;
    item = itemno;
    const apiLink = `https://dummyjson.com/products?limit=10&skip=${item}`
    useEffect(() => {
        fetch(apiLink)
        .then((res) => res.json())
        .then((res) => {
            setId(res.products[0].id+10)
            setThumb(res.products[0].thumbnail)
            setTit(res.products[0].title)
            setDesc(res.products[0].description)
        })
    },[])

 return <>
         <Product id={id} title = {tit} thumbnail = {thumb} description = {desc} />
         </>
}
