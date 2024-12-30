import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fontfamily from '../constants/fontfamily'
import Icon, { Icons } from './Icon';
import { useNavigation } from '@react-navigation/native';


export default function CustomHeader({ title, back, onPress, }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {back && (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Icon
                            name={'left'}
                            type={Icons.AntDesign}
                            size={20}
                            color={'white'}
                            style={{ marginRight: '4%', marginTop: 10, }}
                        />
                    </TouchableOpacity>
                )}
                <Text style={styles.txt}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '8%',
        backgroundColor: '#38393b',
        // alignItems: 'center',
        paddingHorizontal: '3%',
        justifyContent: 'space-between',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    txt: {
        color: 'white',
        fontSize: 20,
        fontFamily: fontfamily.Bold,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 14,
    }
})