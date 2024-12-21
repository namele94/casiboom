import {makeAutoObservable} from 'mobx';
import {Product} from '../types';
import {products as mockProducts} from '../data/mockData';

interface CartItem extends Product {
  quantity: number;
}

class ProductStore {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: string = 'Мангал';
  cart: CartItem[] = [];
  error: string | null = null;
  selectedItem: Product = {category: '', id: '', image: '', name: '', price: 0};
  headerImage: any = require('../assets/bbq.png');

  constructor() {
    makeAutoObservable(this);
  }

  loadProducts = () => {
    try {
      this.products = mockProducts;
      this.filteredProducts = mockProducts;
    } catch (error: any) {}
  };

  setFilter = (filter: string) => {
    this.activeFilter = filter;
    switch (filter) {
      case 'Мангал': {
        this.headerImage = require('../assets/bbq.png');
        break;
      }
      case 'Салаты, Закуски': {
        this.headerImage = require('../assets/salad.png');
        break;
      }
      case 'Первые блюда': {
        this.headerImage = require('../assets/borsh.png');
        break;
      }
    }
    this.applyFilter();
  };

  setSelectedItem = (item: Product) => {
    this.selectedItem = item;
  };

  private applyFilter = () => {
    if (this.activeFilter === 'Все') {
      this.filteredProducts = mockProducts;
    } else {
      this.filteredProducts = mockProducts.filter(
        product => product.category === this.activeFilter.toLowerCase(),
      );
    }
  };

  handlePlus = (product: Product) => {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cart = [...this.cart];
    } else {
      this.cart.push({...product, quantity: 1});
    }
  };

  handleMinus = (productId: string) => {
    const existingItem = this.cart.find(item => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        this.cart = [...this.cart];
      } else {
        this.removeFromCart(productId);
      }
    }
  };

  removeFromCart = (productId: string) => {
    this.cart = this.cart.filter(item => item.id !== productId);
  };

  clearCart = () => {
    this.cart = [];
  };

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemQuantity = (productId: string): number => {
    const item = this.cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  get totalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

export default ProductStore;
