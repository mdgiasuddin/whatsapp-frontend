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
        'flex bg-amber-100 h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]',
        'left w-[30%] bg-gray-200 h-full',
        'rounded-full w-10 h-10 cursor-pointer',
        'flex justify-between items-center p-3',
        'flex items-center space-x-3',
        'space-x-3 text-2xl flex',
        'relative flex justify-center items-center bg-white py-4 px-3',
        'border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2',
        'left-5 top-7 absolute',
        'ml-4 text-3xl',
        'bg-white overflow-y-scroll h-[72vh] px-3',
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
        'footer bg-gray-200 absolute bottom-0 w-full py-3 text-2xl',
        'flex justify-between items-center px-5 relative',
        'cursor-pointer',
        'py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]',

        // profile.jsx
        'w-full h-full',
        'flex items-center space-x-10 bg-green-900 text-white pt-16 px-10 pb-5',
        'cursor-pointer text-2xl font-bold',
        'cursor-pointer font-semibold',
        'flex flex-col justify-center items-center my-12',
        'rounded-full w-[15vw] h-[15vh] cursor-pointer',
        'hidden',
        'bg-white px-3',
        'py-3',
        'w-full flex justify-between items-center',
        'py-3',
        'cursor-pointer',
        'w-full flex justify-between items-center py-2',
        'w-[80%] outline-none border-b-2 border-blue-700 p-2',
        'cursor-pointer text-2xl',
        'px-3 my-5',
        'py-10',

        // chatCard.jsx
        'flex items-center justify-center py-2 group cursor-pointer',
        'w-[20%]',
        'h-14 w-14 rounded-full',
        'pl-5 w-[80%]',
        'flex justify-between items-center',
        'text-lg',
        'text-sm',
        'flex space-x-2 items-center',
        'text-xs py-1 px-2 text-white bg-green-500 rounded-full',

        // messageCard.jsx
        'py-2 px-2 rounded-md max-w-[50%] self-start bg-white',
        'py-2 px-2 rounded-md max-w-[50%] self-end bg-green-400',

        // status.jsx
        'flex items-center px-[14vw] py-[7vh]',
        'left h-[85vh] bg-slate-900 lg:w-[30%] w-[50%] px-5',
        'pt-5 h-[13%]',
        'overflow-y-scroll h-[86%] pt-2',
        'relative h-[85vh] lg:w-[70%] bg-black',
        'text-white cursor-pointer absolute top-5 right-10 text-xl',

        // StatusUserCard.jsx
        'flex items-center p-3 cursor-pointer',
        'h-7 w-7 lg:w-10 lg:h-10 rounded-full',
        'ml-2 text-white',

        // StatusViewer.jsx
        'relative flex justify-center items-center h-[100vh] bg-slate-900',
        'relative',
        'max-h-[96vh] object-contain',
        'absolute top-0 flex w-full',
        'text-white text-2xl cursor-pointer absolute top-10 left-10',
        'text-white text-2xl cursor-pointer absolute top-10 right-10',

        // CreateGroup.jsx
        'w-full h-full',
        'flex items-center space-x-10 bg-green-800 text-white pt-16 px-10 pb-5',
        'cursor-pointer text-2xl font-bold',
        'text-xl font-semibold',
        'relative bg-white py-4 px-3',
        'flex space-x-2 flex-wrap space-y-1',
        'outline-none border-b border-b-slate-900 p-2 w-[93%]',
        'bg-white overflow-y-scroll h-[50.2vh]',
        'bottom-10 py-10 bg-slate-200 flex items-center justify-center',
        'bg-gray-600 rounded-full p-4 cursor-pointer',
        'text-white font-bold text-3xl',

        // SelectedMember.jsx
        'flex items-center bg-slate-300 rounded-full',
        'w-7 h-7 rounded-full',

        // NewGroup.jsx
        'w-full h-full',
        'flex items-center space-x-10 bg-green-800 text-white pt-16 px-10 pb-5',
        'cursor-pointer text-2xl font-bold',
        'text-xl font-semibold',
        'flex flex-col justify-center items-center my-12',
        'relative',
        'absolute top-[5rem] left-[6rem]',
        'hidden',
        'w-full flex justify-center items-center py-2 px-5',
        'w-full outline-none border-b-2 border-green-700 px-2 bg-transparent',
        'py-10 bg-slate-200 flex items-center justify-center',
        'bg-green-700 rounded-full p-4',
        'text-white font-bold text-3xl',

        // signIn.jsx
        'flex justify-center h-screen items-center',
        'w-[30%] p-10 shadow-md bg-white',
        'space-y-5',
        'mb-2',
        'py-2 outline outline-green-600 w-full rounded-md border',
        'w-full bg-green-600',
        'flex space-x-3 items-center mt-5',
        'm-0',
    ]
}