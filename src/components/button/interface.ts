/**
 * IMPORTS
 */

import {TouchableOpacityProps} from "react-native";

import {
    BorderColorProps,
    BorderRadiusProps,
    BorderWidthProps,
    HeightProps,
    WidthProps,
    PaddingProps,
    BackgroundColorProps,
    TextColorProps,
    MarginProps,
    FlexboxProps,
    ShadowProps,
    FlexDirectionProps,
} from "styled-system";

import { theme } from "../../theme/theme";


export interface ButtonStyleProps
    extends TouchableOpacityProps,
    BackgroundColorProps<typeof theme>,
    TextColorProps<typeof theme>,
    PaddingProps<typeof theme>,
    MarginProps<typeof theme>,
    WidthProps<typeof theme>,
    HeightProps<typeof theme>,
    BorderRadiusProps<typeof theme>,
    BorderColorProps<typeof theme>,
    FlexboxProps<typeof theme>,
    ShadowProps<typeof theme>,
    FlexDirectionProps<typeof theme>,
    BorderWidthProps {
    fontSize?: number;
    fontFamily?: keyof typeof theme.fonts;
    letterSpacing?: number;
    boxShadow?: keyof typeof theme.shadows | null
    
}


/**
 * EXPORT
 */