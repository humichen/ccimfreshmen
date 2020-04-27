import React, { useContext } from "react";
import { ScrollView, Linking, Text, Image, StyleSheet, ImageBackground, View, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import { StoreContext } from "../stores/progressstore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Make a component
const EditScreen = ({ navigation }) => {
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState;

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg_all.png')}>
            <KeyboardAwareScrollView>
                <View style={styles.cardbox}>
                    <View style={styles.borderbox}>
                        <Text style={styles.title}>更改名稱</Text>
                        <View style={styles.inputbox}>
                            <TextInput
                                placeholder={me.name}
                                placeholderTextColor="#747474"
                                maxLength={8}
                                style={styles.textbox}
                                value={me.ans}
                                onChangeText={(name) => setMe({ ...me, name })}
                            />
                        </View>
                        <TouchableHighlight onPress={() => navigation.navigate('Home3')} style={styles.savebutton} underlayColor="#A7050E">
                            <Text style={styles.saveStyle}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                
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
        width: 138,
        height: 44,
        backgroundColor: "#FEBC5F",
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 26
    },
    saveStyle: {
        color: "#fff",
        fontSize: 20
    },
    cardbox: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        marginLeft: 24,
        marginRight: 24,
        height: 220,
        borderWidth: 2,
        borderColor: "#A7050E",
        marginTop:"40%"
    },
    borderbox: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#A7050E",
        margin: 6,
        height: 204,
        justifyContent: "center",
        alignItems: "center"
    },
    textbox: {
        fontSize: 16,
        textAlign: "center",
        width: 138,
    },
    inputbox: {
        width: 138,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#707070",
        marginTop: 18
    }

});

export default EditScreen;