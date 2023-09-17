import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import Itemdata from './component/Itemdata';
import Products  from './component/Products';
import ItemMain from './component/ItemMain';
import NewProduct from './component/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'sugar',
      amount: 40,
      date: new Date(2002, 2, 23),
    }, 
    {
      id: 'p2',
      title: 'Biscuit',
      amount: 50,
      date: new Date(2003, 12, 13),
    },
    {
      id: 'p3',
      title: 'Dal',
      amount: 121,
      date: new Date(2005, 7, 18),
    },
    {
      id: 'p4',
      title: 'Pops',
      amount: 10,
      date: new Date(2022, 12, 27),
    },
  ];

  function printProductData(data){
    console.log("I am inside App.js");
    console.log(data);
  }

  return (
    <div>
      <NewProduct pdata={printProductData}></NewProduct>
      <Products items={products} />
    </div>
  );
}

// function App() {
//   const items=[
//     {
//       day :20,
//       month:'jan',
//       year:2020
//     }
//   ]
//   return (
//     <div>
//       {/* <Item name='shop'>I am your first item</Item>
//       <Itemdata day='20' month='jan' year='2003'></Itemdata>

//       <Item name='bulb'>I am ypur Second Item</Item>
//       <Itemdata day='10' month='feb' year='2005'></Itemdata>

//       <Item name='sugar'>This is youe third item</Item>
//       <Itemdata day='25' month='march' year='2003'></Itemdata>

//       <div className='App'>rahul</div> */}
//       <ItemMain item={items}></ItemMain>
//     </div>
//   );
// }

export default App;
// modified by command