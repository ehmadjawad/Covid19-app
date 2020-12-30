import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements'

import Loading from '../Components/Loading';
import CustomHeader from '../Components/CustomHeader';


const StartScreen = ({ navigation, route }) => {
    const [getIsLoading, setIsLoading] = useState(true);
    const [getCountriesNames, setCountriesNames] = useState([]);

    const { title } = route.params;

    useEffect(() => {
        fetch('https://api.covid19api.com/countries')
            .then((response) => response.json())
            .then(responseJson => {
                setCountriesNames(responseJson)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    })

    let array = getCountriesNames;


    const searchFilterFunction = text => {
        const newData = array.filter(item => {
            const itemData = item.Country.toUpperCase()

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        setCountriesNames(newData)
    };



    const renderCountriesNames = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.namesOpacity}
                activeOpacity={0.6}
                onPress={() => {
                    navigation.navigate('CountryDetails', {
                        countryName: item.Country,
                        countrySlug: item.Slug
                    });
                }}
            >
                <Text style={styles.namesText}> {item.Country.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <CustomHeader title={title} openDrawer={() => navigation.openDrawer()} />
            <View style={{ justifyContent: 'center' }}>
                {getIsLoading === false ?
                    <FlatList
                        data={getCountriesNames.slice(0,20)}
                        renderItem={renderCountriesNames}
                        ListHeaderComponent={
                            <SearchBar
                                placeholder="Type Here..."
                                lightTheme
                                round
                                onChangeText={text => searchFilterFunction(text)}
                                autoCorrect={false}
                            />}
                        keyExtractor={(item) => item.ISO2}

                    />
                    :
                    <Loading />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    namesOpacity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: 'orange',
    },
    namesText: {
        color: 'white',
        fontSize: 16,
    }
})

export default StartScreen;