import React from 'react';
const imageSrc = require('../headshot.jpg');

function ProfilePic() {
    return (
        <div className="flex shrink justify-center mx-auto">
            <img
                src={String(imageSrc)}
                alt="a pic of me"
                className="max-w-36 max-h-36 md:max-w-full md:max-h-full rounded-full"
            />
        </div>
    );
}

export default ProfilePic;
