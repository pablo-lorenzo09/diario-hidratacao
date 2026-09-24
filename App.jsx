import { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';

export default function App() {
  const GOAL = 2000; // Meta diária em ml
  const [consumed, setConsumed] = useState(0);

  // Função para acumular a quantidade ingerida

  const handleAddWater = (amount) => {

  };

  const handleReset = () =>{

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'}/>
        <View>
         <Header GOAL={GOAL}/>
         <WaterProgress consumed={2000} goal={GOAL}/>
        </View>
      </SafeAreaView>   
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   header: {
//    justifyContent: 'center',
//   },
// })
// nao ta pegando a centralizaçao