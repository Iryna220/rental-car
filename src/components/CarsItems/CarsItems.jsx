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
  } = cars;

  return (
    <>
      <li key={id}>
        <img
          src={
            img ? img : 'https://fakeimg.pl/200x200/cccccc/919191?font=bebas'
          }
        />
        <div>
          <h3>{make}</h3>
          <p>{model}</p>
        </div>
      </li>
    </>
  );
};
