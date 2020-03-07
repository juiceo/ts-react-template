import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteColor } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        primary: PaletteColor;
        secondary: PaletteColor;
    }
}

const primary: PaletteColor = {
    main: '#fcba04',
    light: '#ffec4e',
    dark: '#c48a00',
    contrastText: '#000000'
};

const secondary: PaletteColor = {
    main: '#dbcfb0',
    light: '#ffffe2',
    dark: '#a99e80',
    contrastText: '#000000'
};

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary,
        secondary
    }
});

export default theme;
