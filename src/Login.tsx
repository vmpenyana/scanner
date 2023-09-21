import { Form } from 'react-router-dom';
import { getOrganizer } from './organizers';
import { redirect } from 'react-router-dom';

export const action = async (submission:any) => {
    const formData = await submission.request.formData();
    const name = formData.get(`organizer`);
    const password = formData.get(`password`);
    const organizer = getOrganizer(name, password);
    if(organizer) {
        return redirect(`/scanner/:${organizer.eventId}`);
    } else {
        return null;
    }
}

const Login = () => {
    return (
        <Form method='POST'>
            <input type='text' name='organizer' placeholder='Enter Org name' />
            <input type='password' placeholder='Enter Password' name='password' />
            <button>Login In!</button>
        </Form>
    )
}

export default Login;