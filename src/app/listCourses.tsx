import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from "../components/Header";
import CardCourse from "../components/CardCourse";

import { theme } from "../theme";

import api from '../service/api.json';

export default function ListCourses() {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView
                contentContainerStyle={[styles.content, { paddingBottom: insets.bottom }]}
                showsVerticalScrollIndicator={false}
            >
                {api.courses.map((course, index) => {
                    return (
                        <CardCourse
                            course={course}
                            index={index}
                            key={course.id}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_primary,
    },
    content: {
        padding: 16,
    }
})