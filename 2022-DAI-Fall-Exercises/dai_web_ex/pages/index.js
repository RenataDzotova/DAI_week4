import {Button, Item, Loader} from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm';


// The router and states are mostly used on the page for data/information state management
import {useRouter} from 'next/Router'
import {useState} from 'react';

export default function Home() {

  const r = useRouter();

// Before, during , and after
const [loginState, setLoginState] = useState("before")

var colorrr = "blue";
var button_text = "Click Me"

if (loginState === "before"){
  colorrr = "blue"
  button_text = "Login"
}

if (loginState === "during"){
  colorrr = "green"
  button_text = "Logging in"
}

if (loginState === "after"){
  colorrr = "pink"
  button_text = "Success"
}


const HandleButtonColor = () =>{
  if(loginState === "before"){
    setLoginState("during");
  }
  if (loginState === "during"){
    setLoginState("after");
  }
  if (loginState === "after"){
    r.push("/dashboard");
  }
}

const Login = async () => {
  setLoginState("during");

  // it's going to take time
  // mock of the time passing -> this code is useless, it doesn't do anything, it's just mimicking time passing
  await new Promise(resolve=>setTimeout(resolve, 2000));

  setLoginState("after");

  // Items gonna istall for 1-2 seconds

  r.push("/dashboard");
}

  return (
    <div>
      {/* <Button color={colorrr} onClick={()=>Login()}>{button_text}</Button>
      {loginState === "during" && <Loader active />} */}
      <LoginForm 
      loginState={loginState}
      onLoginClick={()=>Login()}
      />
      
    </div>
  )
}
