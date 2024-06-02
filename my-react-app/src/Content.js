import { useEffect, useState } from "react";
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

const Content = () => {
    const [countDown, setCountDown] = useState(800);
    let timer;
    useEffect(() => {

        const timer = setInterval(()=>{
            setCountDown(pre => pre - 1);
        }, 1000);
        return () => clearInterval(timer)
    }, [])
    return (
        <div>
            <h1>countDown Time</h1>
            <h2>{countDown}</h2>
        </div>
    );
};

export default Content;