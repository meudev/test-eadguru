import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { theme } from "../theme";

interface Props {
    title?: string;
    back?: boolean;
}

export default function Header({ title = '', back = false }: Props) {
    const insets = useSafeAreaInsets();

    function handleBack() {
        router.back()
    }

    return (
        <View style={[styles.header, theme.shadow, { paddingTop: insets.top }]}>
            {back &&
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
            }
            {title.length > 0 ?
                <Text style={styles.title}>{title}</Text>
                :
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        height: 100,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.white
    },
    logo: {
        width: 140,
        height: 30,
    },
    title: {
        fontSize: 22,
        fontFamily: theme.fonts.semiBold
    }
})