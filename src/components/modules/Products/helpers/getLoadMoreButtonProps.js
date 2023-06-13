import { AiOutlineReload } from 'react-icons/ai';

export const getLoadMoreButtonProps = (hasNextPage, isFetchingNextPage) => {
  const buttonLabel = isFetchingNextPage
    ? 'Завантаження...'
    : hasNextPage
    ? 'Показати ще'
    : 'Позицій більше немає';
  const buttonIcon = hasNextPage && <AiOutlineReload size={25} />;
  const buttonDisabled = !hasNextPage || isFetchingNextPage;

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
