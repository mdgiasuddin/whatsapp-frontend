/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [

        // HomePage.jsx
        'py-14 bg-green-500 w-full',
        'flex bg-gray-50 h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]',
        'left w-[30%] bg-gray-200 h-full',
        'rounded-full w-10 h-10 cursor-pointer',
        'flex justify-between items-center p-3',
        'flex items-center space-x-3',
        'space-x-3 text-2xl flex',
        'relative flex justify-center items-center bg-white py-4 px-3',
        'border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2',
        'left-5 top-7 absolute',
        'ml-4 text-3xl',
        'bg-white overflow-y-scroll h-[76.8vh] px-3',
        'w-[70%] flex flex-col items-center justify-center h-full',
        'max-w-[70%] text-center',
        'text-4xl text-gray-600',
        'my-9',
        'w-[70%] relative',
        'header absolute top-0 w-full bg-gray-300',
        'flex justify-between',
        'py-3 space-x-4 flex items-center px-3',
        'w-10 h-10 rounded-full',
        'px-10 h-[85vh] overflow-y-scroll',
        'space-y-1 flex flex-col justify-center mt-20 py-2',

        // ChatCard.jsx
        'flex items-center justify-center py-2 group cursor-pointer',
        'w-[20%]',
        'h-14 w-14 rounded-full',
        'pl-5 w-[80%]',
        'flex justify-between items-center',
        'text-lg',
        'text-sm',
        'flex space-x-2 items-center',
        'text-xs py-1 px-2 text-white bg-green-500 rounded-full',

        // MessageCard.jsx
        'py-2 px-2 rounded-md max-w-[50%] self-start bg-gray-200',
        'py-2 px-2 rounded-md max-w-[50%] self-end bg-green-400',
    ]
}