
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [totUomo, setTotUomo] = useState(0);
  const [totComputer, setTotComputer] = useState(0);
  const [vittoria, setVittoria] = useState('In attesa di lancio');
  const [risUomo, setRisUomo] = useState('nd');
  const [risComputer, setRisComputer] = useState('nd');

  const random = () =>  {
    
    let appo1=(Math.floor(Math.random() * 6+1));
    console.log("uomo"+appo1);
    
    let appo2=(Math.floor(Math.random() * 6+1));
    console.log("computer"+appo2);

    if (appo1 < appo2) {
      
      setVittoria('Ha vinto il Computer')
      setRisUomo(appo1);
      setRisComputer(appo2);
      setTotComputer(totComputer+1);
      let appo3= risUomo;
      console.log('uomoappo', appo3);


      console.log("stato uomo"+risUomo);
      console.log("stato computer"+risComputer);
      console.log(vittoria);

    } else if (appo1 > appo2) {
      
        
      setVittoria("Ha vinto l'uomo");
      setRisUomo(appo1);
      setRisComputer(appo2);
      setTotUomo(totUomo+1);
      let appo3= risUomo;
      console.log('uomoappo', appo3);


      console.log("stato uomo"+risUomo);
      console.log("stato computer"+risComputer);
      console.log(vittoria);

    } else if (appo1 === appo2) {
      setVittoria("Parità")
      setRisUomo(appo1);
      setRisComputer(appo2);
      let appo3= risUomo;
      console.log('uomoappo', appo3);
      console.log("stato uomo"+risUomo);
      console.log("stato computer"+risComputer);
      console.log(vittoria);
    }
  }



  return (
    <View style={styles.container}>
      <Text>Dado</Text>
      <View style={styles.lancioContainer}>
        <Text style={styles.text}>Dado Uomo: {risUomo}</Text>
        <Text style={styles.text}>Dado Computer: {risComputer}</Text>
      </View>
      <Button title="Lancia Dado" onPress={random}/>
      <Text>{vittoria}</Text>
      <View style={styles.totaleContainer}>
        <Text style={styles.text}>Totale uomo: {totUomo}</Text>
        <Text style={styles.text}>Totale computer: {totComputer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  totaleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lancioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    padding: 30
  }
});
