import { useState, memo, useMemo, useRef } from 'react';
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

const App = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [products, setProducts] = useState([])
  // const [total, setTotal] = useState(0);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, {name, price: +price}]);
    setName('');
    setPrice('');

    nameRef.current.focus();
  }

  const total = useMemo(() => products.reduce((result, prod) => result + prod.price, 0), [products])
  
  return (
    <div style={cssCenterTag}>
      <input
        ref={nameRef}
        value={name}
        placeholder='Enter name...'
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <input 
        value={price}
        type='number'
        placeholder='Enter price...'
        onChange={e => setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      <h3>Total: {total}</h3>
      <ul>
        {products.map((product, index) => (
          <li
            key={index}
          > {product.name} - {product.price}</li>
        ))}
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
