import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCarBrands } from 'redux/selectors';
import { makeComaInMileage } from 'service/serviceFunc';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { filterSet } from 'redux/filter/filterSlice';

export const options = {
  svgSize: '42px',
  position: 'center-center',
  timeout: 5000,
};

export const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectCarBrands);

  const [brand, setBrand] = useState({ value: 'all', label: 'Enter the text' });
  const [toPrice, setToPrice] = useState({ value: 'all', label: '' });
  const [mileageTo, setMileageTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageToWithComa, setMileageToWithComa] = useState('');
  const [mileageFromWithComa, setmileageFromWithComa] = useState('');

  const pricesArray = [{ value: 'all', label: 'All price' }];
  for (let index = 10; index < 501; index += 10) {
    pricesArray.push({ value: index, label: index });
  }

  const onClickSearch = () => {
    if (
      (mileageFrom.length > 0 && mileageTo.length === 0) ||
      (mileageFrom.length === 0 && mileageTo.length > 0)
    ) {
      Report.failure(
        'Failure',
        'Please fill in both search fields by car mileage',
        'Okay',
        options
      );
      return;
    }
    if (
      mileageFrom !== '' &&
      mileageTo !== '' &&
      parseInt(mileageFrom) >= parseInt(mileageTo)
    ) {
      Report.failure(
        'Failure',
        'Mileage "From" must be less than mileage "To"',
        'Okay',
        options
      );
      return;
    }

    const commonFilter = {
      brand: brand.value,
      priceTo: toPrice.value,
      mileage: {
        from: mileageFrom,
        to: mileageTo,
      },
    };
    dispatch(filterSet(commonFilter));
  };
  const handleChange = e => {
    const { value } = e.target;
    const valueWithComa = makeComaInMileage(value);

    switch (e.target.name) {
      case 'mileageFrom':
        setMileageFrom(value);
        setmileageFromWithComa(valueWithComa);
        break;
      case 'mileageTo':
        setMileageTo(value);
        setMileageToWithComa(valueWithComa);
        break;
      default:
        break;
    }
  };

  const onClickResetMileage = inputName => {
    switch (inputName) {
      case 'mileageFrom':
        setMileageFrom('');
        setmileageFromWithComa('');
        break;
      case 'mileageTo':
        setMileageTo('');
        setMileageToWithComa('');
        break;
      default:
        break;
    }
  };

  const onClickResetAll = () => {
    setBrand({ value: 'all', label: 'Enter the text' });
    setToPrice({ value: 'all', label: '' });
    setMileageTo('');
    setMileageFrom('');
    setMileageToWithComa('');
    setmileageFromWithComa('');
    onClickSearch();
  };

  return (
    <>
      <form>
        <label>
          Car brand
          <select></select>
        </label>
        <label>
          Price/ 1 hour
          <select></select>
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
