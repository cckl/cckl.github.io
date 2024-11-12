import React from 'react';
const imageSrc = require('../headshot.jpg');

function ProfilePic() {
    return (
        <div className="flex justify-center mx-auto">
            <img
                src={String(imageSrc)}
                alt="profile pic of christina"
                className="shrink max-w-36 max-h-36 md:max-w-64 md:max-h-64 rounded-full"
            />
        </div>
    );
}

export default ProfilePic;
