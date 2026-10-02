import { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButtons';
import { AjustarMeta } from './src/components/AjustarMeta';
import { DicaSaude } from './src/components/DicaSaude';



export default function App() {
  const [consumed, setConsumed] = useState(0);
  const [GOAL, setGOAL] = useState(2000);

  // Função para acumular a quantidade ingerida

  const handleAddWater = (amount) => {
    setConsumed(consumed + amount);
  };

  const handleReset = () => {
    setConsumed(0);
  };

  const addGoal = (amount) => {
    setGOAL(Math.max((GOAL + amount), 500))

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View style={styles.container}>
          <Header GOAL={GOAL} />
          <AjustarMeta addGoal={addGoal} GOAL={GOAL}/>
          <WaterProgress consumed={consumed} goal={GOAL} />
          <ActionButtons onAdd={handleAddWater} onReset={handleReset}/>
          <DicaSaude/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});
