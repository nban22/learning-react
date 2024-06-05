import { useState, memo, useMemo, useRef, useReducer } from 'react';
import Content from './Content'


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

// Init state
const initState = {
  item: '',
  listItem: []
};

// Actions
const SET_ITEM = 'set_item';
const ADD_ITEM = 'add_item';
const DELETE_ITEM = 'delete_item';

const setItem = payload => {
  return {
    type: SET_ITEM,
    payload
  }
}

const addItem = payload => {
  return {
    type: ADD_ITEM,
    payload
  }
}
const deleteItem = payload => {
  return {
    type: DELETE_ITEM,
    payload
  }
}

// Reducer
const reducer = (state, action) => {
  switch (action.type)
  {
    case SET_ITEM:
      return {
        ...state,
        item: action.payload
      }
      case ADD_ITEM:
      return {
        ...state,
        listItem: [...state.listItem, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        listItem: state.listItem.filter((_, index) => index !== action.payload)
      }
    default:
      throw new Error('Action not found');
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
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


const AppUseEffect = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >Toggle</button>
      {isShow && <Content />}
    </div>
  );
};



function AppUseState() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState(JSON.parse(localStorage.getItem('item')) ?? []);
  const handleSubmit = () => {
    if (item.trim() !== "") {
      console.log(listItem);
      setListItem(() => {
        const newList = [...listItem, item];
        const jsonItem = JSON.stringify(newList);
        localStorage.setItem('item', jsonItem)
        return newList;
      });
      setItem("");
    }
  };

  return (
    <div style={cssCenterTag}>
      <div>
        <input
          id='inputtag'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          onClick={handleSubmit}
        >Add</button>
      </div>
      <ul>
        {listItem.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
