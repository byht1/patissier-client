// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getAllProducts, getProductsByCategory } from 'api/products';
// import { Box } from 'components/global/Box';

// import { SelectedProductItem } from '../SelectedProductItem';
// import { ProductList } from './SelectedProduct.styled';

// export const SelectedProductList = () => {
//   const location = useLocation();
//   const pathname = location.pathname.split('/')[2];
//   const [productList, setProductList] = useState([]);

//   let categoryName = '';

//   switch (pathname) {
//     case 'cakes':
//       categoryName = 'Торти';
//       break;
//     case 'casseroles':
//       categoryName = 'Тістечка';
//       break;
//     case 'biscuits':
//       categoryName = 'Печиво';
//       break;
//     case 'buns':
//       categoryName = 'Випічка';
//       break;
//     case 'pies':
//       categoryName = 'Пироги';
//       break;
//     default:
//       break;
//   }
//   console.log(categoryName);
//   useEffect(() => {
//     async function getProductsList() {
//       try {
//         if (categoryName) {
//           const result = await getProductsByCategory(categoryName, 1, 3);
//           setProductList(result);
//         } else {
//           const result = await getAllProducts(1, 3);
//           setProductList(result);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getProductsList();
//   }, [categoryName]);
//   console.log(productList);

//   return (
//     <Box mt={70}>
//       <ProductList>
//         {productList.map(item => (
//           <SelectedProductItem product={item} key={item._id} />
//         ))}
//       </ProductList>
//       <button>Load more</button>
//     </Box>
//   );
// };

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from 'api/products';
import { Box } from 'components/global/Box';
import { useInfiniteQuery } from '@tanstack/react-query';

import { SelectedProductItem } from '../SelectedProductItem';
import { ProductList } from './SelectedProduct.styled';
import React from 'react';

export const SelectedProductList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  // const getCategoryName = pathname => {
  //   switch (pathname) {
  //     case 'cakes':
  //       return 'Торти';
  //     case 'casseroles':
  //       return 'Тістечка';
  //     case 'biscuits':
  //       return 'Печиво';
  //     case 'buns':
  //       return 'Випічка';
  //     case 'pies':
  //       return 'Пироги';
  //     default:
  //       return '';
  //   }
  // };

  // let categoryName = getCategoryName(pathname);
  let categoryName = '';
  switch (pathname) {
    case 'cakes':
      categoryName = 'Торт';
      break;
    case 'casseroles':
      categoryName = 'Тістечка';
      break;
    case 'biscuits':
      categoryName = 'Печиво';
      break;
    case 'buns':
      categoryName = 'Випічка';
      break;
    case 'pies':
      categoryName = 'Пироги';
      break;
    default:
      categoryName = '';
      break;
  }
  console.log(categoryName);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['products', pathname],
    ({ pageParam = 1 }) => {
      console.log(pathname);
      // return getAllProducts({ page: pageParam });
      if (!pathname) {
        return getAllProducts({ page: pageParam });
      } else {
        return getProductsByCategory({
          category: categoryName,
          page: pageParam,
        });
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        return allPages.length + 1;
      },
    }
  );

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <Box mt={70}>
      <ProductList>
        {data.pages.map((group, i) => {
          console.log(group);
          return (
            <React.Fragment key={i}>
              {group.map(product => (
                <SelectedProductItem product={product} key={product._id} />
              ))}
            </React.Fragment>
          );
        })}
      </ProductList>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>{' '}
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Box>
  );
};
