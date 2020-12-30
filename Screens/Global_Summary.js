import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Loading from '../Components/Loading';
import CustomHeader from '../Components/CustomHeader';

const GlobalSummaryScreen = ({ navigation, route }) => {
    const [getGlobalSummary, setGlobalSummary] = useState([]);
    const [getIsLoading, setIsLoading] = useState(true);

    const { title } = route.params;

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(responseJson => {
                setGlobalSummary(responseJson);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    return (
        <View style={styles.mainView}>
            <CustomHeader title={title} openDrawer={() => navigation.openDrawer()} />
            {getIsLoading === false ?
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }}>
                    <View style={styles.informationAttributesView}>
                        <Text style={styles.informationAttributesText}>NEW CASE(S):</Text>
                        <Text style={styles.informationAttributesText}>TOTAL CASE(S):</Text>
                        <Text style={styles.informationAttributesText}>NEW DEATHS:</Text>
                        <Text style={styles.informationAttributesText}>TOTAL DEATHS:</Text>
                        <Text style={styles.informationAttributesText}>NEW RECOVERED:</Text>
                        <Text style={styles.informationAttributesText}>TOTAL RECOVERED:</Text>
                    </View>

                    <View style={[styles.informationDataView]}>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.NewConfirmed}</Text>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.TotalConfirmed}</Text>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.NewDeaths}</Text>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.TotalDeaths}</Text>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.NewRecovered}</Text>
                        <Text style={styles.informationDataText}>{getGlobalSummary.Global.TotalRecovered}</Text>
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
        alignItems: 'center',
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
        marginVertical: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    informationDataText: {
        fontSize: 16,
        marginVertical: 25,
        color: 'purple'
    }
})

export default GlobalSummaryScreen;