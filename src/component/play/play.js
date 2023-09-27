import { Button, StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import React ,{useState} from 'react';
import styles from "./styles";
const play = () => {
  const [currentLetter, setCurrentLetter] = useState('trâu');
  const [currentLanguage, setCurrentLanguage]= useState('vietnamese');
  const [wordList, setWordList] = useState([
    'trâu',
    'bò',
    'chó',
    'mèo',
    'gấu trúc',
  ]);
  const wordtranslate ={
    'trâu': 'buffalo',
    'bò': 'cow',
    'chó': 'dog',
    'mèo': 'cat',
    'gấu trúc': 'panda',
  } // Thêm các chữ cái cần sử dụng vào mảng

  const handleNext = () => {
    const currentIndex =wordList.indexOf(currentLetter);
   
    if (currentIndex < wordList.length - 1) {
      setCurrentLetter(wordList[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex =wordList.indexOf(currentLetter);
    
    if (currentIndex > 0) {
      setCurrentLetter(wordList[currentIndex - 1]);
    }
  };
  const handleRemoveFromDeck = () => {
    const updatedWordList = wordList.filter((word) => word !== currentLetter);
    setWordList(updatedWordList);
    if (updatedWordList.length === 0) {
      setCurrentLetter(null);
    } else if (currentLetter === wordList[wordList.length - 1]) {
      setCurrentLetter(wordList[0]);
    }
  };
  const handleResetDeck = () => {
    setCurrentLetter(wordList[0]); // Đặt lại currentLetter thành từ đầu tiên trong danh sách wordList
  };
  const handletranslate = () => {
    if (currentLanguage === 'english'){
      setCurrentLetter(wordtranslate[currentLetter] || currentLetter);
      setCurrentLanguage('vietnamese');
    } else {
      setCurrentLetter(Object.keys(wordtranslate).find(key => wordtranslate[key] === currentLetter) || currentLetter);
      setCurrentLanguage('english');
    }
  };

  // const toggleLanguage = () => {
  //   handletranslate();
  // };
  return (
    <View style={{flex:1,backgroundColor:"#EFEFF3" }} >
      
      <View  style={{ height: 350, backgroundColor :"#EA4559", marginHorizontal: 20, marginTop: 30, borderRadius: 10}} >
      <TouchableOpacity onPress={handletranslate} style={{ alignItems:"center", justifyContent:"center" }}>
          <Text color="#EA4559" style={{ fontSize: 100, textAlign: "center", color: "#ffffff", marginTop: 70 }}>{currentLetter}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', marginHorizontal: 20, marginTop: 30, alignItems:"center", justifyContent:"space-between"}}>
        <Text style={{paddingVertical:2, borderColor:"#EA4559", }}>
            <Button style={{color: "black", borderWidth: 1}} color="#EA4559" title="Previous" onPress={handlePrevious}></Button>
        </Text>
        <Text style={{paddingVertical:2, borderColor:"#EA4559", }}>
            <Button style={{color: "black", borderWidth: 1}} color="#EA4559" title="Next" onPress={handleNext}></Button>
        </Text>
      </View>
      <TouchableOpacity onPress={handleRemoveFromDeck}>
      <View style={{marginTop:30, marginHorizontal: 20, backgroundColor:"white", borderRadius:5}}>
        <Text style={{padding: 20, alignItems:"center", justifyContent:'center', textAlign:'center', color:"#EA4559", fontSize: 20}}>Remove From Deck</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetDeck}>
      <View  style={{marginTop:10, marginHorizontal: 20, backgroundColor:"white", borderRadius:5}}>
        <Text style={{padding: 20,alignItems:"center", justifyContent:'center', textAlign:'center',color:"#EA4559" , fontSize: 20}}>Reset Deck</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default play

