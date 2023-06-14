import { ReactNode } from "react";

const Icon = ({ element }: { element: ReactNode }) => {
  return (
    <div className="flex justify-center items-center hover:text-primary">
      {element}
    </div>
  );
};

export default Icon;
