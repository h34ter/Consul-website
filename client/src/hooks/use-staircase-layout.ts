import { useState } from "react";
import { useMediaQuery } from "./use-media-query";

export const useStaircaseLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // ... shared logic if needed
  return { isDesktop };
};
