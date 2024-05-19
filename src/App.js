import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodsList} from "./store/modules/takeaway";
import {useEffect, useState} from "react";
import axios from "axios";



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      fetchData();
  }, [dispatch]);


 const [foodsList, setFoodsList]= useState([])


    const fetchData = async () => {
        const res = await axios.get(" http://localhost:3004/takeaway");
        const {data} = res;
        console.log(data, 'data')
        setFoodsList(data)
        console.log(res, 'res')
    };

  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList?.map(item => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
