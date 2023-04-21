import React from "react";

import * as CSS from "csstype";

import { ResponsiveValue } from "styled-system";
import { ThemeType } from "styled-components";

import { withTheme } from "../../hoc/withTheme";
import { ButtonStyleProps } from "./interface";

import { ButtonStyled } from "./styles";
import { theme } from "../../theme/theme";

interface ButtonProps extends ButtonStyleProps {
  width: string;
  height: string | number;
  backgroundColor?: keyof typeof theme.colors;
  color?: keyof typeof theme.colors;
  borderRadius?: ResponsiveValue<any, ThemeType> | undefined;
  borderWidth?: number | string;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderColor?: keyof typeof theme.colors;
  borderBottomColor?: keyof typeof theme.colors;
  borderTopColor?: keyof typeof theme.colors;
  children: React.ReactNode;
  flexDirection?:
    | ResponsiveValue<CSS.Property.FlexDirection, ThemeType>
    | undefined;
  alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType> | undefined;
  justifyContent?:
    | ResponsiveValue<CSS.Property.JustifyContent, ThemeType>
    | undefined;
  padding?: ResponsiveValue<any, ThemeType> | undefined;
  paddingLeft?: ResponsiveValue<any, ThemeType> | undefined;
  paddingRight?: ResponsiveValue<any, ThemeType> | undefined;
  paddingBottom?: ResponsiveValue<any, ThemeType> | undefined;
  paddingTop?: ResponsiveValue<any, ThemeType> | undefined;
}

const ButtonComponent = ({
  width = "50%",
  height = 40,
  backgroundColor = "neutral_25",
  color = "neutral",
  borderRadius,
  borderWidth,
  borderLeftWidth,
  borderRightWidth,
  borderColor,
  borderBottomColor,
  borderTopColor,
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  testID,
  children,
  style,
  ...props
}: ButtonProps) => {
  const styleProps: ButtonStyleProps = props;

  return (
    <ButtonStyled
      testID={testID}
      {...styleProps}
      style={style}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderLeftWidth={borderLeftWidth}
      borderRightWidth={borderRightWidth}
      borderColor={borderColor}
      borderBottomColor={borderBottomColor}
      borderTopColor={borderTopColor}
      color={color}
      padding={padding}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
    >
      {children}
    </ButtonStyled>
  );
};

export const ButtonWs = withTheme<ButtonProps>(ButtonComponent);
