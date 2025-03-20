
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",  // Add TypeScript files as well
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0B706A',
                secondary: '#FFD601',
                tertiary: '#5B4B3A',
                'primary-light': '#E3F4F3',
                'brand-white': '#FFFFFF',
                'brand-black': '#000000'
            },
        },
    },
    plugins: [],
}
