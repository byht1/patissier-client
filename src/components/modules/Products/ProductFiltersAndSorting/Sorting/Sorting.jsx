import { Box } from 'components/global/Box';
import { sortingParams } from './sortingParams';

import {
  SortingIcon,
  Wrap,
  SortingList,
  SortingItem,
  SortingBtn,
  SortFilterBox,
} from './Sorting.styled';

export const Sorting = ({ applySortMethod, sortMethod }) => {
  const handleSortChange = event => {
    const method = event.target.value;
    applySortMethod(method);
  };

  return (
    <SortFilterBox borderRadius={12} width={356} position="absolute">
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
    </SortFilterBox>
  );
};
