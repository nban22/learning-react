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
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action')
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={cssCenterTag}>
      <h1>{count}</h1>
      <button onClick={() => {dispatch(DOWN_ACTION)}}>Down</button>   
      <button onClick={() => {dispatch("UP_ACTION")}}>Up</button>   

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
