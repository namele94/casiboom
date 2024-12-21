import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BORDER_RADIUS} from '../styles/constants.ts';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Введите имя'),
  email: Yup.string().email('Неверный формат email').required('Введите email'),
  message: Yup.string().required('Введите сообщение'),
  subject: Yup.string().required('Введите тему'),
});

const ContactScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('DrawerScreens', {screen: 'Home'});
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.headerText}>Контакты</Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Номер - + 000 00 000 00 00 "
              placeholderTextColor={COLORS.placeholder}
              value={values.name}
              onChangeText={handleChange('name')}
              editable={false}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Адрес - город, страна"
              placeholderTextColor={COLORS.placeholder}
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={false}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Данные"
              placeholderTextColor={COLORS.placeholder}
              value={values.subject}
              onChangeText={handleChange('subject')}
              editable={false}
            />
            {touched.subject && errors.subject && (
              <Text style={styles.error}>{errors.subject}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Индекс"
              placeholderTextColor={COLORS.placeholder}
              value={values.message}
              onChangeText={handleChange('message')}
              editable={false}
            />
            {touched.message && errors.message && (
              <Text style={styles.error}>{errors.message}</Text>
            )}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
});

export default ContactScreen;
