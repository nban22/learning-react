
const logger = (reducer) => {
    return (preState, action) => {
        console.group(action.type);
        console.log('Pre state:', preState);
        console.log('Action:', action);
        const newState =  reducer(preState, action);
        console.log('New state:', newState);
        console.groupEnd();

        return newState;
    };
}

export default logger;