import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function ActionButtons(funcao) {

    return(
            <View>
                <View>
                    <Text>
                        Adicionar consumo:
                    </Text>
                    <View style={styles.containerBotoes}>
                        <Pressable onPress={funcao} style={styles.botoes}>
                            <Text style={styles.textos}>+200 ml</Text>
                        </Pressable>

                        <Pressable onPress={funcao} style={styles.botoes}>
                            <Text style={styles.textos}>+350 ml</Text>
                        </Pressable>

                        <Pressable onPress={funcao} style={styles.botoes}>
                            <Text style={styles.textos}>+500 ml</Text>
                        </Pressable>
                    </View>
                    
                </View>
                
            </View>
    )
};

const styles = StyleSheet.create({
    containerBotoes: {
        justifyContent: 'center',
        gap: 20,
        flexDirection: 'row',
    },
    botoes: {
        backgroundColor: COLORS.primary,
        padding: 10,
    },
    textos: {
        color: 'white',
    }

});