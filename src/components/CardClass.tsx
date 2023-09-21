import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

import { ClassDTO } from "../dto/ClassDTO";

import { theme } from "../theme";

interface Props {
    classroom: ClassDTO;
}

export default function CardClass({ classroom }: Props) {

    function handle() {
        router.push({ pathname: "/viewClass", params: classroom })
    }

    return (
        <TouchableOpacity style={[styles.card, theme.shadow]} onPress={handle} >
            <View style={styles.content}>
                <Text style={styles.title}> {classroom.title} </Text>
            </View>
            <AntDesign name="playcircleo" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        backgroundColor: theme.colors.white,
        marginBottom: 20
    },
    content: {
        width: '80%'
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.semiBold,
    }
})