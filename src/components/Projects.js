import websiteImg1 from '../assets/Todo App.png';
import websiteImg2 from '../assets/Portfolio.png';
import websiteImg3 from '../assets/Pizza order.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'An application specially built to keep track of errands or tasks that need to be done.',
                link: 'https://github.com/Maheswari-BaskaranS/React_Todo_List.git'
            },
            {
                image: websiteImg2,
                description: 'My Prortfolio Application, Built with React Js',
                link: 'https://github.com/Maheswari-BaskaranS/Maheswari-Portfolio.git'
            },
            {
                image: websiteImg3,
                description: 'Pizza ordering Application, Built with React Js',
                link: 'https://github.com/Maheswari-BaskaranS/React-Pizza-order-app.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React.js. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-20 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}