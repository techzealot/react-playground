import { ComponentPropsWithRef } from "react";

// ComponentPropsWithRef与ComponentPropsWithoutRef区别是类型声明中是否包含ref属性
// ComponentPropsWithRef与ComponentProps只有语义上的区别，并无实际区别
const TestRef = ({ ref, ...props }: ComponentPropsWithRef<"button">) => {
  return (
    <button ref={ref} {...props}>
      click
    </button>
  );
};

export default TestRef;
