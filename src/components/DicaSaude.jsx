import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export function DicaSaude() {

   return (
  <View style={styles.screenContainer}>
    <View style={styles.container}>
      <Text style={styles.icone}>💡</Text>
      
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>Dica de Saúde</Text>
        <Text style={styles.descricao}>
          Beber água regularmente melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!
        </Text>
      </View>
    </View>
  </View>
);

}
const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  container: {
    width: '100%',
    backgroundColor: '#F8FAF9', // Fundo claro suave (off-white/esverdeado bem claro)
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    fontSize: 32,
    marginRight: 12,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A5C6D', // Azul escuro / petrôleo
    marginBottom: 4,
  },
  descricao: {
    fontSize: 13,
    color: '#608B97', // Azul acinzentado/suave
    lineHeight: 18,
  },
});