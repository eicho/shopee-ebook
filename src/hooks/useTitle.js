import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Shopee Ebook`;
  }, [title]);

  return null;
};
