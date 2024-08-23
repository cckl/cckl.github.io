import React from 'react';
const imageSrc = require('../headshot.jpg');

function ProfilePic() {
    return (
        <img
            src={String(imageSrc)}
            alt="a pic of me"
            className="flex shrink max-w-36 max-h-36 md:max-w-full md:max-h-full mx-auto rounded-full"
        ></img>
    );
}

export default ProfilePic;
