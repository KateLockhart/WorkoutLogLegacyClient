import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <h1>Login</h1>
                <Form>
                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        {/* add to value={username} input after adding types */}
                        <Input name='username' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        {/* add to value={password} input after adding types */}
                        <Input name='password'/>
                    </FormGroup>
                    {/* Change to onClick */}
                    <Button type='submit'>Login</Button>
                </Form>
            </div>
        )
    }
}