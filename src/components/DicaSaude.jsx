import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function DicaSaude() {

    return (
        <View>
            <View style={styles.container}>
                <Text>Dica de Saúde</Text>
                <Text>
                    Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:,
    },
    title: {
    
    },
})