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

const root = ReactDOM.createRoot(document.getElementById('root'));
const cars = ['Ford', 'BMW', 'Audi'];
root.render(<Garage3/>);