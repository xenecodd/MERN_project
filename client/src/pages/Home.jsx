import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment, incrementCustom } from '../redux/reducers/counter/counter';
import { getCountry } from '../redux/reducers/country/countrySlice';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counter)
  const {country, loading} = useSelector(state => state.country)

  useEffect(() => {
    dispatch(getCountry())
  }, []) 
  console.log(counter)

  return (
  <div className="home-container"> {/* home-container sınıfını ekledik */}
    <span onClick={() => dispatch(decrement())} className="action-btn">DEC</span> {/* action-btn sınıfını ekledik */}
     <span className="counter">{counter}</span> {/* counter sınıfını ekledik */}
     <span className="country">{country}</span> {/* country sınıfını ekledik */}
     <span className="loading">{loading}</span> {/* loading sınıfını ekledik */}
    <span onClick={() => dispatch(increment())} className="action-btn">INC</span> {/* action-btn sınıfını ekledik */}
    <span onClick={() => dispatch(incrementCustom())} className="action-btn">Custom INC</span> {/* action-btn sınıfını ekledik */}
  </div>
  );
}

export default Home;
