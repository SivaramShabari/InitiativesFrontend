const colors = require('tailwindcss/colors');
module.exports = {
    purge: [
        'public/index.html',
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
    ],
    theme: {

    },

    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: [
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },

};
