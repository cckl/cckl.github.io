import React from 'react';
import SplitScreen from '../components/SplitScreen.tsx';
import ProfilePic from '../components/ProfilePic.tsx';
import '../../index.css';
import Heading from '../components/Heading.tsx';

function Home() {
    return (
        <SplitScreen>
            <div>
                <ProfilePic />
            </div>
            <div className="flex flex-col justify-center">
                <div className="typewriter">
                    <Heading>hi, i'm christina ☺</Heading>
                </div>
                <br />
                <p className="text-xl">
                    I'm a full-stack software engineer with 4.5 years of
                    experience building and scaling web applications, including
                    1.5 years as an engineering manager / tech lead.
                </p>
                <br />
                <p className="text-xl">Currently based in San Francisco.</p>
            </div>
        </SplitScreen>
    );
}

export default Home;
