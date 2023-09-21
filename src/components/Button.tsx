import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { theme } from "../theme";

interface Props {
    text: string;
    route: string;
}

export default function Button({
    text,
    route
}: Props) {

    function handle() {
        router.push(route)
    }
    return (
        <TouchableOpacity style={styles.button} onPress={handle}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    },
    text: {
        fontSize: 20,
        fontFamily: theme.fonts.bold,
        color: theme.colors.white
    }
})