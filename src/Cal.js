import React,{useState} from 'react';

function Cal() {
    const[input,setInput] = useState("");
    const[res,setRes] = useState(0);
    const handelar = e =>{
        setInput(e.target.value);
    }
    const clerVal = e =>{
        setInput('');
        setRes(0);
    }
    return (
        
        <div className="cal-page">
            <div className="cal-inputs">
           <input type="text" className="input" name="input" value={input} onChange={handelar}/>
           <span className="equalTo">=</span>
            <input type="text" value={res} className="res" />
           </div>
           <div className="cal-btn">
           <table class="table table-bordered">
                <tr>
                    <td><button onClick={()=> setInput(input+ 1)}>1</button></td>
                    <td><button onClick={()=> setInput(input+ 2)}>2</button></td>
                    <td><button onClick={()=> setInput(input+ 3)}>3</button></td>
                    <td><button onClick={()=> setInput(input+ 4)}>4</button></td>
                    <td><button onClick={()=> setInput(input+ 5)}>5</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=> setInput(input+ 6)}>6</button></td>
                    <td><button onClick={()=> setInput(input+ 7)}>7</button></td>
                    <td><button onClick={()=> setInput(input+ 8)}>8</button></td>
                    <td><button onClick={()=> setInput(input+ 9)}>9</button></td>
                    <td><button onClick={()=> setInput(input+ 0)}>0</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=> setInput(input+'+')}>+</button></td>
                    <td><button onClick={()=> setInput(input+'-')}>-</button></td>
                    <td><button onClick={()=> setInput(input+'*')}>*</button></td>
                    <td><button onClick={()=> setInput(input+'/')}>/</button></td>
                    <td><span className="hald-td">
                        <button onClick={clerVal}>C</button></span>
                        <span className="hald-td">
                        <button onClick={()=> setRes(eval(input))}>=</button></span>
                    </td>
                
                </tr>
            </table> 
           </div>
        </div>
    )
}

export default Cal
