import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { ContentProps } from "@/common/types/type";
import axios from "axios";
import SuccessToast from "@/common/utils/successToast";
import ErrorToast from "@/common/components/atoms/ErrorToast";
import confirmAlert from "@/common/utils/confirmAlert";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: ContentProps;
}

export default function DetailModal({ isOpen, onClose, match }: DetailModalProps) {
  const navigate = useNavigate();

  const formatedDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toISOString().replace("T", " ").substring(0, 16);
  };

  const Detail = [
    { 종목: match.sport, 홈팀: match.homeTeam, 티켓오픈: formatedDate(match.timeOnSale) },
    {
      경기시작: formatedDate(match.gameStartTime),
      어웨이팀: match.awayTeam,
      예매마감: formatedDate(match.timeOffSale),
    },
  ];

  const handleDelete = () => {
    confirmAlert({
      title: "경기를 삭제하시겠습니까?",
      confirmButtonText: "삭제",
      functionDispatch: async () => {
        try {
          await axios.delete(`http://spoticks.shop:8080/admin/games/${match.gameId}`);
          SuccessToast({ title: "경기가 삭제되었습니다." });
          navigate("/admin");
          window.location.reload();
        } catch (error) {
          ErrorToast({ text: "경기 삭제 중 오류가 발생하였습니다." });
          console.error("경기 삭제 중 오류 발생:", error);
        }
      },
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="경기 상세 정보"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
      >
        <div className='px-[50px]" flex h-[550px] w-[500px] flex-col items-center justify-center rounded-[10px] bg-background pb-[30px] pt-[50px]'>
          <header className="mb-4 flex w-[450px] flex-row justify-between">
            <h1 className="text-2xl font-bold">경기 상세 정보</h1>
            <button
              onClick={onClose}
              className="right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-borders text-xl text-background hover:text-text-primary"
            >
              x
            </button>
          </header>
          <hr className="mb-4 w-[450px] border-t-2 border-borders" />
          <main className="flex space-x-8">
            <div className="flex flex-col font-bold">
              {Object.entries(Detail[0]).map(([key, value]) => (
                <div className="flex flex-col justify-start" key={key}>
                  <div className="font-semibold text-text-primary opacity-50">{key}:</div>
                  <div className={key === "티켓오픈" ? "text-Accent" : ""}>{value}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col font-bold">
              {Object.entries(Detail[1]).map(([key, value]) => (
                <div className="flex flex-col items-end" key={key}>
                  <div className="font-semibold text-text-primary opacity-50">{key}:</div>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </main>
          <div className="mt-4 flex justify-end space-x-11">
            <button
              onClick={handleDelete}
              className="rounded-lg bg-text-tertiary px-8 py-2 text-background"
            >
              경기 삭제
            </button>
            <Link
              to={`/admin/registration/${match.gameId}`}
              state={{ mode: "edit", existMatch: match }}
              className="rounded-lg bg-Accent px-8 py-2 text-background"
            >
              경기 수정
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
