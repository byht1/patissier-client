import { AiOutlineReload } from 'react-icons/ai';

export const getLoadMoreButtonProps = (
  hasNextPage,
  isFetchingNextPage,
  nextPage
) => {
  const buttonLabel = isFetchingNextPage
    ? 'Завантаження...'
    : nextPage
    ? 'Показати ще'
    : 'Ви переглянули всі позиції';
  const buttonIcon = hasNextPage && nextPage && <AiOutlineReload size={25} />;
  // const buttonDisabled = !hasNextPage || !nextPage || isFetchingNextPage;
  const buttonDisabled = isFetchingNextPage;
  return {
    disabled: buttonDisabled,
    children: (
      <>
        {buttonLabel}
        {buttonIcon}
      </>
    ),
  };
};
