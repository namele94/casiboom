import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Product} from '../types';
import ItemView from '../components/ItemView.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {filterData} from '../data/mockData.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';

const HomeScreen = () => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter, headerImage} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ItemView item={item} />;

  const renderFilter = ({item}: {item: string}) => (
    <Filter
      title={item}
      isActive={activeFilter === item}
      onPress={() => setFilter(item)}
    />
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
      <View style={styles.headerImgContainer}>
        <Image source={headerImage} style={{width: '100%', height: 200}} />
      </View>
      <FlatList
        data={filterData}
        renderItem={renderFilter}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const Filter = ({
  title,
  isActive,
  onPress,
}: {
  title: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.filterItemContainer} onPress={onPress}>
      <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.mainBG,
  },
  container: {
    backgroundColor: COLORS.mainBG,
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  filterTextActive: {
    color: COLORS.primary,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    borderColor: COLORS.primary,
    textAlign: 'center',
  },
  filterContainer: {
    height: 100,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  filterItemContainer: {
    paddingHorizontal: width * 0.02,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});

export default observer(HomeScreen);
