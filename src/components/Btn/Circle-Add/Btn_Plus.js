import React, {useState} from 'react'



import { Container, Texto, Modal} from './style';

export default function Btn_Plus(){
    
    const [modalVisible, setModalVisible] = useState(false)

  
    return (
        <> 
        <Modal
           animationType="slide"
           transparent={true}
           visible={modalVisible}
           onRequestClose={()=> setModalVisible(false)}
        > 
        </Modal>
            <Container>
                <Texto>+</Texto>
            </Container>
        
        </>
    )
}