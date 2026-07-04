import React from "react";
import styles from "./typography.module.css";

interface PropsTypography {
  type?: "level1" | "level2" | "level3" | "level4";
  decoration?: string;
  padding?: string;
  children?: React.ReactNode;
  textTransform?: any;
}

const PADDING_CLASSES: Record<string, string> = {
  "3px 20px 0px 0px": styles.padContent,
  "5px 20px 0px": styles.padSection,
  "10px": styles.padHobby,
};

const Typography = ({ type = 'level1', children, padding, decoration, textTransform }: Readonly<PropsTypography>) => {
  const padClass = padding ? PADDING_CLASSES[padding] : undefined;

  return (
    <div
      className={[styles[type], padClass].filter(Boolean).join(" ")}
      style={{
        textDecoration: decoration,
        textTransform: textTransform,
        ...(!padClass && padding ? { padding } : {}),
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
