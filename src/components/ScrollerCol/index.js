import * as S from "./style";
function ScrollerClo({img1,nameImge1,img2,nameImge2}) {
  return (
    <S.ScrollerCol class="scroller__col">
        <S.ScrollerImage class={`scroller__img scroller__${nameImge1}`} bg = {img1}></S.ScrollerImage>
        <S.ScrollerImage class={`scroller__img scroller__${nameImge2}`} bg = {img2}></S.ScrollerImage>
    </S.ScrollerCol>
  )
}

export default ScrollerClo