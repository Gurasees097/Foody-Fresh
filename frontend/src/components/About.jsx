import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thiing we're serious about is food.</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem modi consectetur nemo possimus ipsam? Voluptate deleniti, quisquam a officiis aperiam voluptatum culpa labore dignissimos cum perspiciatis similique atque praesentium earum sunt dolor alias molestias ea maiores beatae in, nostrum eaque facilis? Totam cum voluptas repellendus quis ad, rem corporis!</p>
                <Link to={"/"}>
                Explore Menu{" "}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About;