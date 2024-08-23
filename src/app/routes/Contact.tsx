import React from 'react';
import SubHeading from '../components/SubHeading.tsx';
import Section from '../components/Section.tsx';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="container mx-auto py-8 px-8 md:px-16 flex flex-col justify-center content-start items-start text-left">
            <SubHeading>let's connect</SubHeading>
            <div className="text-base md:text-lg">
                <Section>
                    <br />
                    <p>
                        <span className="font-normal text-mushroom underline">
                            Email
                        </span>
                        {': '}
                        isitchristina [at] gmail [dot] com
                    </p>
                    <p className="text-sm md:text-base italic">
                        (You know what to do...unless you are a spammer.)
                    </p>
                </Section>
                <Section>
                    <Link
                        className="font-normal text-mushroom underline"
                        to="https://www.linkedin.com/in/christinaling/"
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                    {' | '}
                    <Link
                        className="font-normal text-mushroom underline"
                        to="https://github.com/cckl/"
                        target="_blank"
                    >
                        Github
                    </Link>
                </Section>
            </div>
        </div>
    );
}

export default Contact;