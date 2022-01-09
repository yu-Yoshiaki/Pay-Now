import type { VFC } from "react";
import { ContentsShare } from "src/component/ContentsShare";
import { ServiceName } from "src/lib/serviceName";

export const Footer: VFC = () => {
  return (
    <footer className="flex justify-center items-center w-full text-white bg-black">
      <ContentsShare />
      <div>&copy; 2022 Presented by {ServiceName}</div>
    </footer>
  );
};
