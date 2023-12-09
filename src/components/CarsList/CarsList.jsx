import { CarsItems } from 'components/CarsItems/CarsItems';
import { UseSelector, useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  console.log('cars in list', cars);
  return (
    <ul>
      {cars?.map(car => (
        <CarsItems car={car} key={car.id} />
      ))}
    </ul>
  );
};
