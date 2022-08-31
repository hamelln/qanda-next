import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import * as S from "./Styles";

const Header = () => {
  const [isActive, setIsActive] = useState(0);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    switch (e.currentTarget.innerText) {
      case "서비스":
        setIsActive(0);
        break;
      case "뉴스룸":
        console.log(123123);
        setIsActive(1);
        break;
      case "찾아오는 길":
        setIsActive(2);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <S.HeaderWrpper>
        <S.BrandLogo />
        <S.MenuList>
          <Link href="/product">
            <S.NavigationLink isActive={isActive === 0} onClick={onClick}>
              서비스
            </S.NavigationLink>
          </Link>
          <Link href="/press">
            <S.NavigationLink onClick={onClick} isActive={isActive === 1}>
              뉴스룸
            </S.NavigationLink>
          </Link>
          <Link href="/contact">
            <S.NavigationLink isActive={isActive === 2} onClick={onClick}>
              찾아오는 길
            </S.NavigationLink>
          </Link>
          <S.NavigationLink
            href="https://blog.mathpresso.com/"
            target="_blank"
            rel="noreferrer noopener"
            onClick={onClick}
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
