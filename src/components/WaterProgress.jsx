import { View, Text } from 'react-native';

export function WaterProgress({consumed, goal}) {

    const porcentagem = Math.min(((consumed / goal)* 100), 100)

    return(
            <View>
                <Text> Você bebeu {consumed}ml de água hoje.</Text>
                <Text>Você atingiu {porcentagem}% da meta diária</Text>
            </View>
    )
};