import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import Logo from '../../components/logo'
import { Ionicons } from '@expo/vector-icons'

export default function Home(){
    return(
        <SafeAreaView style={styles.logoArea}>
            <Logo />
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View>

            </View>
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
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: "#0e0e0e"
    }
})