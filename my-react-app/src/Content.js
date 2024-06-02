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
    const [dimensions, setDimensions] = useState({
        'width': window.innerWidth,
        'height': window.innerHeight,
        'outerWidth': window.outerWidth,
        'outerHeight': window.outerHeight,
    });
    // const [width, setWidth] = useState(window.innerWidth);

    
    useEffect(() => {
        const handleResize = () => {
            setDimensions((pre) => ({...pre, 'width':window.innerWidth}))
            setDimensions((pre) => ({...pre, 'height':window.innerHeight}))
            setDimensions((pre) => ({...pre, 'outerWidth':window.outerWidth}))
            setDimensions((pre) => ({...pre, 'outerHeight':window.outerHeight}))
            
            
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (
        <div>
            <h1>The size of window</h1>
            <h3>innerWidth: {dimensions.width}</h3>
            <h3>innerHeight: {dimensions.height}</h3>
            <h3>outerWidth: {dimensions.outerWidth}</h3>
            <h3>outerHeight: {dimensions.outerHeight}</h3>
        </div>
    );
};

export default Content;