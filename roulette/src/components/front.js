export default function FrontPage({ onClick }) {
    return (
        <div onClick={onClick} className="flex flex-col items-center justify-center text-center w-5/6 h-5/6 absolute rounded overflow-hidden shadow-lg">
            <div className="absolute top-10 right-7 z-30 font-red text-7xl">
                <div>I think you're feeling 22~</div>
                <div>Happy Birthday!</div>
            </div>
            <div className='absolute bg-white bg-opacity-50 h-full w-full z-20'></div>
            <div className="h-full w-full bg-[url('../public/22.jpeg')] z-10 font-red text-8xl text-center"></div>
        </div>
    )
}