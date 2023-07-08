// import React from 'react';
// import 'sanitize.css';
// import Slider from '@material-ui/core/Slider';
// import { makeStyles } from '@material-ui/core/styles';

// // // docs:
// // // - https://material-ui.com/api/slider/#css
// // // - https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
// const useStyles = makeStyles(
//   {
//     track: {
//       color: '#8f23b3',
//       height: '3px',
//       borderRadius: '3px',
//     },
//     rail: {
//       opacity: 1,
//       backgroundColor: '#e6e9ea',
//       height: '3px',
//       borderRadius: '3px',
//     },
//     thumb: {
//       color: 'white',
//       width: '1rem',
//       height: '1rem',
//       marginTop: '-6px',
//       border: '2px solid #8f23b3',
//       boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
//       '&$focusVisible,&:hover': {
//         boxShadow: '0 0 0 8px rgba(155, 38, 182, 0.2)',
//       },
//       '&$active': {
//         boxShadow: '0 0 0 14px rgba(155, 38, 182, 0.2)',
//       },
//     },
//     // don't remove the following lines
//     focusVisible: {},
//     active: {},
//   },
//   { name: 'MuiSlider' }
// );

// export const Filters = () => {
//   const [val, setVal] = React.useState({ min: 0, max: 100 });
//   const [val2, setVal2] = React.useState([0, 100]);
//   const classes = useStyles();
//   return (
//     <div className="App" style={{ maxWidth: '100vw', padding: '0 10vw' }}>
//       <p>Ціна</p>
//       <div>
//         <div>
//           <Slider
//             //disabled
//             classes={classes}
//             step={1}
//             min={0}
//             max={2300}
//             value={val2}
//             onChange={(ev, v) => setVal2(v)}
//             onChangeCommitted={(ev, v) => console.log(v)}
//             valueLabelDisplay="off"
//             aria-labelledby="range-slider"
//           />
//           <input
//             type="number"
//             min="0"
//             max="2300"
//             value={val2[0]}
//             onChange={e => setVal2([Number(e.target.value), val2[1]])}
//           />
//           <input
//             type="number"
//             min="0"
//             max="2300"
//             value={val2[1]}
//             onChange={e => {
//               setVal2([val2[0], Number(e.target.value)]);
//               console.log(val2);
//             }}
//             onKeyDown={e => {
//               if (e.target.value >= 2300 && e.key !== 'Backspace') {
//                 e.preventDefault();
//               }
//             }}
//           />
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             margin: '1rem 0',
//             fontWeight: 500,
//             color: '#8f23b3',
//           }}
//         >
//           <div>{`€${val2[0]}`}</div>
//           <div>{`€${val2[1]}`}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// import React, { useState } from 'react';

// export const Filters = () => {
//   const [minValue, setMinValue] = useState(30);
//   const [maxValue, setMaxValue] = useState(50);

//   const handleMinChange = event => {
//     const selectedValue = parseInt(event.target.value);
//     if (selectedValue < maxValue) {
//       setMinValue(selectedValue);
//     }
//   };

//   const handleMaxChange = event => {
//     const selectedValue = parseInt(event.target.value);
//     if (selectedValue > minValue) {
//       setMaxValue(selectedValue);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <input
//         type="range"
//         min={0}
//         max={100}
//         value={minValue}
//         onChange={handleMinChange}
//       />
//       <span style={{ margin: '0 10px' }}>-</span>
//       <input
//         type="range"
//         min={0}
//         max={100}
//         value={maxValue}
//         onChange={handleMaxChange}
//       />
//       <p>
//         Selected range: {minValue} - {maxValue}
//       </p>
//     </div>
//   );
// };
import React from 'react';
import 'sanitize.css';
import { Slider } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
const CustomSlider = styled(Slider)(({ theme }) => ({
  // Стили для трека
  '.MuiSlider-root': {
    backgroundColor: '#FF852D',
    // border: 'none',
  },
  '& .MuiSlider-track': {
    height: '3px',
    borderRadius: '3px',
    backgroundColor: '#FF852D',
    border: 'none',
  },
  // Стили для заполненной части трека
  '& .MuiSlider-rail': {
    height: '3px',
    borderRadius: '3px',
    backgroundColor: '#B5B5B5',
  },
  // Стили для ползунка
  '& .MuiSlider-thumb': {
    width: '16px',
    height: '16px',
    // marginTop: '-6px',
    backgroundColor: '#FFFFFF',
    border: '2px solid #B5B5B5',
    // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
    // '&:hover, &.Mui-focusVisible': {
    //   boxShadow: '0 0 0 8px rgba(155, 38, 182, 0.2)',
    // },
    // '&.Mui-active': {
    //   boxShadow: '0 0 0 14px rgba(155, 38, 182, 0.2)',
    // },
  },
}));
// // docs:
// // - https://material-ui.com/api/slider/#css
// // - https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
// const useStyles = ThemeProvider(
//   {
//     track: {
//       color: '#8f23b3',
//       height: '3px',
//       borderRadius: '3px',
//     },
//     rail: {
//       opacity: 1,
//       backgroundColor: '#e6e9ea',
//       height: '3px',
//       borderRadius: '3px',
//     },
//     thumb: {
//       color: 'white',
//       width: '1rem',
//       height: '1rem',
//       marginTop: '-6px',
//       border: '2px solid #8f23b3',
//       boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
//       '&$focusVisible,&:hover': {
//         boxShadow: '0 0 0 8px rgba(155, 38, 182, 0.2)',
//       },
//       '&$active': {
//         boxShadow: '0 0 0 14px rgba(155, 38, 182, 0.2)',
//       },
//     },
//     // don't remove the following lines
//     focusVisible: {},
//     active: {},
//   },
//   { name: 'MuiSlider' }
// );

// export const Filters = () => {
//   const [val, setVal] = React.useState({ min: 0, max: 100 });
//   const [val2, setVal2] = React.useState([1, 2300]);
//   const getValue = () => {
//     const value = val2[0].startsWith('0') ? val2[0].slice(1) : val2[0];
//     return value;
//   };
//   const handleInputChange = e => {
//     //   setVal2([val2[0], Number(e.target.value)]);
//     let inputValue = Number(e.target.value);
//     // if (inputValue.toString().startsWith('0')) {
//     //   inputValue = parseInt(inputValue, 10);
//     // }
//     if (inputValue > 2300) {
//       inputValue = 2300;
//     }
//     if (inputValue < 1) {
//       inputValue = '';
//     }
//     setVal2([val2[0], inputValue]);
//     console.log(val2[1]);
//   };
//   return (
//     <div className="App" style={{ maxWidth: '100vw', padding: '0 10vw' }}>
//       <p>Ціна</p>
//       <div>
//         <div>
//           <CustomSlider
//             //disabled
//             // classes={classes}
//             step={1}
//             min={1}
//             max={2300}
//             value={val2}
//             onChange={(ev, v) => setVal2(v)}
//             onChangeCommitted={(ev, v) => console.log(v)}
//             valueLabelDisplay="off"
//             aria-labelledby="range-slider"
//           />
//           <input
//             type="number"
//             min="1"
//             max="2300"
//             value={val2[0]}
//             onChange={e => {
//               console.log(e.target.value);
//               const value = e.target.value.startsWith('0')
//                 ? e.target.value.slice(1)
//                 : e.target.value;
//               console.log(value);
//               setVal2([Number(value), val2[1]]);
//               console.log(val2[0]);
//             }}
//           />
//           <input
//             type="number"
//             min="1"
//             max="2300"
//             value={val2[1]}
//             onChange={handleInputChange}
//             // onKeyDown={e => {
//             //   if (e.target.value >= 2300 && e.key !== 'Backspace') {
//             //     e.preventDefault();
//             //   }
//             // }}
//           />
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             margin: '1rem 0',
//             fontWeight: 500,
//             color: '#8f23b3',
//           }}
//         >
//           <div>{`€${val2[0]}`}</div>
//           <div>{`€${val2[1]}`}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Filters = () => {
  const [val, setVal] = React.useState({ min: 0, max: 100 });
  const [val2, setVal2] = React.useState(['1', '2300']);
  const sliderVal = val2.map(Number);

  const handleMinInputChange = e => {
    let value = e.target.value.replace(/\D/g, '');
    if (Number(value) >= Number(val2[1])) {
      value = (Number(val2[1]) - 1).toString();
    }
    // if (value === '') {
    //   value = '1';
    //   console.log(value);
    // }
    setVal2([value, val2[1]]);
  };
  const handleBlur = e => {
    let value = e.target.value.trim();
    if (value === '') {
      value = '1';
      console.log(value);
      e.target.value = value;
    }
    setVal2([value, val2[1]]);
  };

  const handleMaxInputChange = e => {
    let value = e.target.value.replace(/\D/g, '');
    if (Number(value) > 2300) {
      value = '2300';
    }
    if (Number(value) < Number(val2[0])) {
      value = (Number(val2[0]) + 1).toString();
    }
    setVal2([val2[0], value]);
  };

  return (
    <div className="App" style={{ maxWidth: '100vw', padding: '0 10vw' }}>
      <p>Ціна</p>
      <div>
        <div>
          <CustomSlider
            step={1}
            min={1}
            max={2300}
            value={sliderVal}
            onChange={(ev, v) => setVal2(v.map(String))}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
          <input
            type="text"
            value={val2[0]}
            onChange={handleMinInputChange}
            onBlur={handleBlur}
          />
          <input type="text" value={val2[1]} onChange={handleMaxInputChange} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '1rem 0',
            fontWeight: 500,
            color: '#8f23b3',
          }}
        >
          <div>{`€${val2[0]}`}</div>
          <div>{`€${val2[1]}`}</div>
        </div>
      </div>
    </div>
  );
};
