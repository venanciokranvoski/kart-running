import React, {useState, useEffect} from 'react'

import { ScrollView,
         View,
         Modal,
         Text,
         SafeAreaView,
         TouchableOpacity,
         TextInput,
         Alert
         } from "react-native"

         import { TextInputMask } from "react-native-masked-text"
         import { Picker } from "@react-native-picker/picker"

         import { SalvaCorrida, UpdateDadosRunning, RemoveCorrida } from '../../../services/Corrida'
      
import styled  from './style';

    export default function Btn_Plus({viewCorrida, pilotoSelecionado,
      setPilotoSelecionado}){

      useEffect(()=> {
        if(pilotoSelecionado.id){
          handleInputsGet()
          setCorridaSelecionada(true)
          setModalVisible(true)
          return
        }
        setCorridaSelecionada(false)
      }, [pilotoSelecionado])       
   


    
    const [modalVisible, setModalVisible] = useState(false);
    const [piloto, setPiloto] = useState('Selecione');
    const [voltas, setVoltas] = useState('');
    const [time, setTime] = useState(''); 
    const [hora, setHora] = useState('');
    const [velocidade, setVelocidade] = useState('');

    const [corridaSelecionada, setCorridaSelecionada] = useState(false)

    
     function handleValidation(){
        if(hora === '' || time === '' || velocidade === '' &&  voltas === ''
           || piloto === ''){
             Alert.alert("Preencha os dados do Kard!")   
             return 
        }else {
          salvar()
        }
    }


    function handleCleanInputs(){
      setHora("");
      setPiloto("F.MASSA");
      setPilotoSelecionado({})
      setTime("");
      setHora("");
      setVelocidade("");
    }



    function handleInputsGet(){
      setHora(pilotoSelecionado.Hora)
      setPiloto(pilotoSelecionado.Piloto)
      setTime(pilotoSelecionado.tempoVolta)
      setVoltas(pilotoSelecionado.voltas)
      setVelocidade(pilotoSelecionado.mediavelocidade)
    }

    async function salvar(){
      const corrida = {
        hora: hora,
        piloto: piloto,
        voltas: voltas,
        time: time,
        velocidade: velocidade,
      }
        await SalvaCorrida(corrida)
        viewCorrida();
        setModalVisible(false);
        handleCleanInputs();
    }
  

    async function update(){
      const corrida = {
        hora: hora,
        piloto: piloto,
        voltas: voltas,
        time: time,
        velocidade: velocidade,
        id: pilotoSelecionado.id
      }
      await UpdateDadosRunning(corrida);
      handleCleanInputs();
      viewCorrida();
      setModalVisible(false)
    }

    async function removePiloto(){
      await RemoveCorrida(pilotoSelecionado);
      setModalVisible(false);
      viewCorrida();
      handleCleanInputs();
    }
    return (
        <> 
        <Modal
           canimationType="slide"
           transparent={true}
           visible={modalVisible}
           onRequestClose={()=> {setModalVisible(false)}}
        > 
        <SafeAreaView style={styled.Container_Father}>
            <ScrollView  showsVerticalScrollIndicator={false}>
            <View  style={styled.style_Modal}>
                <Text style={styled.modalTitulo}>Voltas Kart F1</Text>

                <Text style={styled.txtEspace}>Hora</Text>
                <TextInputMask
                 value={hora}
                 onChangeText={newHora => setHora(newHora)}
                 keyboardType='numeric'
                 type='custom'
                 style={styled.textinput}
                 placeholder="99:99:08.277"
                 options={{
                    mask: '99:99:99.999'
                 }}
                />
                
                <View style={styled.modalPicker}>
                  <Text style={styled.txtEspace}>Escolha o Piloto</Text>
                  <Picker
                  selectedValue={piloto}
                  onValueChange={
                    piloto => setPiloto(piloto)
                  }>
                      <Picker.Item 
                      label="Selecione"
                      value="0"
                    />
                    <Picker.Item 
                      label="F.MASSA"
                      value="F.MASSA"
                    />
                    <Picker.Item 
                      label="R.BARRICHELLO"
                      value="R.BARRICHELLO"
                    />
                    <Picker.Item 
                      label="K.RAIKKONEN"
                      value="K.RAIKKONEN"
                    />
                    <Picker.Item 
                      label="M.WEBBER"
                      value="M.WEBBER"
                    />
                    <Picker.Item 
                      label="F.ALONSO"
                      value="F.ALONSO"
                    />
                  </Picker>
                </View>

                <View style={styled.modalPicker}>
                   <Text style={styled.txtEspace}>Nª.Voltas</Text> 
                <Picker
                  selectedValue={voltas}
                  onValueChange={item => setVoltas(item)}>
                    <Picker.Item 
                      label="1"
                      value="1"
                    />
                    <Picker.Item 
                      label="2"
                      value="2"
                    />
                    <Picker.Item 
                      label="3"
                      value="3"
                    />
                    <Picker.Item 
                      label="4 Ultima Volta"
                      value="4 Ultima Volta"
                    />
                  </Picker>
                </View>

                <Text style={styled.txtEspace}>Tempo Volta</Text>
                <TextInputMask
                 value={time}
                 onChangeText={text => setTime(text)}
                 style={styled.textinput}
                 type="custom"
                 placeholder='1:02.852'
                 keyboardType='numeric'
                 options={{
                    mask: '99:99.999'
                 }} 
                />

                <Text style={styled.txtEspace}>Velocidade média da volta</Text>
                <TextInputMask
                  value={velocidade}
                  onChangeText={newVelocidade => setVelocidade(newVelocidade)}
                  style={styled.textinput}
                  placeholder="44,275" 
                  type='custom'
                  options={{
                    mask: '99,999'
                  }}
                  keyboardType="numeric"
                />                

                <View style={styled.areaBtn}>
                    <TouchableOpacity
                      onPress={()=> 
                        { corridaSelecionada ? update() : handleValidation()}}
                      style={styled.btnSalvar}>
                          <Text style={styled.txtbtn}>Salvar</Text>
                    </TouchableOpacity>
                    { corridaSelecionada 
                        ?
                      <TouchableOpacity
                        onPress={()=> {removePiloto()}}
                        style={styled.BtnDeletar}>
                          <Text style={styled.txtbtn}>
                              Deletar
                          </Text>
                      </TouchableOpacity>
                        : <></>
                    }
                    <TouchableOpacity
                    onPress={()=> setModalVisible(false)}
                    style={styled.BtnSair}>
                        <Text 
                        style={styled.txtbtn}
                        >
                            Sair
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        </Modal>
            <TouchableOpacity 
                onPress={()=> 
                {setModalVisible(true)}}
                style={styled.btnMais}>
                <Text style={styled.txtMemo}>+</Text>
            </TouchableOpacity>
        </>
    )
}