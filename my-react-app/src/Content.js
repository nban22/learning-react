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

const lessons = [
    {
        id: 1,
        name: "ReactJS là gì? Tại sao nên học ReactJS?"
    },
    {
        id: 2,
        name: "SPA/MPA là gì?"
    },
    {
        id: 3,
        name: "Arrow function"
    },
]

const Content = () => {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)

        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div> 
    )
};

export default Content;