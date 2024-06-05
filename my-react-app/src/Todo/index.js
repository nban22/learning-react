import { useRef, useReducer } from 'react';
import { addItem, deleteItem, setItem } from './Actions';
import reducer ,{ initState } from './Reducer';
import logger from './logger'


const cssCenterTag = {
  marginTop: '50px',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh'
}

// Lưu các giá trị qua một tham chiếu bên ngoài
// function component

// 1. memo() -> Higer Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props


// useState
// 1. Init State: 0
// 2. Actions: up, down

// useReducer
// 1. Init State: 0
// 2. Actions: up, down
// 3. Reducer
// 4. Dispatch



const Todo = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { item, listItem } = state;
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (item.trim() !== "") {
      dispatch(addItem(item));
      dispatch(setItem(''));
      inputRef.current.focus();
    }
  }
  return (
    <div style={cssCenterTag}>
      <h3>Todo</h3>
      <div>
        <input
          ref={inputRef}
          value={item}
          placeholder='Enter todo...'
          onChange={(e) => dispatch(setItem(e.target.value))}
          onKeyDown={(e) => {if (e.key === 'Enter')  handleSubmit()}}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <ul>
        {listItem.map((item, index) => {
          return (
            <li
              key={index}
            >{item}  <span onClick={() => dispatch(deleteItem(index))}>&times;</span></li>)
        })}
      </ul>
    </div>
  )
}

export default Todo;