/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#FF6B00', // Example hpe colors as used in Navbar.jsx
                'brand-cyan': '#00F0FF',
                'navy': {
                    900: '#1a1f36',
                    950: '#0f172a',
                },
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
