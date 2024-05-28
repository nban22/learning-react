function Car(props) {
    return <h2>I am a {props.brand.model}!</h2>;
}

// function Garage() {
//     const carInfo = {name: "Ford", model: "Mustang"};

//     return (
//         <>
//             <h1>Who lives in my garage?</h1>
//             <Car brand={carInfo}></Car>
//         </>
//     )
// }

function Football2() {
    const shoot = () => {
        alert("Great Shot!");
    };
    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}
function Football3() {
    const shoot = (a) => {
        alert(a + ". Great Shot!");
    };
    return (
        <button onClick={() => shoot("Goal")}>Take the shot!</button>
    );
}
function Football() {
    const shoot = (a, b) => {
        alert(b);
    };
    return (
        <button onClick={(event) => shoot("Goal", event)}>Take the shot!</button>
    );
}

function MissedGoal() {
    return <h1>Missed Goal!</h1>;
}

function MadeGoal() {
    return <h1>Made Goal!</h1>;
}

function Goal2(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }else {
        return <MissedGoal />;
    }
    
}
function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
    
}

function Garage(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 && <h2>You have {cars.length} cars in your garage</h2>}
        </>
    )
}

function Car2(props) {
    return <li>I am a {props.brand}</li>
}
function Garage3() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car2 brand={car} />)}
            </ul>
        </>
    )
}
const {useState} = React;

function MyForm2() {
    const [name, setName] = useState("khon vui dau");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`A name was submitted: ' + ${name}`);
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type='text'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                ></input>
                <div>The name just entered: {name}</div>
                <input type='submit' />
            </label>
        </form>
    )
}
function MyForm3() {
    const [inputs, setInputs] = useState({username: '', age: ''});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]:value}));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${inputs.username} is ${inputs.age} years old`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type='text'
                    name='username'
                    value={inputs.username || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your age:
                <input 
                    type='number'
                    name='age'
                    value={  inputs.age || ''}
                    onChange={handleChange}
                />
            </label>
            <input type='submit' />
        </form>
    )
}

function MyForm4() {
    const {useState} = React;
    const [textarea, setTextarea] = useState("The content of textarea goes in the value attribute");
    const handleChange = (event) => {
        setTextarea(event.target.value);
    };
    return (
        <>
        <form>
            <textarea 
                value={textarea} 
                onChange={handleChange}
                style={{width: '100%', height: '150px'}}
                />
        </form>
        <div>The content of textarea: {textarea}</div>
                </>

    );
}

function MyForm5() {
    return (
        <>
            <select>
                <option value="Ford">Ford</option>
                <option value="BMW" selected>BMW</option>
                <option value="Audi">Audi</option>
            </select>
        </>
    );
}

function MyForm6() {
    return (
        <>
            <MyForm2 />
            <MyForm3 />
            <MyForm4 />
            <MyForm5 />
        </>
    );
}

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
        setMyCar(event.target.value);
    }
    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Volvo">Volvo</option>
            </select>
        </form>
    )
}

const {BrowserRouter, Routes, Route} = ReactRouterDOM;

function App() {
    return (
        <BrowserRouter>
            <div>xin chao</div>
            <Routes>
                <Route path='/' element={<Garage cars={['Ford', 'BMW', 'Audi']} />} />
                <Route path='/garage2' element={<Garage3 />} />
                <Route path='/football' element={<Football />} />
                <Route path='/football2' element={<Football2 />} />
                <Route path='/football3' element={<Football3 />} />
                <Route path='/goal' element={<Goal isGoal={true} />} />
                <Route path='/goal2' element={<Goal2 isGoal={true} />} />
                <Route path='/form' element={<MyForm6 />} />
            </Routes>
        </BrowserRouter>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 