import { UseSelector, useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

export const Filters = () => {
  const cars = useSelector(selectCars);

  const brands = cars?.map(car => car.make);
  console.log('brands', brands);
  const uniqueBrands = brands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );
  console.log('uniqueBrands', uniqueBrands);

  const pricesArray = [];
  for (let index = 30; index < 501; index += 10) {
    pricesArray.push(index);
  }
  console.log('pricesArray', pricesArray);
  return (
    <>
      <form>
        <label>
          Car brand
          <select name="brand">
            <option value="">Please choose car brand</option>
            {uniqueBrands?.map(brand => (
              <option value={brand}>{brand}</option>
            ))}
            <option value="xs">Extra small</option>
            <optiion value="s">Small</optiion>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </label>
        <label>
          Price/ 1 hour
          <select name="price">
            <option value="" defaultValue="Brand">
              To $
            </option>
            {pricesArray?.map(price => (
              <option value={price}>{price}</option>
            ))}
            <option value="xs">Extra small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </label>
        <label>
          Car mileage / km
          <input
            type="number"
            name="mileageFrom"
            placeholder="From"
            min="0"
            step="10"
          />
        </label>
        <input
          type="number"
          name="mileageTo"
          placeholder="To"
          min="10"
          step="10"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
