import data from "./imagesData";
import ScrollerClo from "../ScrollerCol";
import {useRef,useEffect,useState} from "react";
import * as S from "./style";

function Scroller() {
    const scrollerElement = useRef(null);
    const scrollerItemsClonedEl = useRef(null);
    const [offset,setOffset] = useState(100);
    const doTransition = () => {
      console.log("Hello world");
          console.log(scrollerItemsClonedEl.current.offsetWidth,scrollerElement.current.scrollLeft)
      if (scrollerItemsClonedEl.current.offsetWidth - scrollerElement.current.scrollLeft <= 0) {
    console.log("Hello world")
  } else {
     scrollerElement.current.scrollLeft = scrollerElement.current.scrollLeft + 100;
    console.log("Hiiiiiiii",scrollerElement.current.scrollLeft)

  }
  requestAnimationFrame(doTransition)
  setOffset(1);

    }

const handelScroll = (e)=>{
  console.log(e,"Hiii")
}
useEffect(()=>{
   window.addEventListener('scroll',handelScroll);
    doTransition();
})
  return (
    <S.Scroller  className="scroller" ref={scrollerElement}>
      <S.ScrollerContent className="scroll__content" ref={scrollerItemsClonedEl}>
      {
       data.map((currentImage,index,data)=>{
        if(index%2 !== 0) return <ScrollerClo img1 = {data[index-1]} nameImge1={`img${index-1}`} img2 = {currentImage} nameImge2={`img${index}`} />
       })
      }
      {
       data.map((currentImage,index,data)=>{
        if(index%2 !== 0) return <ScrollerClo img1 = {currentImage} nameImge1={`img${index-1}`} img2 = {data[index-1]} nameImge2={`img${index}`} />
       })
      }
      {
       data.map((currentImage,index,data)=>{
        if(index%2 !== 0) return <ScrollerClo img1 = {data[index-1]} nameImge1={`img${index-1}`} img2 = {currentImage} nameImge2={`img${index}`} />
       })
      }
      </S.ScrollerContent>
    </S.Scroller>
  )
}

export default Scroller