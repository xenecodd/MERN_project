import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';

const Home = () => {
  const { posts } = useSelector(state => state.posts);
  console.log('homes.jsx', posts)
  return (
    <div className="grid grid-cols-3 ">
      {
        (posts.posts || posts)?.map((post, i) => (
          <HomeCard key={i} post={post} />
        ))
      }
    </div>

  );
}

export default Home;
