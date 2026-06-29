/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html", // 현재 폴더의 모든 html 파일 감지
        "./src/**/*.{html,js}", // 혹시 src 폴더가 있다면 그 안의 파일도 감지
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
