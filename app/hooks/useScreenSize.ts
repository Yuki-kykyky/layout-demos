import { useState, useEffect } from "react";

interface ScreenSize {
  isSmall: boolean; // < 600px
  isMedium: boolean; // >= 600px && < 900px
  isLarge: boolean; // >= 900px
  isXLarge: boolean; // >= 1200px
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isXLarge: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isSmall: width < 600, // sm breakpoint
        isMedium: width >= 600 && width < 900, // between sm and lg
        isLarge: width >= 900 && width < 1200, // lg breakpoint
        isXLarge: width >= 1200, // xlg breakpoint
      });
    };

    // 初始化时执行一次
    handleResize();

    // 添加事件监听
    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
