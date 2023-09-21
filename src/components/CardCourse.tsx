import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';

import { CourseDTO } from "../dto/CourseDTO";

import { theme } from "../theme";
import { converterMinutes } from "../hooks/converterMinutes";

interface Props {
    course: CourseDTO;
    index: any;
}

export default function CardCourse({ course, index }: Props) {

    function handle() {
        router.push(`/listClasses/${index}`)
    }

    return (
        <TouchableOpacity
            style={[styles.card, theme.shadow]}
            onPress={handle}
        >
            <Image
                style={styles.photo}
                source={{ uri: course.photo }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.details}>Professor: {course.teacher}</Text>
                <Text style={styles.details}>Duração: {converterMinutes(course.duration)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: theme.colors.white,
        marginBottom: 20
    },
    photo: {
        width: '100%',
        height: 150
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.semiBold,
        marginBottom: 10,
    },
    details: {
        fontSize: 14,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray_secondary,
        marginBottom: 5
    }
})