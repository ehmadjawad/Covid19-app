import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Loading from '../Components/Loading';

const CountryDetailsScreen = ({ navigation, route }) => {
    const [getIsLoading, setIsLoading] = useState(true);
    const [getData, setData] = useState([]);
    const { countryName } = route.params;
    const { countrySlug } = route.params;


    navigation.setOptions({ title: countryName })


    useEffect(() => {
        fetch('https://api.covid19api.com/dayone/country/' + countrySlug)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
                setIsLoading(false);
            });
    })


    return (
        <View style={styles.mainView}>
            {getIsLoading === false ?
                <View>
                    <View style={styles.countryNameView}>
                        <Text style={styles.countryNameText}>INITIAL SITUATION</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={styles.informationAttributesView}>
                            <Text style={styles.informationAttributesText}>FIRST CASE:</Text>
                            <Text style={styles.informationAttributesText}>REPORTED CASE(S):</Text>
                            <Text style={styles.informationAttributesText}>DEATHS:</Text>
                            <Text style={styles.informationAttributesText}>RECOVERED:</Text>
                            <Text style={styles.informationAttributesText}>ACTIVE:</Text>
                        </View>

                        <View style={[styles.informationDataView]}>
                            <Text style={styles.informationDataText}>{getData[0].Date.substring(0, 10)}</Text>
                            <Text style={styles.informationDataText}>{getData[0].Confirmed}</Text>
                            <Text style={styles.informationDataText}>{getData[0].Deaths}</Text>
                            <Text style={styles.informationDataText}>{getData[0].Recovered}</Text>
                            <Text style={styles.informationDataText}>{getData[0].Active}</Text>
                        </View>
                    </View>

                    <View style={styles.countryNameView}>
                        <Text style={styles.countryNameText}>CURRENT SITUATION</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.informationAttributesView}>
                            <Text style={styles.informationAttributesText}>TOTAL CONFIRMED:</Text>
                            <Text style={styles.informationAttributesText}>DEATHS:</Text>
                            <Text style={styles.informationAttributesText}>RECOVERED:</Text>
                            <Text style={styles.informationAttributesText}>ACTIVE CASE(S):</Text>
                        </View>

                        <View style={[styles.informationDataView]}>
                            <Text style={styles.informationDataText}>{getData[getData.length - 1].Confirmed}</Text>
                            <Text style={styles.informationDataText}>{getData[getData.length - 1].Deaths}</Text>
                            <Text style={styles.informationDataText}>{getData[getData.length - 1].Recovered}</Text>
                            <Text style={styles.informationDataText}>{getData[getData.length - 1].Active}</Text>
                        </View>
                    </View>
                </View>
                :
                <Loading />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    countryNameView: {
        marginVertical: 10,
        alignItems: 'center'
    },
    countryNameText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    informationAttributesView: {
        padding: 10,
        marginLeft: 10,
        width: '50%',
        backgroundColor: 'purple',
        alignItems: 'center'
    },
    informationDataView: {
        padding: 10,
        marginRight: 10,
        width: '45%',
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    informationAttributesText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    informationDataText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'purple'
    }
})

export default CountryDetailsScreen;