import { LuUserCircle } from "react-icons/lu";
import usePopover from "@/hooks/usePopover";
import UserInfoPopup from "@/common/components/Layout/Header/UserInfoPopup";

export default function UserButton() {
  const { handleClickProfile, popoverRef, isPopoverOpen, setIsPopoverOpen } = usePopover();

  return (
    <div className="relative flex">
      <button onClick={handleClickProfile}>
        <LuUserCircle className="size-5" />
      </button>
      {isPopoverOpen && (
        <UserInfoPopup setIsPopoverOpen={setIsPopoverOpen} popoverRef={popoverRef} />
      )}
    </div>
  );
}
