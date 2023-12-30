import { style } from '@vanilla-extract/css';

export const appContainer = style({
  fontFamily: 'Arial, sans-serif',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  backgroundColor: '#f8f8f8',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px',
});

export const headerTitle = style({
  display: 'flex',
  fontWeight: 'bold',
  fontSize: '32px',
  color: '#333',
  gap: '12px',
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const inputStyle = style({
  padding: '14px',
  marginRight: '16px',
  flex: '1',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '18px',
  outline: 'none',
  transition: 'border-color 0.3s',
  ':focus': {
    borderColor: '#4caf50',
  },
});

export const btnAdd = style({
  padding: '14px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  transition: 'background-color 0.3s',
  ':disabled': {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  ':hover': {
    backgroundColor: '#45a049',
  },
});

export const sortOrder = style({
  cursor: 'pointer',
});

export const listTask = style({
  padding: '0px',
});

export const btnGroup = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
});

export const allTask = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '24px',
  color: '#333',
});

export const taskName = style({
  display: 'flex',
  fontSize: '18px',
  gap: '12px',
});

export const task = style({
  cursor: 'pointer',
  listStyle: 'none',
  backgroundColor: '#fff',
  padding: '16px',
  marginBottom: '16px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s',
  ':hover': {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
});

export const allClear = style({
  padding: '14px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#d32f2f',
  },
});

export const btnGroupDelete = style({
  display: 'flex',
  gap: '12px',
});
