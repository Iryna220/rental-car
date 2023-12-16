import {
  Button,
  CarCard,
  CarItemStyle,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  DescriptionWrap,
  Heart,
  Img,
  ImgWrap,
  Span,
  titleH3,
  TitleWrap,
} from './CarsItems.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from 'redux/favoriteSlice/favoriteSlice';
import { selectFavoriteCars } from 'redux/selectors';
import { ModalWindowWrap } from 'components/ModalWindowWrap/ModalWindowWrap';

export const CarsItems = ({ car, index }) => {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const cityCountry = address?.split(', ').slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some(car => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <CarItemStyle key={id}>
      <CarCard>
        <ImgWrap>
          <Img
            src={
              img ? img : 'https://fakeimg.pl/200x200/cccccc/919191?font=bebas'
            }
            alt={make}
          />

          <Heart>
            <use href={`$`} />
          </Heart>
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <titleH3>
              {make}
              <Span> {model}</Span>, {year}
            </titleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap>
            <DescriptList>
              <DescriptItem>{cityCountry[0]}</DescriptItem>
              <DescriptItem>{cityCountry[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
            </DescriptList>
            <DescriptList>
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem></DescriptItem>
              <DescriptItem></DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button>Learn more</Button>
    </CarItemStyle>
  );
};
