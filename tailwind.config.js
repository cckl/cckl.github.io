/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                anonymousPro: ['Anonymous Pro'],
            },
            maxHeight: {
                '9/10': '20%',
            },
        },
    },
    plugins: [],
};
