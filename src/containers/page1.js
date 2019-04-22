import React,{useState} from 'react'
import Form from '../components/Form';

const Page1 = () => {

    const [value,setValue] = useState("");

    return <div>
        <h1>{value}</h1>

        <Form 
            submit={({value1,value2})=>{
                console.log(value1);
                console.log(value2);
                setValue(`${value1} ${value2}`);

                return value1===value2? true:false;
            }}

        />
    </div>
}

export default Page1