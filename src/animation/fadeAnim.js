import React, {useRef,useEffect} from "react";
import {Animated } from 'react-native';
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; 
    // const fadeAnim = new Animated.Value(0); 
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
      }).start();
    }, []);
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  export default FadeInView;