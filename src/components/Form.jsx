import {useState} from "react";

export default function Form (){
    const [name, setName] = useState({firstName: "", lastName: ""});
    function handleSubmit (e){
        e.preventDefault();
        console.log(name);

    }
    return <div>
        {name.firstName} - {name.lastName}
        <h1>Form</h1>
        <form>
            <input onChange={(event) =>
                    setName({...name, firstName:event.target.value,
                        lastName: event.target.value})}
                type="text" value={name.firstName} />

            <input type="text" onChange={(event) =>
                setName({...name, lastName:event.target.value})}
                   value={name.lastName}/>
            <button onClick={(e) =>
                handleSubmit(e)}>submit</button>
        </form>
    </div>
}