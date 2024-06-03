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
    const [imgURL, setImgURL] = useState();
    const [listImg, setListImg] = useState([]);
    const handlePreviewPhoto = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]));
        setImgURL(URL.createObjectURL(e.target.files[0]));
        setListImg(()=> {
            const length = e.target.files.length;
            const listURL = [];
            for (let i = 0; i < length; i++) {
                listURL.push(URL.createObjectURL(e.target.files[i]));
            }
            console.log(listURL);
            return listURL;
        });
    };
    useEffect(() => {
        
        return () => {
            imgURL && URL.revokeObjectURL(imgURL);
            
        }
    }, [imgURL, listImg]);



    return (
        <div>
            <h1>Chọn ảnh của bạn</h1>
            <input
                type="file"
                multiple
                id='inputTag'
                onChange={(e) => handlePreviewPhoto(e)}
            />
            <img
                src={imgURL}
                style={{ width: `calc(100vw - 20px)`, objectFit: "contain" }}

            ></img>
            {listImg.map((img, index) => (
                <img
                    src={img}
                    key={index}
                    style={{ width: `calc(100vw - 20px)`, objectFit: "contain" }}
                ></img>
            ))}
        </div>
    )
};

export default Content;