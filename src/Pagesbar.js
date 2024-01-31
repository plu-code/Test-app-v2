import { useState, useEffect} from "react";

export default function Pagesbar(props){
    const [currentPage, setCurrentPage ] = useState(props.currentPage);
    const [start, setStart ] = useState(props.start);
    let i=0;
    useEffect(()=>{
        setCurrentPage(1)
    },[])

    const rows = []  
    for (let i = start; i < start+10; i++){
        rows.push(
        <button 
        key={i} 
        className="pagebtn" 
        onClick={()=>{
            setCurrentPage(i);
            }} 
        id={i===currentPage? 
            'current-btn':''}>{i}</button>)
    }

    return (<div className="pagesbar"> 
        <button className="pagebtn" id={start<=1 ? "backward-hide" : "backward"} onClick={()=>{ 
        setStart((prevStart) => (prevStart-10));
        }
        }>Backward</button>
        {rows}
        <button className="pagebtn" id="foreward" onClick={()=> {
            setStart((prevStart) => (prevStart+10));
            setCurrentPage(start);
            } } >Foreward</button>
    </div>);
}
 