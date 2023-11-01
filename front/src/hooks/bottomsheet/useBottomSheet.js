import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import usePreviousValue from "./usePreviousValue";

const useBottomSheet = (isOpenExternal, setIsOpenExternal) => {
  const [isOpen, setIsOpen] = useState(isOpenExternal);
  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);

  useEffect(() => {
    setIsOpen(isOpenExternal);
  }, [isOpenExternal]);

  const onDragEnd = (info) => {
    const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpenExternal(false);
    } else {
      controls.start("visible");
      setIsOpenExternal(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

export default useBottomSheet;
