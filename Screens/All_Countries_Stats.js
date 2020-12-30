import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';


import Loading from '../Components/Loading';
import CustomHeader from '../Components/CustomHeader';

const AllCountriesStatsScreen = ({ navigation, route }) => {
    const [getCountriesByContinent, setCountriesByContinent] = useState([]);
    const [getIsLoading, setIsLoading] = useState(true);
    const { continent } = route.params;

    useEffect(() => {
        fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/' + continent)
            .then(response => response.json())
            .then(responseJson => {
                setCountriesByContinent(responseJson);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    const countriesNamesArray = getCountriesByContinent.countries;

    const renderCountriesNames = ({ item }) => {
        return (
            <View style={styles.countryNamesView}>

                <View >
                    <Text style={styles.namesText}> {item.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: "space-around" }}>

                    <View>
                        <Text style={styles.countryInfoText}>CASES</Text>
                        <Text style={styles.countryInfoText}>{item.cases}</Text>
                    </View>

                    <View>
                        <Text style={styles.countryInfoText}>DEATHS</Text>
                        <Text style={styles.countryInfoText}>{item.deaths}</Text>
                    </View>

                    <View>
                        <Text style={styles.countryInfoText}>CONTINENT</Text>
                        <Text style={styles.countryInfoText}>{item.continent}</Text>
                    </View>

                </View>

            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <CustomHeader title={continent} openDrawer={() => navigation.openDrawer()} />
            {getIsLoading === false ?
                <FlatList
                    data={countriesNamesArray}
                    renderItem={renderCountriesNames}
                    numColumns={1}
                    keyExtractor={(item) => item.name}
                />
                :
                <Loading />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    countryNamesView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: 'lightgray',
    },
    namesText: {
        color: 'green',
        fontSize: 20,
        marginBottom: 10,
        textTransform: 'uppercase',
        textAlign: "center"
    },
    countryInfoText: {
        color: 'green',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: "center",
    }
})

export default AllCountriesStatsScreen;

