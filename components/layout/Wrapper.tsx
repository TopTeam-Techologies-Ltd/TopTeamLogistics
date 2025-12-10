import React from "react";
import { cn } from "@/lib/utils";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("w-[80%] mx-auto", className)} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
