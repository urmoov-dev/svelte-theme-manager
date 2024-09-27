import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        fontSize?: string;
        padding?: string;
        applyOnBody?: boolean;
        horizontal?: boolean;
        preference?: "light" | "dark" | "system";
        border?: string;
        style?: string;
        backgroundColor?: string;
        colors?: {
            lightBg0?: string;
            lightBg1?: string;
            lightBg2?: string;
            lightTheme1?: string;
            lightTheme2?: string;
            lightTextColor?: string;
            lightTextColor1?: string;
            lightTextColor2?: string;
            lightTextColor3?: string;
            lightLabelLink?: string;
            lightRed?: string;
            lightOrange?: string;
            lightYellow?: string;
            lightGreen?: string;
            lightMint?: string;
            lightTeal?: string;
            lightCyan?: string;
            lightBlue?: string;
            lightIndigo?: string;
            lightPurple?: string;
            lightPink?: string;
            lightBrown?: string;
            lightGray?: string;
            lightGray2?: string;
            lightGray3?: string;
            lightGray4?: string;
            lightGray5?: string;
            lightGray6?: string;
            darkBg0?: string;
            darkBg1?: string;
            darkBg2?: string;
            darkTheme1?: string;
            darkTheme2?: string;
            darkTextColor?: string;
            darkTextColor1?: string;
            darkTextColor2?: string;
            darkTextColor3?: string;
            darkLabelLink?: string;
            darkRed?: string;
            darkOrange?: string;
            darkYellow?: string;
            darkGreen?: string;
            darkMint?: string;
            darkTeal?: string;
            darkCyan?: string;
            darkBlue?: string;
            darkIndigo?: string;
            darkPurple?: string;
            darkPink?: string;
            darkBrown?: string;
            darkGray?: string;
            darkGray2?: string;
            darkGray3?: string;
            darkGray4?: string;
            darkGray5?: string;
            darkGray6?: string;
        };
        propertyNames?: {
            Bg0?: string;
            Bg1?: string;
            Bg2?: string;
            Theme1?: string;
            Theme2?: string;
            TextColor?: string;
            TextColor1?: string;
            TextColor2?: string;
            TextColor3?: string;
            LabelLink?: string;
            Red?: string;
            Orange?: string;
            Yellow?: string;
            Green?: string;
            Mint?: string;
            Teal?: string;
            Cyan?: string;
            Blue?: string;
            Indigo?: string;
            Purple?: string;
            Pink?: string;
            Brown?: string;
            Gray?: string;
            Gray2?: string;
            Gray3?: string;
            Gray4?: string;
            Gray5?: string;
            Gray6?: string;
        };
        customColors?: {
            [key: `light${string}` | `dark${string}`]: string;
        };
        customPropertyNames?: {
            [key: string]: string;
        };
        customOnly?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThemeSwitchProps = typeof __propDef.props;
export type ThemeSwitchEvents = typeof __propDef.events;
export type ThemeSwitchSlots = typeof __propDef.slots;
export default class ThemeSwitch extends SvelteComponentTyped<ThemeSwitchProps, ThemeSwitchEvents, ThemeSwitchSlots> {
}
export {};
