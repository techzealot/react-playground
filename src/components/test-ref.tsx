import { ComponentPropsWithRef } from "react";

const TestRef = ({ ref, ...props }: ComponentPropsWithRef<"button">) => {
  return (
    <button ref={ref} {...props}>
      click
    </button>
  );
};

export default TestRef;
