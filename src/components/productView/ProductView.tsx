import ItemSlider from "./SwiperItem/ItemSlider";
import * as S from "./Styles";
import Slider from "react-slick";
import VietnamSwiper from "./VietnamSwiper/VietnamSwiper";

const ProductView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const describe = "";

  return (
    <S.ProductViewWrapper>
      <S.PageHeadingWrapper>
        <S.PageHeading>
          새로운 교육을 만들어 가는<br></br>콴다의 서비스
        </S.PageHeading>
      </S.PageHeadingWrapper>
      <S.ProductViewSection>
        <S.ProductItem>
          <S.ProductLeftSide>
            <S.ProductLogoImage src="https://mathpresso.com/assets/images/product/product-logo-qanda.svg" />
          </S.ProductLeftSide>
          <S.ProductRightSide>
            <S.ProductCardWrapper>
              <S.ProductCardTitle>
                전 세계 6,000만 학생이 선택한
                <br />
                인공지능 공부앱 콴다
              </S.ProductCardTitle>
              <S.ProductCardDescription>
                전 세계에서 매월 1,300만 명의 학생이 사용하는 AI 학습
                플랫폼입니다. 모르는 문제를 찍으면 5초 안에 풀이를 제공해 주고
                유사 문제, 동영상 풀이, 개념서, 강의까지 제공합니다. 10만여 명의
                명문대 선생님들께 1:1로 질문하고, 커뮤니티에서 친구들과 학습
                정보를 공유할 수 있습니다.
              </S.ProductCardDescription>
              <S.ProductCardAward>
                • 20개국 교육차트 1위 • 센서타워 선정 ‘2021 아시아 태평양
                어워드’ 대한민국 최고의 교육 앱• Google Play 선정 ‘올해의
                자기계발 앱’ 우수상 • App Store 선정 ‘한국이 만들고 세계가
                즐기는 앱’
              </S.ProductCardAward>
              <S.ProductCardLinks>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/google.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>Google Play</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="	https://mathpresso.com/assets/icons/apple.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>App Store</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/web.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>Web</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
              </S.ProductCardLinks>
              <S.ProductCardSwiperContainer>
                <ItemSlider />
              </S.ProductCardSwiperContainer>
            </S.ProductCardWrapper>
          </S.ProductRightSide>
        </S.ProductItem>
        <S.ProductItem>
          <S.ProductLeftSide>
            <S.ProductLogoImage src="https://mathpresso.com/assets/images/product/product-logo-tutor.svg"></S.ProductLogoImage>
          </S.ProductLeftSide>
          <S.ProductRightSide>
            <S.ProductCardWrapper>
              <S.ProductCardTitle>
                나에게 딱 맞는 선생님과 맞춤 과외로 성적 상승
              </S.ProductCardTitle>
              <S.ProductCardDescription>
                콴다과외는 100% 비대면, 1:1 과외 서비스로, 학생의 성적, 목표,
                성향까지 고려한 스마트 매칭을 통해 ‘가장 최적화된 교육’을
                제공합니다.
              </S.ProductCardDescription>
              <S.ProductCardLinks>
                <S.StoreButtonWrapper href="https://tutor.qanda.ai/">
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/web.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>Web</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
              </S.ProductCardLinks>
              <S.ProductCardSwiperContainer>
                <S.SwiperContainer>
                  <S.SwiperWrapper>
                    <S.SwiperItem>
                      <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-tutor-1-1.png"></S.SwiperImg>
                    </S.SwiperItem>
                  </S.SwiperWrapper>
                </S.SwiperContainer>
              </S.ProductCardSwiperContainer>
            </S.ProductCardWrapper>
          </S.ProductRightSide>
        </S.ProductItem>
        <S.ProductItem>
          <S.ProductLeftSide>
            <S.ProductLogoImage src="https://mathpresso.com/assets/images/product/product-logo-study.svg" />
          </S.ProductLeftSide>
          <S.ProductRightSide>
            <S.ProductCardWrapper>
              <S.ProductCardTitle>
                Learn it Your Way - QANDA Study
              </S.ProductCardTitle>
              <S.ProductCardDescription>
                최고의 선생님과 학생을 연결하는 콘텐츠 허브 QANDA STUDY는 베트남
                최고의 선생님, 학원과의 파트너십을 통해 학생의 성장을
                지원합니다. 지금까지 소수만 누릴 수 있었던 양질의 학습 콘텐츠를
                제작하고 유통 체인을 구축함으로써 최대한 많은 학생에게 교육
                기회를 제공하고 있습니다.
              </S.ProductCardDescription>
              <S.ProductCardLinks>
                <S.StoreButtonWrapper href="https://www.facebook.com/QANDASTUDY">
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/facebook.png" />
                  <S.StoreButtonLabel>Web</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
              </S.ProductCardLinks>
              <S.ProductCardSwiperContainer>
                <VietnamSwiper />
              </S.ProductCardSwiperContainer>
            </S.ProductCardWrapper>
          </S.ProductRightSide>
        </S.ProductItem>
      </S.ProductViewSection>
    </S.ProductViewWrapper>
  );
};

export default ProductView;
