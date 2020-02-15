import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'kemal', id : '1'},
        {name: 'aditya', id : '2'},
        {name: 'zulfi', id : '3'},
        {name: 'fikar', id : '4'},
        {name: 'kaz', id : '5'},
        {name: 'bandit', id : '6'},
        {name: 'rif', id : '7'},
        {name: 'rin', id : '8'}
    ])

    // var state
    const [name,
        setName] = useState('kemal');
    const [age,
        setAge] = useState('30');
    //funct
    // const onClick = () => {
    //     setName('chun-Li')
    // }

    const pressHandler = (id, name) =>{
        console.log(id);
        console.log(name);
        setPeople((prevPerson =>(
            prevPerson.filter(val => val.id != id )
        )))
        
    }

    return (
        <View style={styles.container}>

            {/* LEARN ONCHANGE  */}
            <Text>name :</Text>
            <TextInput multiline //make auto spread to bottom when the character is overload
                style={styles.input} 
                placeholder='masukan Name' 
                onChangeText={(val) => setName(val)}
                />

            <Text>Ages :</Text>
            <TextInput 
                keyboardType='numeric'
                multiline //make auto spread to bottom when the character is overload
                style={styles.input} 
                placeholder='masukan Age' 
                onChangeText={(val) => setAge(`${val}`)}
                blurOnSubmit
            />
            
            <Text>my name is :</Text>
            <Text style={styles.text}>
                {name}
            </Text>
            <Text>my age is :</Text>
            <Text style={styles.text}>
                {age}
            </Text>

            {/* ONCLICK  */}
            {/* <View style ={styles.buttonContainer}>
                <Button title='update state' onPress={onClick}/>
            </View> */}

            {/* LEARN MAP / LOOPING LIST ITEMS  */}
            {/* <ScrollView>
            {people.map((val)=>(
                <View key={val.id}>
                    <Text style={styles.items} >{val.name}</Text>
                </View>
                )
            )}
            </ScrollView> */}

            {/* LEARN FlatList  */}
            {/* FLAT LIST DONT NEED SCROLLVIEW TO SCROLL AWESOME  */}
            {/* dan juga tidak langsung ngerender semua items FlatList ngerender ketika di scroll saja  */}
            {/* FlatList just need declaring object in parameter with 'item' name  */}
            <FlatList
            numColumns={2}
            keyExtractor={(item)=> item.id} //for extracting 'id' into 'key'  couse in database there is no key attribute
            data = {people}
            renderItem={({item}) =>(
                <TouchableOpacity style={styles.items} onPress={()=> pressHandler(item.id, item.name)}>
                    <Text >{item.name}</Text>
                </TouchableOpacity>
            )} />
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal : 20,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor : '#f1f1f1'
    },
    text: {
        color: 'red',
        fontSize: 24,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: 'pink',
        width: 200,
        padding: 8,
        margin: 10
    },
    buttonContainer: {
        marginTop: 20,
        width: '90%',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'pink',
        backgroundColor: 'yellow',
    },
    items : {
        padding : 20,
        backgroundColor : 'pink',
        marginTop : 10,
        fontSize :24,
        marginBottom : 10,
        marginHorizontal : 10,
        width : '45%'
    }
});
