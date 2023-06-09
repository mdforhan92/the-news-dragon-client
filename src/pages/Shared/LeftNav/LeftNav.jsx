import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftInsights from './LeftInsights';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

useEffect(()=>{
    fetch('https://the-news-dragon-server-mdforhan92.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error))
},[])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-2 '>
            {
                categories.map(category => <p
                    key={category.id}
                >
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                </p>)
            }
            </div>
            <LeftInsights></LeftInsights>
        </div>
    );
};

export default LeftNav;