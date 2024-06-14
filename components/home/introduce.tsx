import Background from '@/app/practice/background/page'
import './style.scss'
const str = ('with a passion for creating beautiful and user-friendly websites.'.split(''))
const Introduce = () => {
    
    return (
        <div className='relative'>
            <Background />
            <section className='introduce-nav flex flex-col justify-center items-center h-screen text-center pt-8 pb-8'>
                <h1 className=' font-sans text-9xl m-0 pb-2 tracking-widest text-blue-500 transition-all ease-linear z-10 hover:translate-x-0 hover:-translate-y-3 hover:translate-y-6 hover:text-whilte-500'>
                    FRONTEND DEVELOPER
                </h1>
                <h3 className='span loader'>
                    {
                        str.map((m, idx) => <span key={idx} className='m text-6xl'>{m}</span>)
                    }
                </h3>
            </section>
        </div>
    );
};

export default Introduce;