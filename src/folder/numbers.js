import react, {useState} from 'react'

function Numbers(){
    const [num,setnum]=useState(0)

    function numb(){
        setnum(num-1)
    }
    return(
        <div>
            <h1>Numbers</h1>
            {num}
            <button onClick={numb}>butt</button>
        </div>
    )
}
export default Numbers