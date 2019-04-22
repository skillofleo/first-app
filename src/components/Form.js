import React,{useState} from 'react'



const Form = ({submit}) =>{
    const [value1,setValue1] = useState("");
    const [value2,setValue2] = useState("");
    const reset = () =>{
        setValue1('');
        setValue2('');
    }
  return (
        <form onSubmit={
            event =>{
                event.preventDefault();
                let result= submit({value1,value2});
                if(result){reset()}
        }} >
            <input type="text" 
                onChange={event => {
                    setValue1(event.target.value);
                }} 
                value={value1} />
            <input type="text"
                onChange={event => {
                    setValue2(event.target.value);
                }} 
                value={value2} />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
