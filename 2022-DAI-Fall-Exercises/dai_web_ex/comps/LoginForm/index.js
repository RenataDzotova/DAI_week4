import {Button, Loader, Input} from 'semantic-ui-react';
import { Wrapper, BigCont} from '../../styles/globals';

export default function LoginForm({
    loginState="before",
    onLoginClick=()=>{}
}){

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



return <BigCont>
  <Wrapper>
    <h3>Login Form</h3>
    <Input 
    disabled={loginState !== "before"} 
    placeholder = "email" />
    <Input 
    disabled={loginState !== "before"} 
    placeholder = "password" 
    />
    <Button color={colorrr} onClick={onLoginClick}>
    {button_text}
    {loginState === "during" && <Loader active />}
    </Button>
</Wrapper>
</BigCont>

}