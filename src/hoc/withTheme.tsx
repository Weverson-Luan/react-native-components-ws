import React from "react";
import { theme } from "../theme/theme";

export const withTheme = <T extends object>(WrappedComponent: any) => {
  return ({ ...props }: T) => (
    <WrappedComponent theme={theme} {...(props as T)} />
  );
};
