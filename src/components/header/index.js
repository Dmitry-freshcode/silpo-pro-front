import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {selectSort} from '../../store/features/sortSlice';
import { sagaActions } from '../../saga/sagaActions';

export default function Header() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({ type: sagaActions.FETCH_DATA_SAGA })
      },[])

  return (
    <div>
              <button
          aria-label="Increment value"
          onClick={() => dispatch(selectSort('price'))}
        >
          price
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(selectSort('discount'))}
        >
          discount
        </button>
        <button
          aria-label="add products"
          onClick={() => dispatch(selectSort("slug"))}
        >
          slug
        </button>   
    </div>
  )
}
