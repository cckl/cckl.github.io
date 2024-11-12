import React from 'react';
import Section from '../components/Section.tsx';
import SubHeading from '../components/SubHeading.tsx';
import SplitScreen from '../components/SplitScreen.tsx';
import { Link } from 'react-router-dom';

function Projects() {
    // debugger;
    return (
        <div className="container overflow-y-auto">
            <Section>
                <SplitScreen leftWeight="2/3" rightWeight="1/3">
                    <div className="max-w-1/4 md:max-w-[80vh]">
                        <video
                            alt="demo of eyedropper tool"
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="auto"
                            className="w-[80vh]"
                            poster="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Eyedropper-poster.png"
                        >
                            <source
                                type="video/mp4"
                                src="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Eyedropper.mp4"
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
                    <div className="max-w-1/4 md:max-w-[80vh]">
                        <video
                            alt="demo of waveform tool"
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="auto"
                            className="w-[80vh]"
                            poster="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Audiogram-poster.png"
                        >
                            <source
                                type="video/mp4"
                                src="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Audiogram.mp4"
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
                <SplitScreen leftWeight="2/3" rightWeight="1/3">
                    <div className="max-w-1/4 md:max-w-[80vh]">
                        <video
                            alt="demo of inline text editor"
                            autoPlay
                            playsInline
                            loop
                            muted
                            preload="auto"
                            className="w-[80vh]"
                            poster="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Inline-text-poster.png"
                        >
                            <source
                                type="video/mp4"
                                src="https://github.com/cckl/cckl.github.io/raw/main/src/app/assets/Inline-text.mp4"
                            ></source>
                        </video>
                    </div>
                    <div className="text-lg flex flex-col h-full justify-start">
                        <SubHeading>inline text editor</SubHeading>
                        <p>
                            WYSIWYG canvas text editor that enables user to add
                            and style custom text to projects.
                        </p>
                        <br />
                        <p>
                            Led initial technical investigation to determine
                            which text editor API to utilize. Implemented with
                            Draft.js and HTML Canvas.
                        </p>
                    </div>
                </SplitScreen>
            </Section>
            <Section>
                <div className="mx-auto text-center text-xl mb-8 italic">
                    still in progress—to be continued 🏗️
                </div>
            </Section>
        </div>
    );
}

export default Projects;
