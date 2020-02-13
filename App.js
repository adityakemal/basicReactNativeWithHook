import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

export default function App() {
    // var state
    const [name, setName] = useState('kemal');
    const [person,setPerson] = useState({name: 'Mario', age: 30});

    //funct
    const onClick = () => {
        setName('chun-Li')
        setPerson({name : 'Luigi', age : '90'})
    }

    
    return (
    <View style={styles.containerTop}>
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headText}>
                    im header
                </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text}>nama saya {name}</Text>
                <Text>his name is {person.name} and his age is {person.age}</Text>
                <View style ={styles.buttonContainer}>
                    <Button title='update state' onPress={onClick}/>
                </View>

            </View>

        </SafeAreaView>

    </View>
    );
}

const styles = StyleSheet.create({
  containerTop :{
      flex : 1
  },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height : '100%',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'red',
        fontSize: 24,
        fontWeight: "bold"
    },
    header: {
        backgroundColor: 'pink',
        position: 'absolute',
        top: 0,
        // marginTop: 25,
        width: '100%'
    },
    headText: {
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 20
    }
});
