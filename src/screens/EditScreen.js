import React, { useContext,useEffect, useState } from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, TouchableOpacity, TouchableHighlight, TextInput,AsyncStorage } from 'react-native';
import * as firebase from "firebase";
import { StoreContext } from "../stores/progressstore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {VAR} from "../core/variable"
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";
import FadeInView from "../animation/fadeAnim"

// Make a component
const EditScreen = ({ navigation }) => {
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState;
    const [changename, setchangename] = useState(me.name);
    const saveToAsyncStorage = () => {
        try {
          AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(me));
          AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
        } catch (error) {
          // Error saving data
        }
      };
    
      useEffect(() => {
        saveToAsyncStorage();
      }, [me]);

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
            <KeyboardAwareScrollView>
                <FadeInView style={styles.cardbox}>
                    <View style={styles.borderbox}>
                        <Text style={styles.title}>更改名稱</Text>
                        <View style={styles.inputbox}>
                            <TextInput
                                placeholder={me.name}
                                placeholderTextColor="#747474"
                                maxLength={8}
                                style={styles.textbox}
                                value={me.ans}
                                onChangeText={(name) => setchangename(name)}
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.buttonlayout}>
                            <TouchableHighlight onPress={() => {
                            // setMe({...me,completed:false,_0:false,_1:false,_2:false,_3:false,_4:false,_5:false,_6:false,_7:false,});
                            if(me.completed)firebase.database().ref(parseInt(me.year/100000)-1000+"/"+me.year+"/name").set(changename);
                            setMe({...me,name:changename});
                            navigation.navigate('Home3');
                        }} 
                            style={styles.savebutton} underlayColor="#A7050E">
                            <Text style={styles.saveStyle}>Save</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            // setMe({...me,completed:false});
                            setchangename(me.name);
                            navigation.navigate('Home3');
                        }} 
                            style={styles.cancelbutton} underlayColor="#A7050E">
                            <Text style={styles.cancelStyle}>Cancel</Text>
                        </TouchableHighlight>
                        </View>
                        
                    </View>
                </FadeInView>
                
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:"#000"
    },
    savebutton: {
        width: 100,
        height: 44,
        backgroundColor: VAR.BUTTON_COLOR_SELECTED,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        // marginTop: 26
    },
    saveStyle: {
        color: "#fff",
        fontSize: 16
    },
    cardbox: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        marginLeft: VAR.MAIN_MARGIN_LEFT,
        marginRight: VAR.MAIN_MARGIN_RIGHT,
        height: 250,
        borderWidth: 2,
        borderColor: VAR.MAIN_COLOR,
        marginTop:"40%"
    },
    borderbox: {
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: VAR.MAIN_COLOR,
        margin: 6,
        height: 234,
        justifyContent: "center",
        alignItems: "center"
    },
    textbox: {
        fontSize: 16,
        textAlign: "center",
        width: 138,
    },
    inputbox: {
        width: 180,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#707070",
        marginTop: 26
    },
    cancelbutton:{
        // marginTop:16,
        width: 100,
        height: 44,
        
        backgroundColor:"#f0f0f0",
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight:15,
    },
    cancelStyle:{
        color:"#b0aeae",
        fontSize:16,
    },
    buttonlayout:{
        flexDirection:"row-reverse",
        marginTop:30
    }

});

export default EditScreen;
