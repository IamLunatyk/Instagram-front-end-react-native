export const getFontFamily = (baseFont = 'Inter', weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}_28pt-Thin`;
    case '200':
      return `${baseFont}_28pt-Extra-light`;
    case '300':
      return `${baseFont}_28pt-Light`;
    case 'normal':
    case '800':
      return `${baseFont}_28pt-Regular`;
    case '500':
      return `${baseFont}_28pt-Medium`;
    case '600':
      return `${baseFont}_28pt-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}_28pt-Bold`;
    case '800':
      return `${baseFont}_28pt-ExtraBold`;
    case '900':
      return `${baseFont}_28pt-Black`;
    default:
      return `${baseFont}_28pt-Regular`;
  }
};
