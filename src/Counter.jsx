import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './redux/counterSlice'


function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count);

  return (
  <>
  <div className="row">
    <div className="col">
      <h1 className='text-center m-4 p-4'>Counter App using Redux</h1>
    <div className='border border-dark m-5 p-5 rounded bg-dark shadow text-center'>
        <h1 style={{fontSize:'100px', color:'white'}}>{count}</h1>
        <div className='d-flex justify-content-evenly'>
            <button onClick={() => dispatch(incrementCounter())} className='btn btn-primary'>Increment</button>
            <button onClick={() => dispatch(decrementCounter())} className='btn btn-danger'>Decrement</button>
            <button onClick={() => dispatch(resetCounter())} className='btn btn-secondary'>Reset</button>
        </div>
    </div>
    </div>
  </div>
  </>
  )
}

export default Counter
