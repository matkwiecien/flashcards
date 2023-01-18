export const cardGrid = {
  display: 'flex',
  alignItems: 'stretch',
  '& > *': {
    flex: 1,
  },
};

export const centerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const columnLayout = {
  '& > * + *': {
    mt: 2,
  },
};
