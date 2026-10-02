import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function DicaSaude() {

    return (
        <View>
            
            <View style={styles.container}>

                <Text style={styles.icone}>
                    💡
                </Text>
                <View >
                    <Text style={styles.text}>Dica de Saúde</Text>

                    <Text style={styles.containerText}>
                        Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!
                    </Text>
                </View>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        marginTop: 5,
        backgroundColor: 'yellow',
        borderRadius: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',

        justifyContent: 'center',
        height: 300,
    },
    text: {
        textAlignVertical:'center',
    },
    icone: {
        fontSize: 25,
        textAlignVertical:'center',
    },
})