import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.scss';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from "./components/ShowFullItem";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const [currentItems, setCurrentItems] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3001/items")
    .then((response)=>{
      setItems(response.data)
      chooseCategory("all")
      setCurrentItems(response.data)
    })
    .catch((error)=>{
      console.error("Ошибка при загрузке данных:",error);
    });
},[]);

  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  };

  const addToOrder = (item) => {
    if (!orders.some((el) => el.id === item.id)) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} items={items}/>
      <Categories chooseCategory={chooseCategory} />
      <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder} />
      {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
      <Footer />
    </div>
  );
}
export default App;
