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
const tabs = ['posts', 'comments', 'albums', 'photos']

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
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState(tabs[0]);
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
            .then((res) => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
                console.log("scrolling")
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup funtion
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // console.log("unmounting")
        }
    }, [])
    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post, index) => {
                    if (type === 'photos') {
                        return <div>
                            <img key={index} src={post.url} />
                        </div>
                    }
                    else return <li key={index}>{post.title || post.body}</li>
                }
                )}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
};

export default Content;