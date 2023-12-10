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

export const CarsItems = ({ car }) => {
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
    mileage,
    engineSize,
  } = car;

  const cityCountry = address.split(', ').slice(-2);
  console.log('cityCountry', cityCountry);

  return (
    <CarItemStyle>
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
              <DescriptItem>{engineSize}</DescriptItem>
              <DescriptItem>{mileage}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button>Learn more</Button>
    </CarItemStyle>
  );
};
