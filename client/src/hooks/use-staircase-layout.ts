import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export const useStaircaseLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // ... shared logic if needed
  return { isDesktop };
};
