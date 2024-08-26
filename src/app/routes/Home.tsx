import React from 'react';
import { Link } from 'react-router-dom';
import SplitScreen from '../components/SplitScreen.tsx';
import ProfilePic from '../components/ProfilePic.tsx';
import '../../index.css';
import Heading from '../components/Heading.tsx';

function Home() {
    return (
        <SplitScreen leftWeight="1/4" rightWeight="3/4">
            <div>
                <ProfilePic />
            </div>
            <div className="flex flex-col justify-center">
                <div className="typewriter">
                    <Heading>hi, i'm christina ☺</Heading>
                </div>
                <br />
                <p className="text:base md:text-xl">
                    I'm a full-stack software engineer with 5 years of
                    experience building and scaling web applications, including
                    ~2 years as an engineering manager / tech lead.
                </p>
                <br />
                <p className="text:base md:text-xl">
                    Currently based in San Francisco.{' '}
                    <span className="text-dark-mushroom">༄</span>
                </p>
                <br />
                <Link
                    className="text:base md:text-xl underline decoration-dotted decoration-1 text-mushroom contrast-more:text-dark-mushroom"
                    aria-label="Contact me"
                    to="/contact"
                >
                    <span className="font-normal">Want to get in touch?</span>
                </Link>
            </div>
        </SplitScreen>
    );
}

export default Home;