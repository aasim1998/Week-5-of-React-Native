import React from 'react';
import LoginComponent from '../../components/Login';



const Login = () => {
    const [value , onChangeText] = React.useState('useless placeholder');
    return(
        <LoginComponent/>
    )
       
}
export default Login;