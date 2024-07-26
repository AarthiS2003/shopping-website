
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const data = [
        "https://media.istockphoto.com/id/1466000525/photo/woman-shopping-denim-jeans-in-a-clothing-store.jpg?s=2048x2048&w=is&k=20&c=0rfHiNAat0OgavfZQzF00MpiYOOxafmnUiKotcfoglg=",
        "https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?s=2048x2048&w=is&k=20&c=8JmacxrlnEXuzKn7td819IzmTKn523BzZx-9ap0mGxs=",
        "https://media.istockphoto.com/id/1492815833/photo/vintage-theatrical-clothes-in-dressing-room.jpg?s=2048x2048&w=is&k=20&c=FlgSOinYt5jT1kioi33LV2ms7yuQXokODrD5Mp_rdz8=",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div>
                  <img src={data[0]} alt='0'/>
                
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src={data[1]} alt='1'/>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <img src={data[2]} alt='2'/>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <img src={data[3]} alt='3'/>
                </div>
            </div>
        </Slide>
    );
};

export default Example;