import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
    const config  = {
        subtitle: 'Im a Front End developer',
        social: {
            linkedin: 'http://www.linkedin.com/in/maheswari-baskaran',
            github:'https://github.com/Maheswari-BaskaranS'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span>B</span> Maheswari 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><GitHubIcon style={{width:"100px", height:"40px", paddingRight:"20px"}}/></a>
            </div>
       </div>
       <img className='md:w-1/3'alt='HeroImg' src={HeroImg} />
    </section>
}
