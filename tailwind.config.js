const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                'print' : {'raw' : 'print'}
            }
        },
    },
    plugins: [],
}
