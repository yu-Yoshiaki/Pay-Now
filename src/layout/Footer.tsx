import type { VFC } from "react";
import { ServiceName } from "src/lib/serviceName";

export const Footer: VFC = () => {
  return (
    <footer className="py-10 text-center text-white bg-black">
      <div>&copy; 2022 Presented by {ServiceName}</div>
    </footer>
  );
};
