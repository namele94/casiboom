import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BORDER_RADIUS} from '../styles/constants.ts';
import HeaderText from '../components/HeaderText.tsx';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Введите имя'),
  phone: Yup.string().required('Введите телефон'),
  table: Yup.string().required('Введите столик'),
  time: Yup.string().required('Введите время'),
  date: Yup.string().required('Введите дату'),
});

const ReservationScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <HeaderText title={'Бронь'} />

      <Formik
        initialValues={{
          name: '',
          phone: '',
          table: '',
          time: '',
          date: '',
        }}
        validationSchema={ReservationSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Имя"
              placeholderTextColor={COLORS.gray}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Номер телефона"
              placeholderTextColor={COLORS.gray}
              value={values.phone}
              onChangeText={handleChange('phone')}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Столик"
              placeholderTextColor={COLORS.gray}
              value={values.date}
              onChangeText={handleChange('table')}
            />
            {touched.table && errors.table && (
              <Text style={styles.error}>{errors.date}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Время"
              placeholderTextColor={COLORS.gray}
              value={values.date}
              onChangeText={handleChange('time')}
            />
            {touched.time && errors.time && (
              <Text style={styles.error}>{errors.date}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Дата"
              placeholderTextColor={COLORS.gray}
              value={values.date}
              onChangeText={handleChange('date')}
            />
            {touched.date && errors.date && (
              <Text style={styles.error}>{errors.date}</Text>
            )}
          </View>
        )}
      </Formik>
      <View style={styles.buttonContainer}>
        <CustomButton title="Забронировать" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBG,
  },
  title: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  commentInput: {
    textAlignVertical: 'top',
    height: 120,
  },
});

export default ReservationScreen;
