import { useState, useEffect, useRef } from "react";

export default function useComponentOpened(initialIsVisible: boolean) {
  const [isOpened, setIsOpened] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  });

  return { ref, isOpened, setIsOpened };
}
