import { useState, useRef, useEffect } from 'react';
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

const App = () => {
  const [count, setCount] = useState(60);
  const timerId = useRef()
  const preCount = useRef()

  useEffect(() => {
    preCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
  }


  const handleStop = () => {
    clearInterval(timerId.current);
  }

  console.log(count, preCount.current);

  return (
    <div >
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
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
