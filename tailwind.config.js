/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1560px',
            '3xl': '1600px',
        },
        extend: {
            fontFamily: {
                Gabriela: ['Gabriela'],
                Poppins: ['Poppins'],
            },
            fontSize: {
                xxl: '1.2rem',
            },
            borderRadius: {
                xlg: '115%',
            },
            maxWidth: {
                '14/12': '93rem',
                '13/12': '95rem',
                '12/12': '110rem',
                '11/12': '85.3rem',
                '10/12': '80rem',
                '9/12': '18.1rem',
                '8/12': '85rem',
                '7/12': '100rem',
            },
            colors: {
                'primary-color': '#172C7A',
                'page-color': '#f7faff',
                'gradient-color-first': '#e1eaf0',
                'footer-color-first': '#d1d7fe',
                'gradient-color-second': '#b1bbfc',
                'logo-color': '#1D1D1D',
                'paragraph-color': 'rgba(29, 29, 29, 0.80)',
                'new-code-color': '#7F7F7F',
                'star-color': '#FFD00D',
                'price-color': '#1BAE18',
                'last-price-color': '#BBBBBC',
                'paragraph-color2': '#3F3F3F',
                'Our-Categories-photos': '#f2f6ff',
                'Our-Categories-borders': '#a1afcb',
                'Our-Reviews-box': '#f2f6ff',
                'Our-Thanks-text': '#4C64DC',
                'question-color': '#C5D1E9',
                'footer-text-color': '#575757',
            },
            spacing: {
                128: '32rem',
                127: '28rem',
                126: '20rem',
                125: '13rem',
                124: '17rem',
                100: '94.5rem',
                110: '75rem',
                115: '85rem',
                107: '38rem',
                101: '47.8rem',
                530: '-4.7rem',
                539: '-4.5rem',
                534: '1.95rem',
                533: '1.98rem',
                531: '1.98rem',
                536: '1.97rem',
                513: '1.2rem',
                571: '7.5rem',
                572: '12.5rem',
                573: '7rem',
                560: '80%',
                591: '93%',
                595: '95%',
                593: '93%',
                590: '98%',
                584: '90%',
                580: '95%',
                585: '81%',
                587: '86%',
                586: '82%',
                588: '90%',
                581: '78.5%',
                570: '70%',
                555: '55%',
                556: '55%',
                557: '56%',
                542: '25%',
                523: '58%',
                543: '40%',
                545: '43%',
                544: '52%',
                522: '31.3%',
                524: '35%',
                525: '8%',
                512: '30%',
                511: '12%',
                518: '22%',
                517: '20%',
                501: '-19%',
                502: '-4%',
                500: '1.9rem',
                507: '2.1rem',
                506: '-13%',
            },
        },
    },
    plugins: [],
};