import {memo} from 'react'

const Temp = ({count}) => {
    console.log("re-render")
    return (
        <h2>Hello Anh em f8 {count}</h2>
    )
}
export default memo(Temp);