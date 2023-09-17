import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import{ actionCreators} from '../state/Index'
const Shop = () => {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators ,dispatch );
    
  return (
    <div> 
        <div className="container">
      <h2>Deposit/Withdraw Money</h2>
      <button onClick={()=>{depositMoney(100)}} className="btn btn-primary mx-3">+</button>
      Update Balance
      <button onClick={()=>{withdrawMoney(100)}} className="btn btn-primary mx-3">-</button>
      </div>
    </div>
  )
}

export default Shop
