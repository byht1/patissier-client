import { Slider } from '@mui/material';
import { styled } from '@mui/system';

export const InputSlider = styled(Slider)(() => ({
  '.MuiSlider-root': {
    backgroundColor: 'var(--accent-bg)',
  },
  '& .MuiSlider-track': {
    height: '3px',
    borderRadius: '3px',
    backgroundColor: 'var(--accent-bg)',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    height: '3px',
    borderRadius: '3px',
    backgroundColor: 'var(--text)',
  },
  '& .MuiSlider-thumb': {
    width: '16px',
    height: '16px',
    backgroundColor: 'var(--white)',
    border: '2px solid var(--text)',
  },
}));
