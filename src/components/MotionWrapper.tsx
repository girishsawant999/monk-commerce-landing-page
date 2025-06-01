"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React, { JSX } from "react";

type TProps = {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

const MotionWrapper: React.FC<TProps & HTMLMotionProps<any>> = ({
  children,
  as = "div",
  ...rest
}) => {
  const MotionComponent = motion(as);

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;
