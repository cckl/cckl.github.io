import React from 'react';
import SplitScreen from '../components/SplitScreen';
import ProfilePic from '../components/ProfilePic';
import SubHeading from '../components/SubHeading';
import Section from '../components/Section';
import DiamondBullet from '../components/DiamondBullet';

function About() {
    return (
        <SplitScreen>
            <div>
                <ProfilePic />
            </div>
            <div className="transition ease-in-out delay-150">
                <Section>
                    <SubHeading>overview</SubHeading>
                    <li className="flex">
                        <DiamondBullet />
                        <span>
                            I'm a software engineer with a proclivity for{' '}
                            <span className="hover:underline">
                                product-focused engineering
                            </span>{' '}
                            and{' '}
                            <span className="hover:italic">
                                delightful user experiences.
                            </span>
                        </span>
                    </li>
                    <li className="flex">
                        <DiamondBullet />
                        <span>
                            I have{' '}
                            <span className="hover:bold">
                                5 years of web development experience
                            </span>{' '}
                            overall, with ~2 years in leadership as a tech lead
                            and engineering manager. As a result, I have a
                            proven track record of methodically delivering
                            complex frontend features that involve investigating
                            and implementing experimental web technologies.
                        </span>
                    </li>
                    <li className="flex">
                        <DiamondBullet />
                        Outside of hard skills, I deeply value open & honest
                        communication, feedback, and collaboration. This informs
                        my leadership style which is a healthy balance of
                        empathy &lt;&gt; challenging directly for personal
                        growth.
                    </li>
                </Section>
                <Section>
                    <SubHeading>experience</SubHeading>
                    <table className="grid">
                        <tr className="flex justify-between">
                            <td className="text-mushroom font-normal">
                                Tech Lead → Engineering Manager @ Kapwing
                            </td>
                            <td className="text-mushroom font-normal">
                                2022-2023
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Most recently, I led the growth of a new pod
                                focused on Team Expansion & Monetization at
                                Kapwing. There, I architected and managed
                                feature work redfining the collaborate video
                                editing experience in our product. This involved
                                everything from A/B growth experiments,
                                data-driven pricing plan refactors, and handling
                                a tricky case of Stripe fraud.
                            </td>
                        </tr>
                        <tr className="flex justify-between pt-4">
                            <td className="text-mushroom font-normal">
                                Full-Stack Software Engineer @ Kapwing
                            </td>
                            <td className="text-mushroom font-normal">
                                2019-2021
                            </td>
                        </tr>
                        <tr>
                            I first joined Kapwing as an Associate Software
                            Engineer and quickly grew to SWE I after 3 months.
                            My experience as a full IC was truly "full-stack" in
                            that I worked on everything from implementing an
                            eyedropper tool, text editor, and waveform generator
                            to architecting a distributed system for parallel
                            video processing that increased our processing speed
                            by 4x. As a result, I had high depth and breadth in
                            my knowledge of our subsystems, positioning me to be
                            an effective mentor for others.
                        </tr>
                        <tr className="flex justify-between pt-4">
                            <td className="text-mushroom font-normal">
                                Volunteer Teaching Assistant @ Code Tenderloin
                            </td>
                            <td className="text-dark-mushroom font-normal">
                                2019-2020
                            </td>
                        </tr>
                        <tr>
                            I deeply value breaking down barriers to tech and
                            inclusivity. At Code Tenderloin, I supported
                            teaching curriculum for biweekly classes with
                            students coming from backgrounds of previous
                            incarceration or homeless. I also presented to the
                            class on basics of web development, JavaScript, data
                            structures, and algorithms.
                        </tr>
                    </table>
                </Section>
            </div>
        </SplitScreen>
    );
}

export default About;
