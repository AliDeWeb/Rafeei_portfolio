/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            dana: 'dana',
            danaBold: 'danaBold',
            danaMedium: 'danaMedium',
        },
        extend: {},
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
};
