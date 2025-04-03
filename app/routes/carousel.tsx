import { useState} from "react";

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const imageUrls = [
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/1.jpg',
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/2.jpg',
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/3.jpg',
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/4.jpg',
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/5.jpg',
        'https://static.minguav.com/images/rc-controller/flysky/fs-st8/6.jpg',
    ];

    const imageCount = imageUrls.length;

    const handleLeftClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex <= 0) {
                return imageCount - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const handleRightClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex >= imageCount - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <>
            <h1>Carousel</h1>


            <div className='flex flex-row gap-5'>


                <div className='flex flex-row'>
                    <Item alt='1' key='1' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/1.jpg'/>
                    <Item alt='2' key='2' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/2.jpg'/>
                    <Item alt='3' key='3' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/3.jpg'/>
                    <Item alt='4' key='4' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/4.jpg'/>
                    <Item alt='5' key='5' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/5.jpg'/>
                    <Item alt='6' key='6' index={index}
                          src='https://static.minguav.com/images/rc-controller/flysky/fs-st8/6.jpg'/>
                </div>


            </div>

            <div className='flex flex-row gap-5 justify-center absolute bottom-0 left-0 w-full'>
                    <button
                        onClick={handleLeftClick}
                        type='button'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Left
                    </button>

                    <button
                        onClick={handleRightClick}
                        type='button'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Right
                    </button>
                </div>

            <p>Index: {index}</p>
        </>
    )
}


function Item({src, alt, key, index}
              : { key: string, src: string, alt: string, index: number }){
    return (
        <div
            key={key}
            className='max-w-full h-auto object-contain '>
            <img
                src={src}
                alt={alt}
                style={{
                    translate: `${-100 * index}%`,
                    transition: "translate 300ms ease-in-out ",
                }}
            />
        </div>
    )
}