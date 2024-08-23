import React from 'react';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import SplitScreen from '../components/SplitScreen';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="container overflow-y-auto">
            <Section>
                <SplitScreen leftWeight="2/3" rightWeight="1/3">
                    <video
                        autoPlay
                        playsInline
                        loop
                        preload="auto"
                        className="w-full"
                    >
                        <source src="https://cdn-useast1.kapwing.com/teams/642b0551e45a0fe25b87dfe9/jobs/66c7e6a266f7dec667ba3dd6/final_66c7e669a684cc4c6215c382_784716.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1724408646&Signature=JTUqKIBVs3SdUmQNoCa89IEucXA99FDSfMebnxZjKBXYIaZjvMdQhRt05gJAs5CnVImhVJZILDOPdZ2d6Pwn6FPKJXZkDNejkJQx%2FfownxKdP19u%2FH6x4gtYtkHWcY52PqFTdZPwPUle1qjeNf4AJE1vNXWYM8FCftdH11sOrCQMW8d0GUGkzZCMBWFVLr7fI%2FB9atl7EqZGE7wWVcBxI0VB8T3i4MtpFgwfck8n3jYBQYcuyqlpqleyxRVvetPkqP1rSzCeBLvnhna6xvEc941TTQlItQvK1ujJ0SkNTSd%2F3qiu3DURe7vQI0YXyK7LVI5oNdJTQCrRmpogMrDYAA%3D%3D#t=0.01"></source>
                    </video>
                    <div className="text-lg flex flex-col h-full justify-start">
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
                    <video
                        autoPlay
                        playsInline
                        loop
                        preload="auto"
                        className="w-full"
                    >
                        <source src="https://cdn-useast1.kapwing.com/teams/642b0551e45a0fe25b87dfe9/jobs/66c7f59e3675430ba5130129/final_66c7f58c1992143baf544c79_434850.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1724409389&Signature=SyPDCjayPrFLz9az7DBkDBVtMoFH2%2FCneuBAGpK2TV%2FgBHmOmv10%2BLJ3XH1UZE8UBvGkPXkaJCKwPBI%2F5QBDBCK%2Fo4T0SKhl8ssaUWerZWPi2Wu%2FfjoJ2%2BKIWeyb62KYSMin9l3hMwRgLXxtkjYCCe8Ot1G9K%2BfFpnVJ7%2FsksoY6ubFSXr8DEb8JNrXP%2BOgdVaKUG8vJCYcVIE19AWHWovoimfw3Y9f1bM%2BlM8AJy5pvKUOHrgHvDvRGDKbC9hFtEXialFfio%2BN%2FYtlj4NT0cwRzr3CqIkGlUADVcRE26PqovtY9Kj8odoJZllkpHrzIvEXjlmTjr2pNH8Dn%2FwtMOg%3D%3D#t=0.01"></source>
                    </video>
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
