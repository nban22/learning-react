import {memo} from 'react'

const Temp = ({onIncrease}) => {
    console.log("re-render")
    return (
        <>
        <h2>Hello Anh em f8 </h2>
        <button onClick={onIncrease}>Clickme</button>
        </>
    )
}
export default memo(Temp);