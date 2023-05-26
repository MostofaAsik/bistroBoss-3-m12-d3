import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className=''>
            {title && <Cover image={coverImg} title={title}></Cover>}
            <div className='grid grid-cols-2  gap-6  my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className='text-center mb-3'>
                    <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;