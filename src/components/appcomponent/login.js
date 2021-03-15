import { useState } from "react"

function Login(){
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    function (){
        setusername()
    } 

    function name() {
        setpassword()
    }

    function submit(){
        // console.log(username,password);
        fetch 'google.com' (username,password)
    }

    return(
            <form>
                <div class='formgroup'>
                    <input />
                    <input />
                </div>
                <div class=''>
                    <input />
                    <input />
                </div>
                <div class=''>
                    <input />
                    <input />
                </div>

            </form>
    )
}
export default Login