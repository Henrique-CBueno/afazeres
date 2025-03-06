import rocketLogo from '../assets/rocket.svg';

export function Header() {
    return (
        <header className='bg-stone-950'>
            <div className=' p-4 sm:p-0'>
                <div className='flex justify-center items-center gap-3.5'>
                    <img src={rocketLogo} alt="rocket" className='p-20 '/>
                    <h2 className='font-title text-blue-500 text-4xl antialiased'>to<span className='text-violet-800'>do</span></h2>
                </div>
            </div>
        </header>
    )
}