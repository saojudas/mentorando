import { useContext } from 'react';
import { Styles } from 'react-select';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

export function useStyles(error: string | undefined) {
  const { title, colors } = useContext(ThemeContext);

  const customStyles = {
    control: (styles, { isDisabled }) => ({
      ...styles,
      borderRadius: 4,
      padding: '2px 5px',
      border: `2px solid ${colors.primaryLighter} !important`,
      '&:hover': {
        boxShadow: `inset 0 0 1em transparent, 0 0 0.4em ${colors.primary}`,
      },
      '&:focus': {
        color: colors.primary,
        borderColor: colors.primary,
      },
      color: title === 'light' ? colors.black : colors.white,
      borderColor: error !== undefined ? colors.red : colors.primary,
      boxShadow: 'none',
      background: isDisabled
        ? title === 'light'
          ? colors.white
          : shade(0.2, colors.black)
        : colors.white,
      opacity: isDisabled ? 0.4 : 1,
    }),
    singleValue: styles => ({
      ...styles,
      color: title === 'light' ? colors.black : colors.white,
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && colors.primary,
      color: isSelected ? colors.white : colors.black,
    }),
  } as Partial<Styles> | undefined;

  return customStyles;
}
