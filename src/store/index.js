import React from 'react';
import axios from 'axios';
import MainStore from './mainStore';


export const stores = {
   main: new MainStore(),
  // payment: new PaymentStoreI();
 };
 
 
 export const storesContext = React.createContext(stores);
export const useStores = () => React.useContext(storesContext); 