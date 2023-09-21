import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from "../components/Header";

import { youtube } from "../hooks/videoId";

import { theme } from "../theme";

export default function ViewClass() {
    const insets = useSafeAreaInsets();
    const params = useLocalSearchParams();
    const [id, setId] = useState('');

    useEffect(() => {
        const response = youtube(String(params.video))
        setId(String(response))
    }, [])

    return (
        <View style={styles.container}>
            <Header back title={String(params.title)} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: insets.bottom }}
            >
                <YoutubePlayer
                    height={250}
                    play={true}
                    videoId={id}
                />
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
        flex: 1,
        paddingHorizontal: 16,
    }
})