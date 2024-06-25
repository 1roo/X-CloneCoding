import Image from 'next/image';
import x_logo_white from '../../public/x_logo_white.png';
import { FaApple } from 'react-icons/fa';
import Footer from '@/components/footer';

export const metadata = {
  title: 'X. 무슨 일이 일어나고 있나요?',
};

export default function HomePage() {
  return (
    <div className="relative">
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="relative mr-24 h-[269.75px] w-[298.43px]">
          <Image src={x_logo_white} alt="" fill />
        </div>
        <div>
          <div className="py-10">
            <p className="text-[64px] font-bold">지금 일어나고 있는 일</p>
          </div>
          <div>
            <p className="text-[31px] font-bold">지금 가입하세요.</p>
          </div>
          <div className="flex flex-col">
            <button className="my-1 h-[38px] w-[298px] rounded-full bg-white text-black">
              google login
            </button>
            <button className="my-1 flex h-[38px] w-[298px] items-center justify-center rounded-full bg-white text-[15px] font-bold text-black">
              <FaApple size={25} />
              Apple에서 가입하기
            </button>
            <div className="flex w-[298px] items-center">
              <div className="h-px w-5/12 bg-[#536471]" />
              <span className="px-2 text-sm">또는</span>
              <div className="h-px w-5/12 bg-[#536471]" />
            </div>
            <button className="h-[38px] w-[298px] rounded-full bg-[#1d9cf0] text-[15px] font-bold text-white">
              계정 만들기
            </button>
            <div className="h-[38px] w-[298px] text-[11px] text-sm text-[#71767B]">
              <span>가입하시려면 </span>
              <span className="text-[#1D9BF0]">쿠키 사용</span>
              <span>을 포함해</span>
              <span className="text-[#1D9BF0]">이용약관</span>
              <span> 과 </span>
              <span className="text-[#1D9BF0]">개인정보 처리 방침</span>
              <span>에 동의해야 합니다.</span>
            </div>
            <p className="text-[17px]">이미 트위터에 가입하셨나요?</p>
            <button className="h-[38px] w-[298px] rounded-full border border-[#536471] bg-transparent text-[#1d9cf0]">
              로그인
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
