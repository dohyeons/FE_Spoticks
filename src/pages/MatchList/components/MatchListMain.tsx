import Soccer from "@/assets/soccer.svg?react";
import Baseball from "@/assets/baseball.svg?react";
import Basketball from "@/assets/basketball.svg?react";
import Volleyball from "@/assets/volleyball.svg?react";
import { leagueName } from "@/common/constants";
interface ReservationListProps {
  sceduleLen: number;
  sport: string;
}

const MatchListMain = ({ sceduleLen, sport }: ReservationListProps) => {
  const sportImg: Record<string, React.FunctionComponent<React.SVGAttributes<SVGElement>>> = {
    축구: Soccer,
    야구: Baseball,
    배구: Volleyball,
    농구: Basketball,
  };

  const SportImg = sportImg[sport];

  return (
    <div className="flex w-full justify-center">
      {sceduleLen === 0 ? (
        <div className="flex flex-col items-center justify-center">
          {/*  이미지는 헤더 탭에 따라 변경 될 예정 */}
          <SportImg className="size-30" />
          <div>현재 {sport}는 시즌오프입니다.</div>
          <div>다음 시즌을 기대해주세요!</div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <SportImg className="size-30" />
          <div>{leagueName[sport]} 리그 시즌 경기예매가 오픈되었습니다.</div>
          <div>좌측 메뉴에서 확인해주세요!</div>
        </div>
      )}
    </div>
  );
};

export default MatchListMain;