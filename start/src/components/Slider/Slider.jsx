import React, {useState} from 'react'
import classes from './Slider.module.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpeg'
import img4 from './img4.jpg'

export default function Slider() {
    // const [images, setImages] = useState();
    const images = [img1, img2, img3, img4];
    const [countImg, setCountImg] = useState(1);
    const [disableButton, setDisableButton] = useState(1);

    const leftImg = () => {
      if(countImg > 0){
        const count = countImg - 1;
        setCountImg(count);
        setDisableButton(1)
        if(count === 0){
          setDisableButton(0)
        }
      } else{
        setDisableButton(0)
      }
    }

    const rightImg = () => {
      if(countImg < images.length - 1){
        const count = countImg + 1;
        setCountImg(count);
        setDisableButton(1);
        if(count === images.length - 1){
          setDisableButton(2)
        }
      } else{
        setDisableButton(2)
      }
    }
  return (
    <div className={classes.slider}>
        <button onClick={leftImg} disabled={disableButton === 0 ? true : false} className={classes.backButton}>&lt;</button>
        <img src={images[countImg]} alt="картинка"  className={classes.img}/>
        <button onClick={rightImg} disabled={disableButton === 2 ? true : false} className={classes.forwardButton}>&gt;</button>
        <img src="img1.jpg" alt="fg" />
    </div>
  )
}
//{`./${images[countImg]}.jpg`}
