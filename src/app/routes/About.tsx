import React from 'react';
import { Link } from 'react-router-dom';
import SplitScreen from '../components/SplitScreen.tsx';
import ProfilePic from '../components/ProfilePic.tsx';
import SubHeading from '../components/SubHeading.tsx';
import Section from '../components/Section.tsx';
import DiamondBullet from '../components/StarBullet.tsx';
import Badge from '../components/Badge.tsx';

function About() {
    return (
        <SplitScreen leftWeight="1/4" rightWeight="3/4">
            {/*Left*/}
            <div>
                <ProfilePic />
            </div>

            {/*Right*/}
            <div>
                <Section>
                    <SubHeading>overview</SubHeading>
                    <li className="flex">
                        <DiamondBullet />
                        <p>
                            I'm a software engineer with an affinity for{' '}
                            <span className="hover:underline hover:text-lime-800 transition-all">
                                product-focused engineering
                            </span>{' '}
                            and{' '}
                            <span className="hover:italic hover:text-amber-700 transition-all">
                                delightful user experiences.
                            </span>
                        </p>
                    </li>
                    <li className="flex">
                        <DiamondBullet />
                        <p>
                            I have{' '}
                            <span className="hover:underline decoration-dotted">
                                5 years of web development experience
                            </span>{' '}
                            overall, with{' '}
                            <span className="hover:underline decoration-dotted">
                                {' '}
                                ~2 years in leadership as a tech lead and
                                engineering manager
                            </span>
                            . As a result, I have a proven track record of
                            methodically delivering complex frontend features
                            that involve investigating and implementing{' '}
                            <span className="hover:animate-ping">
                                experimental
                            </span>{' '}
                            web technologies.
                        </p>
                    </li>
                    <li className="flex">
                        <DiamondBullet />
                        <p>
                            Outside of hard skills, I deeply value open & honest
                            communication, feedback, and collaboration. This
                            informs my leadership style which is a healthy
                            balance of empathy &lt;&gt; challenging directly for
                            personal growth.
                        </p>
                    </li>
                </Section>
                <Section>
                    <SubHeading>core skills</SubHeading>
                    <div className="flex justify-between flex-wrap">
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>HTML/CSS</Badge>
                        <Badge>MongoDB</Badge>
                        <Badge>Express</Badge>
                        <Badge>React</Badge>
                        <Badge>Redux</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>Python</Badge>
                        <Badge>Flask</Badge>
                        <Badge>Cypress</Badge>
                        <Badge>Jest</Badge>
                    </div>
                </Section>
                <Section>
                    <SubHeading>experience</SubHeading>
                    <table className="grid">
                        <tbody>
                            <tr>
                                <td className="text-left font-semibold text-dark-mushroom">
                                    Kapwing
                                </td>
                            </tr>
                            <tr className="flex justify-between">
                                <td className="text-mushroom font-normal">
                                    Tech Lead → Engineering Manager
                                </td>
                                <td className="text-mushroom font-normal">
                                    2022-2023
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Most recently, I led the growth of a new pod
                                    focused on Team Expansion & Monetization at{' '}
                                    <Link
                                        className="hover:text-lime-700 underline"
                                        to="https://kapwing.com"
                                        target="_blank"
                                    >
                                        Kapwing
                                    </Link>
                                    . There, I architected and managed feature
                                    work redefining the collaborative video
                                    editing experience in our product. This
                                    involved everything from A/B growth
                                    experiments, data-driven pricing plan
                                    refactors, and handling a tricky case of
                                    Stripe fraud.
                                </td>
                            </tr>
                            <tr className="flex justify-between pt-4">
                                <td className="text-mushroom font-normal">
                                    Full-Stack Software Engineer
                                </td>
                                <td className="text-mushroom font-normal">
                                    2019-2021
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    I first joined Kapwing as an Associate
                                    Software Engineer and quickly grew to SWE I
                                    after 3 months. My experience as a full IC
                                    was truly "full-stack" in that I worked on
                                    everything from implementing an eyedropper
                                    tool, text editor, and waveform generator to
                                    architecting a distributed system for
                                    parallel video processing that increased our
                                    processing speed by 4x. As a result, I had
                                    high depth and breadth in my knowledge of
                                    our subsystems, positioning me to be an
                                    effective mentor for others.
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-6 text-left font-semibold text-dark-mushroom">
                                    Code Tenderloin
                                </td>
                            </tr>
                            <tr className="flex justify-between">
                                <td className="text-mushroom font-normal">
                                    Volunteer Teaching Assistant
                                </td>
                                <td className="text-dark-mushroom font-normal">
                                    2019-2020
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    At{' '}
                                    <Link
                                        className="hover:text-lime-700 underline"
                                        to="https://www.codetenderloin.org/"
                                        target="_blank"
                                    >
                                        Code Tenderloin
                                    </Link>
                                    , I spent extra time outside of work
                                    supporting teaching curriculum for biweekly
                                    coding classes for students from backgrounds
                                    of previous incarceration or homelessness. I
                                    also presented topics to the class on basic
                                    concepts of JavaScript and data structures.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
                <Section>
                    <SubHeading>education</SubHeading>
                    <table className="grid">
                        <tbody>
                            <tr>
                                <td className="text-left font-semibold text-dark-mushroom">
                                    Hackbright Academy
                                </td>
                            </tr>

                            <tr className="flex justify-between">
                                <td className="text-mushroom font-normal">
                                    Full-Stack Software Engineering Program
                                </td>
                                <td className="text-mushroom font-normal">
                                    2019
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left font-semibold text-dark-mushroom pt-4">
                                    The Chinese University of Hong Kong
                                </td>
                            </tr>
                            <tr className="flex justify-between">
                                <td className="text-mushroom font-normal">
                                    Bachelor of Laws (Hons)
                                </td>
                                <td className="text-mushroom font-normal">
                                    2018
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Yup, prior to transitioning to the technical
                                    world, I was on track to become a lawyer!
                                    Despite not practicing in the field after
                                    graduation, the analytical & problem-solving
                                    skills I learned in law school proved to be
                                    extremely transferable to software
                                    engineering.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
            </div>
        </SplitScreen>
    );
}

export default About;
