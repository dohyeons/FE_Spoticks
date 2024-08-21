import { useState } from "react";
import HomeInfo from "./HomeInfo";
import ReservationList from "./ReservationList";
import ReserveInfo from "./ReserveInfo";
import HomeIcon from '../../assets/homeIcon.svg';
import InfoIcon from '../../assets/infoIcon.svg';
import Heart from '../../assets/Heart.svg';
import ReserveIcon from '../../assets/reserveIcon.svg';
import { Content } from "../../type";

interface DetailProps {
  selectedTeam: string;
  filterData: Content[];
}

export default function MatchListDetail ({ selectedTeam, filterData }: DetailProps) {
  //예매내역, 홈구장안내, 예매설명 메뉴 선택
  const [selectedMenu, setSelectedMenu] = useState('');
  const handleMenuClick = ((menu:string)=>{
    setSelectedMenu(menu);
  })
  
  const MenuList = () => {
    switch(selectedMenu) {
      case '예매 일정':
        return <ReservationList filterData={filterData} />;
      case '홈구장 안내':
        return <HomeInfo />;
      case '예매정보':
        return <ReserveInfo />;
      default:
        return <ReservationList filterData={filterData} />;
    }
  }

  const menuItems = [
    { name: '예매 일정', icon: ReserveIcon },
    { name: '홈구장 안내', icon: HomeIcon },
    { name: '예매정보', icon: InfoIcon },
  ];

  return(
    <div className='w-full'>
      <div className='header flex flex-row w-full items-center'>
        <div className='flex flex-col mr-[100px]'>
          <div className="text-[40px] font-semibold">{selectedTeam}</div>
          <div className="text-[20px] text-text-primary opacity-50 mb-2">경기목록을 확인하고 예매해보세요!</div>
          <div className='flex flex-row'>
            {menuItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={`flex flex-row w-[200px] justify-around items-center cursor-pointer rounded-[10px] mr-2 py-2 ${
                  selectedMenu === item.name ? 'bg-Accent text-foreground' : 'bg-foreground text-text-primary'
                }`}
              >
                <img src={item.icon} alt={`${item.name} Icon`} className="size-3" />
                <div>{item.name}</div>
                {item.name === '예매 일정' && <div>{filterData.length}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border-borders border-[1px] size-10 rounded-[10px] bg-foreground'>
          <img src={Heart} alt="Left Tap Icon" className="size-5" />
          <div className="text-borders text-[15px]">홈팀</div>
        </div>
      </div>
      <div />
      <div className='pt-4'>
        {MenuList()}
      </div>
    </div>
  )
}