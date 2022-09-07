import data from "./imagesData";
import ScrollerClo from "../ScrollerCol";
import {useRef} from "react";
import * as S from "./style";

function Scroller() {
//     const currentScroll = useRef(null);
//     console.log(currentScroll.current.offsetWidth,"lkj");
//     const executeScroll = () => {
      
// }
  return (
    <S.Scroller  className="scroller scroll__content">
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
    </S.Scroller>
  )
}

export default Scroller