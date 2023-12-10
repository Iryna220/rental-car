import { CarsItems } from 'components/CarsItems/CarsItems';
import { Loader } from 'components/Loader/Loader';
import { Container, Section } from 'pages/Page.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk, getAllCarsThunk, LIMIT } from 'redux/cars/fetchCar';
import { makeNumberFromPrice } from 'service/serviceFunc';
import { selectCars, selectIsLoading } from 'redux/selectors';
import { CarsListStyle, LoadMore } from './CarsList.styled';

export const CarsList = () => {
  const cars = useSelector(selectCars);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  const onClickLoadMore = () => {
    dispatch(getCarsThunk());
    setIsLoadMore(true);
  };
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {cars?.length > 0 && (
          <>
            <CarsListStyle>
              {cars?.map(car => (
                <CarsItems car={car} key={car.id} />
              ))}
            </CarsListStyle>
            <LoadMore
              onClick={onClickLoadMore}
              display={isLoadMore ? 'none' : 'block'}
            >
              Load more
            </LoadMore>
          </>
        )}
      </Container>
    </Section>
  );
};
