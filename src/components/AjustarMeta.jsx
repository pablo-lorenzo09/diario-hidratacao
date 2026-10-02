import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function AjustarMeta() {

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Ajustar Meta Diária:</Text>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>
                            -250ml
                        </Text>       
                    </Pressable>
                    <Text style={styles.title}>1000 ml</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>
                            +250ml
                        </Text> 
                    </Pressable>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textMain,
    textAlignVertical: 'center',
    },
    subtitle: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 4,
    textAlign: 'center',
    },
    buttonRow: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: COLORS.cardBg,
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.secondary,
        width: 70,
    },
    buttonText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 14,
    },
})