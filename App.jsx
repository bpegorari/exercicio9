import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

function App() {
  const initialFeed = [
    { id: 1, vaga: 'Desenvolvedor Back-end', salario: 9800.00, descricao: 'Java ☕ + Spring 🍃', contato: 'ts@recruiter.com' },
    { id: 2, vaga: 'Desenvolvedor Mobile', salario: 9000.00, descricao: 'Kotlin', contato: 'globo@recruiter.com' },
    { id: 3, vaga: 'Desenvolvedor Front-end', salario: 6800.85, descricao: 'ReactJs ⚛️', contato: 'perigoso@recruiter.com' },
    { id: 4, vaga: 'DevOps', salario: 12100.75, descricao: 'Oracle Cloud Infraestructure ☁️', contato: 'fatec@recruiter.com' },
    { id: 5, vaga: 'Scrum Master', salario: 5800.00, descricao: 'Metodologias Ágeis', contato: 'ts@recruiter.com' },
    { id: 6, vaga: 'Estagiário Back-end', salario: 800.00, descricao: 'Java ☕', contato: 'sbt@recruiter.com' },
    { id: 7, vaga: 'Estagiário de Soluções Digitais', salario: 800.00, descricao: 'AWS ☁️', contato: 'sbt@recruiter.com' },
    { id: 8, vaga: 'Estagiário Front-end', salario: 800.00, descricao: 'React ⚛️', contato: 'sbt@recruiter.com' },
    { id: 9, vaga: 'Estagiário Back-end', salario: 800.00, descricao: 'NodeJS', contato: 'sbt@recruiter.com' },
  ];

  const [feed, setFeed] = useState(initialFeed);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> 👨🏽‍💼VAGAS👩🏽‍💼 </Text>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  littleContainer: {
    margin: 10,
    borderWidth: 1,
    padding: 15,
    borderColor: 'blue',
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    fontSize: 24,
  },
});

export default App;

function Pessoa(props) {
  return (
    <View style={styles.littleContainer}>
      <Text> 💼 Vaga #{props.data.id}</Text>
      <Text> Cargo: {props.data.vaga}</Text>
      <Text> 💰Salário: R$ {props.data.salario.toFixed(2)} </Text>
      <Text> Descrição: {props.data.descricao} </Text>
      <Text> 📩Contato: {props.data.contato} </Text>
    </View>
  );
}
