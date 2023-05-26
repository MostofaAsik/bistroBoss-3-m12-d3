import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="background bg-fixed text-white pt-8 mt-20 ">
            <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-36 '>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2023</p>
                    <p className='uppercase'>Where Can I get Some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis magnam temporibus voluptas placeat sint voluptatum itaque doloremque provident autem aspernatur rerum porro, obcaecati aliquid, quia laboriosam unde iusto culpa veniam ipsam illum aliquam. Laborum deleniti officiis non id in dolorum atque, necessitatibus error sequi ab obcaecati fugiat, consequuntur delectus ducimus.</p>


                    <button className="btn btn-outline border-0 border-b-4  ">Order Now</button>


                </div>
            </div>

        </div>
    );
};

export default Featured;