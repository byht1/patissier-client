import { useState } from 'react';
import { Box } from 'components/global/Box';

import {
  SortingIcon,
  Wrap,
  SortingList,
  SortingItem,
  SortingBtn,
} from './Sorting.styled';
import { sortingParams } from './sortingParams';

export const Sorting = ({ applySortMethod, sortMethod }) => {
  // const [sortMethod, setSortMethod] = useState(sortingParams[0]);

  const handleSortChange = event => {
    const method = event.target.value;
    console.log(method);
    // setSortMethod(method);
    applySortMethod(method);
  };
  console.log(sortMethod);
  return (
    <Box borderRadius={12} width={356}>
      <Wrap>
        <p>{sortMethod}</p>
        <SortingIcon />
      </Wrap>
      <SortingList>
        {sortingParams.map(item => (
          <SortingItem key={item}>
            <SortingBtn
              current={sortMethod === item ? 'true' : 'false'}
              onClick={handleSortChange}
              value={item}
            >
              {item}
            </SortingBtn>
          </SortingItem>
        ))}
      </SortingList>
    </Box>
  );
};
