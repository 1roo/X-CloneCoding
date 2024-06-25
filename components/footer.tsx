'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <nav className="fixed bottom-3 left-1/2 w-screen -translate-x-1/2 transform">
      <ul className="flex flex-wrap justify-center text-[13px] text-[#71767B]">
        <li className="break-words pr-4">
          <Link href="/">소개</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">X 앱 다운로드 하기</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">고객센터</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">이용약관</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">개인정보 처리방침</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">쿠키 정책</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">접근성</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">광고 정보</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">블로그</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">채용</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">브랜드 리소스</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">광고</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">마케팅</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">비즈니스용 X</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">개발자</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">디렉터리</Link>
        </li>
        <li className="break-words pr-4">
          <Link href="/">설정</Link>
        </li>
        <li className="break-words pr-4">© 2024 X Corp.</li>
      </ul>
    </nav>
  );
}
