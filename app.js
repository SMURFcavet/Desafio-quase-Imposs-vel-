import { StyleSheet, Text, View, Image, Pressable } from 'react-native'; //aqui importamos os componentes do react-native, existe vários por via das duvidas sempre confira a página oficial deles

export default function App() {
  return (
    //View são como caixas vc coloca seus textos e imagens para ficar mais fácil e organizado
    <View style={estilos.caixa1}>
      <Text style={estilos.texto1}>
        App de Estudos
      </Text>
      <Pressable //o pressable vai deixar sua imagem como um botão ou dar estilo ao seu botão
      onPress={() => {alert("Bem vindo ao melho app de estudos do mundo!!!!")}}
      >
      <Image
      source={require("./imagem.png")} 
      style={estilos.image}
      />
      </Pressable>
      <Text style={estilos.texto2}>Organize provas, tarefas e revisões.</Text>
      <View style={estilos.caixa2}>
      <Text style={estilos.texto3}>Matemática</Text>
      <Text style={estilos.texto4}>Revisar funções para sexta-feira.</Text>
      </View>

      <View style={estilos.caixa3}>
      <Text style={estilos.texto3}>História</Text>
      <Text style={estilos.texto4}>Ler capítulo sobre Revolução Industral.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({//o StyleSheet vai deixar toda a parte de estilizão organizado, ou seja, invés de vc colocar várias estilizações sempre que criar um componente novo basta usar o StyleSheet
  caixa1: {
    flex: 1,
    backgroundColor: '#f2f0ef',
    padding: 8,
  },
  texto1: {
    margin: 25,
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  image: {
  width:50,
  height:50,
  marginLeft: 25,
},
  texto2:{
    margin: 24,
    marginTop:10,
  },
  caixa2:{
    flex: 0.15,
    backgroundColor: 'white',
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    borderRadius:15,
  },
  texto3:{
    paddingLeft:20,
    paddingTop:10,
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
  },
  texto4:{
    margin: 22,
    marginTop:5,
    fontSize:15,
  },
  caixa3:{
    flex: 0.15,
    backgroundColor: 'white',
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    borderRadius:15,
  },
});
//da próxima vez que usar uma ia indiana vc não será supimpa
