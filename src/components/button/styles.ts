import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { ButtonStyleProps } from "./interface";

import {
  borderColor,
  borderRadius,
  borderWidth,
  backgroundColor,
  color,
  flexbox,
  height,
  letterSpacing,
  margin,
  minHeight,
  minWidth,
  padding,
  shadow,
  space,
  width,
} from "styled-system";

export const ButtonStyled = styled(TouchableOpacity)<ButtonStyleProps>`
  ${width}
  ${height}
  ${backgroundColor}
  ${color}
  ${padding} 
  ${margin} 
  ${minWidth}
  ${minHeight}
  ${borderRadius}
  ${borderWidth}
  ${borderColor}
  ${space}
  ${flexbox}
  ${shadow}
  ${letterSpacing}
`;