import Image from 'next/image'
import Avatar1 from '../../../public/images/avatar-1.png'
import Avatar2 from '../../../public/images/avatar-2.png'
import Avatar3 from '../../../public/images/avatar-3.png'
import Avatar4 from '../../../public/images/avatar-4.png'
import Avatar5 from '../../../public/images/avatar-5.png'
import Avatar6 from '../../../public/images/avatar-6.png'
import Avatar7 from '../../../public/images/avatar-7.png'
import Avatar8 from '../../../public/images/avatar-8.png'
import Avatar9 from '../../../public/images/avatar-9.png'
import type { StaticImageData } from 'next/image';

const testimonials1 = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: Avatar1,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: Avatar2,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: Avatar3,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    }
]
const testimonials2 = [
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: Avatar4,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: Avatar5,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: Avatar6,
        name: "Riley Smith",
        username: "@rileysmith1",
    }
]
const testimonials3 = [
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: Avatar7,
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: Avatar8,
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: Avatar9,
        name: "Casey Harper",
        username: "@casey09",
    },
]

type Testimonial = {
    text: string;
    imageSrc: StaticImageData;
    name: string;
    username: string;
};

function listOne(one: Testimonial[]) {
    return one.map(({text, imageSrc, name, username}) => {
        return (
            <div key={username} className='bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-70'>
                <p className='p text-sm text-gray-700'>{text}</p>
                <div className='flex gap-3 mt-4'>
                    <Image src={imageSrc} alt={name} width={40} height={40} className='rounded-full'/>
                    <div className='flex flex-col text-sm font-medium tracking-tight'>
                        <span>{name}</span>
                        <span>{username}</span>
                    </div>
                </div>
            </div>
        )
    })
}
export const Testimonials = () => {

    return(
        <section className='pb-20'>
            <div className="container m-auto px-4 ">
                <div className="text-center md:w-[600px] m-auto pt-10 pb-20">
                    <div className="tag mb-6">Testimonials</div>
                    <h2 className="section-title mb-0 md:text-4xl">What our users say</h2>
                    <p className="section-description mt-5">
                        from intuitive design to powerrful features, our app has become as essential tool for users around the world.
                    </p>
                </div>
                <div className=' [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] h-150 overflow-hidden relative flex flex-col gap-6'>
                    <div className='flex gap-6 flex-wrap justify-center comments'>
                        <div className='flex flex-col gap-4'>
                            {listOne (testimonials1)}
                        </div>
                        <div className='flex flex-col gap-4 max-sm:hidden'>
                            {listOne (testimonials2)}
                        </div>
                        <div className='flex flex-col gap-4 max-lg:hidden'>
                            {listOne (testimonials3)}
                        </div>
                    </div>
                    <div className='flex gap-6 flex-wrap justify-center comments'>
                        <div className='flex flex-col gap-4'>
                            {listOne (testimonials1)}
                        </div>
                        <div className='flex flex-col gap-4 max-sm:hidden'>
                            {listOne (testimonials2)}
                        </div>
                        <div className='flex flex-col gap-4 max-lg:hidden'>
                            {listOne (testimonials3)}
                        </div>
                    </div>
                    <div className='flex gap-6 flex-wrap justify-center comments'>
                        <div className='flex flex-col gap-4'>
                            {listOne (testimonials1)}
                        </div>
                        <div className='flex flex-col gap-4 max-sm:hidden'>
                            {listOne (testimonials2)}
                        </div>
                        <div className='flex flex-col gap-4 max-lg:hidden'>
                            {listOne (testimonials3)}
                        </div>
                    </div>
                    <div className='flex gap-6 flex-wrap justify-center comments'>
                        <div className='flex flex-col gap-4'>
                            {listOne (testimonials1)}
                        </div>
                        <div className='flex flex-col gap-4 max-sm:hidden'>
                            {listOne (testimonials2)}
                        </div>
                        <div className='flex flex-col gap-4 max-lg:hidden'>
                            {listOne (testimonials3)}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
