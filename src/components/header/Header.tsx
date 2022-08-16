import React, { useState } from "react";
import * as S from "./Styles";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  function handleCilck(e: React.ChangeEvent<HTMLAnchorElement>) {
    console.log(123);
    if (e) console.log(12);
  }

  return (
    <div>
      <S.HeaderWrpper>
        <S.BrandLogo />
        <S.MenuList>
          <S.NavigationLink isActive={isActive} onClick={handleCilck}>
            서비스
          </S.NavigationLink>
          <S.NavigationLink
            href="/ko/press"
            onClick={handleCilck}
            isActive={isActive}
          >
            뉴스룸
          </S.NavigationLink>
          <S.NavigationLink
            href="/ko/contact"
            isActive={isActive}
            onClick={handleCilck}
          >
            찾아오는 길
          </S.NavigationLink>
          <S.NavigationLink
            href="https://blog.mathpresso.com/"
            target="_blank"
            rel="noreferrer noopener"
            isActive={isActive}
            onClick={handleCilck}
          >
            블로그
          </S.NavigationLink>
          <S.NavigationLink>
            <S.HeaderCareerImage /> 채용
          </S.NavigationLink>
        </S.MenuList>
        <S.MenuList>
          <S.LanguageSelection>
            <S.LanguageSelectionOption>KOR</S.LanguageSelectionOption>
          </S.LanguageSelection>
        </S.MenuList>
      </S.HeaderWrpper>
    </div>
  );
};

export default Header;
