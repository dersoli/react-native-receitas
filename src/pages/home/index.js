import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Logo from '../../components/logo'

export default function Home(){
    return(
        <SafeAreaView style={styles.logoArea}>
            <Logo />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    }
})