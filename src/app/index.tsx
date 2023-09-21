import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Button from '../components/Button';

import { theme } from '../theme';

export default function Index() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.text}>
                    Assista cursos online.
                </Text>
            </View>
            <Button 
                text='Começar'
                route='listCourses'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '90%',
        maxHeight: 100,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: theme.fonts.semiBold,
        textAlign: 'center'
    }
});
