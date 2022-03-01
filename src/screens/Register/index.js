import React, {useState} from 'react';
import {View , Text} from 'react-native';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/envs';

const Register = () => {

    const[form , setForm] = useState({});
    const[errors , setErrors] = useState({});
    
console.log('BACKEND_URL :>>', envs);
console.log('__DEV__', __DEV);

    const onChange =({name , value}) => {
        setForm({...form , [name] : value});

        if(value !==""){
            setErrors((prev)=>{
                return{...prev,[name]: null};
            });

        }else{
            setErrors(prev=>{
                return{...prev,[name]: 'This field is required'}
            });
        }

    };

    const onSubmit = () => {
        //validations
        console.log('form :>>',form);
        if(!form.userName){
            setErrors((prev)=>{
                return{...prev,userName: 'please add a username'}
            });
        }
        if(!form.firstName){
            setErrors((prev)=>{
                return{...prev,firstName: 'please add a firstname'}
            });
        }
        if(!form.lastName){
            setErrors((prev)=>{
                return{...prev,lastName: 'please add a lastname'}
            });
        }
        if(!form.email){
            setErrors((prev)=>{
                return{...prev,email: 'please add a email'}
            });
        }
        if(!form.password){
            setErrors((prev)=>{
                return{...prev,password: 'please add a password'}
            });
        }
    };

    return<RegisterComponent onSubmmit={onSubmit} onChange={onChange} form={form} errors={errors}/>
    
}

export default Register;


