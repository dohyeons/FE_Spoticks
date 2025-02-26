import { useState, useRef, useEffect } from "react";

export default function usePopover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleClickProfile(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.stopPropagation();
    setIsPopoverOpen(!isPopoverOpen);
  }
  const popoverRef = useRef<HTMLDivElement & HTMLUListElement>(null);

  function handleClickOutside() {
    setIsPopoverOpen(false);
  }
  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return { handleClickProfile, popoverRef, isPopoverOpen, setIsPopoverOpen };
}
