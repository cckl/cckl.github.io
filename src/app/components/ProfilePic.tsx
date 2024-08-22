import React from 'react';
const imageSrc = require('../headshot.jpg');

function ProfilePic() {
    return (
        <img
            src={String(imageSrc)}
            alt="a pic of me"
            className="w-1/2 md:w-full md:full mx-auto rounded-full"
        ></img>
    );
}

export default ProfilePic;
