import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import { styles } from './styles';
import { MyOnix } from '../../assets/MyOnix';

export function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.header}>
              <MyOnix
                width="350"
                height="120"
              />
            </View>

            <View style={styles.content}>
              <TextInput
                placeholder="Código do erro"
                placeholderTextColor="#7B7B7B"
                keyboardType="numeric"
                style={styles.textInput}
                autoCompleteType="off"
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={Keyboard.dismiss}
              >
                <Text style={styles.textButton}>
                  Pesquisar
              </Text>
              </TouchableOpacity>

              <View style={styles.line} />
              <View 
              style={styles.box}
              >
                <Text style={styles.textBox}>
                  Informe o código do erro no campo acima.
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}