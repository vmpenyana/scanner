import { Form } from 'react-router-dom';

export const action = async () => {
    console.log("got some action!")
    return "cool!"
}

const handleLogin = () => {
    
}

const Login = () => {
    return (
        <Form method='POST' action='/scanner/blob'>
            <input type='text' name='organizer' placeholder='Enter Org name' />
            <input type='password' placeholder='Enter Password' name='password' />
            <button onClick={handleLogin}>Login In!</button>
        </Form>
    )
}

export default Login;