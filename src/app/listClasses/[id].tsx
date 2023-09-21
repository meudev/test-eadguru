import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from "../../components/Header";

import { theme } from "../../theme";

import api from '../../service/api.json';
import { CourseDTO } from "../../dto/CourseDTO";
import CardClass from "../../components/CardClass";
import { converterMinutes } from "../../hooks/converterMinutes";

export default function ListClasses() {
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();
    const course: CourseDTO = api.courses[id[0]];

    return (
        <View style={styles.container}>
            <Header back title={course.title} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: insets.bottom }}
            >
                <Image
                    style={styles.photo}
                    source={{ uri: course.photo }}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{course.title}</Text>
                    <Text style={styles.details}>Professor: {course.teacher}</Text>
                    <Text style={styles.details}>Duração: {converterMinutes(course.duration)}</Text>
                    <Text style={styles.description}>{course.description}</Text>
                    <Text style={styles.label}>Aulas:</Text>
                    {course.classes.map((classroom, index) => {
                        return (
                            <CardClass key={index} classroom={classroom} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_primary
    },
    content: {
        padding: 16,
    },
    photo: {
        width: '100%',
        height: 150
    },
    title: {
        fontSize: 20,
        paddingBottom: 20,
        fontFamily: theme.fonts.semiBold,
    },
    description: {
        fontSize: 14,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray_secondary,
    },
    details: {
        fontSize: 14,
        fontFamily: theme.fonts.regular,
        color: theme.colors.black,
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        paddingVertical: 20,
        fontFamily: theme.fonts.semiBold,
    }
})