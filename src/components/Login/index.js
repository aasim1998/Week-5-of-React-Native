

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {View , Text  , Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';


    const LoginComponent =() => {
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
            <Text style={styles.subTitle}>Please login here </Text>

            <View style={styles.form}>
   
            <Input

            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
        
        
        //error={"This foield is required"}
            />
            <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>show</Text>}
            iconPosition="left"
            />
            
            <CustomButton primary title='Submit'/>
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account ?</Text>
                <TouchableOpacity

                onPress={()=>{


                    navigate(REGISTER);
                    }}>
                    <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
                    
                    

            </View>
            </View>
        </View>
        </Container>


    );
};

export default LoginComponent;

        
        
        

        
        
        
        
        
       
       
       

            
    

