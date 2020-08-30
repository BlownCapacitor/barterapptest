import React, {Components} from 'react';
import  {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Welcome extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID : '',
            password : '',
            isModalVisisble : 'false',
            firstName : '',
            lastName : '',
            address : '',
            contacts : '',
            confirmPassword : '',
        }
    }
    
  
   
    userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            db.collection('users').add({
              firstName:this.state.firstName,
              lastName:this.state.lastName,
              contact:this.state.contact,
              emailId:this.state.emailID,
              address:this.state.address
            })
            return  Alert.alert(
                 "User Added Successfully",
                 "",
                 [
                   {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                 ]
             );
          })
          .catch((error)=> {
          
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
        }
      }
     
     userLogin = (emailAdress, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailAdress, password)
        .then(()=>{
          this.props.navigation.navigate('DonateBooks')
         })
         
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
     
    showModal = () =>{
        return(
            <Modal animationType = "fade"
            transparent = {true}
            visible = {this.state.isModalVisible}>
              
                <View  style = {styles.modalContainer}>
                   
                    <ScrollView style = {{width:'100%'}}>
                      
                        <KeyboardAvoidingView style = {styles.keyboardAvoidingView}>
                      
                          <Text style = {styles.modalTitle}>Registration</Text>
                          
                            <TextInput style = {styles.formTextInput}
                            placeholder = {"first name"}
                            maxLength = {8}
                            onChangeText = {(text)=>{
                                this.setState({
                                  firstName : text
                                })
                            }}/>
                         
                            <TextInput style = {styles.formTextInput}
                            placeholder = {"last name"}
                            maxLength = {8}
                            onChangeText = {(text) =>{
                                this.setState({
                                    lastName : text
                                })
                            }}
                                />
                              
                                <TextInput style = {styles.formTextInput}
                                placeholder = {"contact"}
                                maxLength = {10}
                                keyboardType = {'numeric'}
                                onChangeText = {(text)=>{
                                    this.setState({
                                        contact : text
                                    })
                                }}
                                />
                               
                                <TextInput style = {styles.formTextInput}
                               placeholder = {"email address"}
                               keyboardType = {'email-address'}
                               onChangeText = {(text)=>{
                                   this.setState({
                                       emailAddress : text
                                   })
                               }}
                               />
                             
                               <TextInput style = {styles.formTextInput}
                               placeholder = {"address"}
                               multiline = {true}
                               onChangeText = {(text) =>{
                                   this.setState({
                                       address : text
                                   })
                               }}
                               />
                             
                               <TextInput style = {styles.formTextInput}
                               placeholder = {"password"}
                              secureTextEntry = {true}
                              onChangeText = {(text)=>{
                                  this.setState({
                                    password : text  
                                  })
                              }}
                              />
                             
                              <TextInput style = {styles.formTextInput}
                              placeholder = {"confirm password"}
                              secureTextEntry = {true}
                              onChangeText = {(text)=>{
                                  this.setState({
                                      confirmPassword : text
                                  })
                              }}
                              />
                              <View style = {styles.modalBackButton}>
                                 <TouchableOpacity style = {styles.registerButton}
                                 onPress = {()=>
                                    this.userSignUp(this.state.emailID,this.state.password,this.state.confirmPassword)

                                     }>
                                      <Text style = {styles.registorButtonText}> Registor</Text>   
                                     </TouchableOpacity>
                              </View>
                            
                              <View style = {styles.modalBackButton}>
                             
                               <TouchableOpacity style = {styles.cancelButton}
                               onPress = {()=>
                                this.setState({
                                  "isModalVisible" : false
                                })
                               }>
                                   <Text style = {{color : 'blue'}}> Cancel </Text>
                               </TouchableOpacity>
                             
                              </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {{justifyContent : 'center',alignItems : 'center'}}>
                    
                     </View>

                     {this.showModal()}

                <View style = {{justifyContent: 'center', alignItems : 'center'}}>
                    
                  
                    
                    <Text style = {styles.title}>Barter System Online</Text>
                </View>
                <View>
                    <TextInput style = {styles.loginBox}
                    placeholder = "ABC@example.com"
                    placeholderTextColor = 'gray'
                    keyboardType = "email-address"
                    onChangeText = {(text)=>{
                     this.setState = ({
                         emailID : text,
                     })
                    }}
                    />

                    <TextInput style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = "enter password"
                    onChangeText = {(text)=>{
                     this.setState = ({
                         password : text,
                     })
                    }}
                    />

                    <TouchableOpacity style = {styles.button}
                    onPress = {()=>
                        this.setState({
                            isModalVisible : true
                        })

                    }>
                      <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                   
                    <TouchableOpacity style = {[styles.button,{marginTop:20,marginBottom:20}]}
                    onPress = {()=>{
                        this.userLogin(this.state.emailID,this.state.password)

                    }}>
                      <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
           
        )
    }
}

   
const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor: 'grey',
      alignItems:'center',
      justifyContent: 'center',
     },
     title: {
       fontSize : 35,
      fontWeight : 'bold',
       color : 'grey'
      },
     button: {
      backgroundColor : 'orange',
      margin : 55,
      padding : 50,
      width  : 100,
      height : 40,
      justifyContent : 'center',
      alignItems : 'center'
      },
      buttonText: {
       alignItems : 'center',
       fontSize : 20,
      fontWeight : 'bold',
       color : "white"
      },
      loginBox: {
        padding : 15,
        width: 100,
        height : 40,
        margin : 10,
        fontSize: 25,
      },
      modalContainer:{
       flex : 1,
       backgroundColor: 'yellow' ,
       alignItems : 'center',
       justifyContent : 'center',
       margin : 15,
       padding: 10,
      },
      keyboardAvoidingView:{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
      },
  modalTitle:{
      justifyContent : 'center',
      alignSelf : 'center',
      margin  :10,
      color : 'grey',
      fontSize : 25,
      
  },
  formTextInput:{
      width : '75%',
      height : 35,
      alignSelf : 'center',
      borderColor : 'gray',
      borderWidth : 1,
      marginTop : 20,
      padding : 10,
  },
  registerButton : {
      width : 200,
      height : 40,
      alignItems : 'center',
      justifyContent : 'center',
      marginTop : 20,
      backgroundColor : 'green'

  },
  registorButtonText :{
      color : 'black',
   fontSize :20,
   fontWeight : 'bold',
  },
  cancelButton : {
      justifyContent : 'center',
      alignItems : 'center',
      width : 200,
      height: 40,
      marginTop : 5,
      backgroundColor : 'red',
  },
  modalBackButton : {
      justifyContent : 'center',
      alignItems : 'center',
      width : 150,
      height: 45,

  }
})
