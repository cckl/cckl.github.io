import React from 'react';
import Section from '../components/Section.tsx';
import SubHeading from '../components/SubHeading.tsx';
import SplitScreen from '../components/SplitScreen.tsx';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="container overflow-y-auto">
            <Section>
                <SplitScreen leftWeight="2/3" rightWeight="1/3">
                    <div className="w-full min-w-full">
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="auto"
                            className="w-full"
                        >
                            <source
                                type="video/mp4"
                                src="https://github.com/cckl/cckl.github.io/raw/main/src/app/Eyedropper.mp4"
                            ></source>
                        </video>
                    </div>
                    <div className="w-full text-lg flex flex-col h-full justify-start">
                        <SubHeading>eyedropper tool</SubHeading>
                        <p>
                            Eyedropper color selection tool built to integrate
                            into{' '}
                            <Link
                                className="underline"
                                to="https://www.kapwing.com/studio/editor"
                            >
                                Kapwing's core video editor
                            </Link>{' '}
                            product.
                        </p>
                        <br />
                        <p>
                            Selects colors anywhere within the editor canvas to
                            use with text, image outlines, shapes, and more.
                        </p>
                        <br />
                        <p>Implemented with HTML Canvas API in React.</p>
                    </div>
                </SplitScreen>
            </Section>
            <Section>
                <SplitScreen leftWeight="2/3" rightWeight="1/3">
                    <div className="w-full min-w-full">
                        <video
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="auto"
                            className="w-full"
                        >
                            <source
                                type="video/mp4"
                                src="https://github.com/cckl/cckl.github.io/raw/main/src/app/Audiogram.mp4"
                            ></source>
                        </video>
                    </div>
                    <div className="text-lg flex flex-col h-full justify-start">
                        <SubHeading>audiogram / waveform generator</SubHeading>
                        <p>
                            Enabled visual representations of audio in Kapwing's
                            core editor product. Users can upload an audio or
                            video file and create an animated representation of
                            the audio frequency and amplitude.
                        </p>
                        <br />
                        <p>
                            Implemented with HTML Canvas API, Web Audio API, and
                            requestAnimationFrame on the frontend. Backend built
                            with scipy and Puppeteer.
                        </p>
                        <br />
                        <p>
                            I also co-authored a{' '}
                            <Link
                                className="underline"
                                to="https://www.kapwing.com/blog/how-we-built-it-audiogram/"
                            >
                                blog post
                            </Link>{' '}
                            about how I built this.
                        </p>
                    </div>
                </SplitScreen>
            </Section>
            <Section>
                <div className="mx-auto text-center text-2xl mb-8 italic">
                    to be continued (still under construction)
                </div>
            </Section>
        </div>
    );
}

export default Projects;
