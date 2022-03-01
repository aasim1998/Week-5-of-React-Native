

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {View , Text  , Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';


    const RegisterComponent =({onSubmmit ,  onChange , form ,  errors}) => {
        const{navigate} =useNavigation();
    return(
        <Container>
            <Image height={70}
            width={70}
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
            />

        <View>
            <Text style={styles.title}>Welcome to RNContacts</Text>
            <Text style={styles.subTitle}>Create a free account </Text>

            <View style={styles.form}>
   
            <Input

            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={(value) => {
                onChange({name: "userName", value});
                
            }}
        
        
        //error={"This foield is required"}
            />
            <Input
            label="First name"
            placeholder="Enter First Name"
            iconPosition="right"
            onChangeText={(value) => {
                onChange({name: "firstName", value});
                
            }}
            error={errors.firstName}
            
            
            />

            <Input
            label="Lastname"
            placeholder="Enter Last Name"
            iconPosition="right"
            error={errors.lastName}
            onChangeText={(value) => {
                onChange({name: "Lastname", value});
                
            }}
            
            
            />

            <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            error={errors.email}
            onChangeText={(value) => {
                onChange({name: "Email", value});
                
            }}
            
            
            />

            <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>show</Text>}
            iconPosition="right"
            error={errors.passwordName}
            onChangeText={(value) => {
                onChange({name: "password", value});
                
            }}
            />
            
            <CustomButton onPress={onSubmmit} primary title='Submit'/>
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Already have an account ?</Text>
                <TouchableOpacity

                onPress={()=>{


                    navigate(LOGIN);
                    }}>
                    <Text style={styles.linkBtn}>Login</Text>
                </TouchableOpacity>
                    
                    

            </View>
            </View>
        </View>
        </Container>


    );
};

export default RegisterComponent;

        
        
        

        
        
        
        
        
       
       
       

            
    

