import { useLayoutEffect, useState } from "react";
/**
 * the examples for side effect
 * 
 * 1) Update DOM
 *      -F8 blog title
 * 2) Call API
 * 3) Listen DOM events
 *      -scroll
 *      -resize
 * 4) Cleanup
 *      -remove listener / Unsubscribe
 *      -clear timer
 */

// UseEffect(callback)
// - Gọi Callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// UseEffect(callback, [])
// - Chỉ gọi callback một lần sau khi component mounted
// UseEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi dependency thay đổi
//--------
// 1) Callback luôn được gọi sau khi component mouted
// 2) Cleanuo function luôn được gọi trước khi component unmounted


// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

const Content = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0);
    }, [count])
    
    const handleRun = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div> 
    )
};

export default Content;