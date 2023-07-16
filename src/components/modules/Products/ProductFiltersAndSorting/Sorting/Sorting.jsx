import { sortingParams } from './sortingParams';

import {
  SortingIconOpen,
  Wrap,
  SortingList,
  SortingItem,
  SortingBtn,
} from './Sorting.styled';

export const Sorting = ({ applySortMethod, sortMethod }) => {
  const handleSortChange = event => {
    const method = event.target.value;
    applySortMethod(method);
  };

  return (
    <>
      <Wrap>
        <p>{sortMethod}</p>
        <SortingIconOpen />
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
    </>
  );
};
