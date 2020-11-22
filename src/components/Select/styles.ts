import { useContext } from 'react';
import { Styles } from 'react-select';
import { ThemeContext } from 'styled-components';

export function useStyles(error: string | undefined) {
  const { colors } = useContext(ThemeContext);

  const customStyles = {
    control: styles => ({
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
      borderColor: error !== undefined ? colors.red : colors.primary,
      boxShadow: 'none',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && colors.primary,
      color: colors.black,
    }),
  } as Partial<Styles> | undefined;

  return customStyles;
}
