import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const {posts} = useSelector(state => state.posts);
  console.log('home.jsx', posts);

  return (
    <div className="grid grid-cols-3">
      {
        (posts && (posts.posts || posts))?.map((post, i) => (
          <HomeCard key={i} post={post} />
        ))
      }
    </div>
  );
}

export default Home;
