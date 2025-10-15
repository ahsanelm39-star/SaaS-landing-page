import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import HeroImage from '../../../public/images/cog.png'
import Cercal from '../../../public/images/cylinder.png'
import Nodel from '../../../public/images/noodle.png'

export default  function Hero() {
    return (
        <section id='hero' className=" pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[rgb(243, 249, 255)] to-[#8ca1ff] overflow-x-clip">
            <div className='container m-auto p-4'>
                <div className="md:flex md:gap-x-10  md:items-center md:justify-between">
                    <div className="md:w-[478px] lg:w-[588px]">
                        <div className="tag">Version 2.0 Hero</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                        <p className="section-description">Celeprate the joy of accomplishment with an app designed to track your progress, motivate your offorts, and celeprate your successes.</p>
                        <div className="flex gap-x-4 mt-[30px] items-center">
                            <button className="btn">Get for free</button>
                            <div className="flex gap-x-2 items-center cursor-pointer hover:opacity-80 transition-all">
                                <button className="cursor-pointer">Learn more</button>
                                <FontAwesomeIcon icon={faArrowRight}  className='w-4 h-4'/>
                            </div>
                        </div>
                    </div>
                <div className="mt-15 md:mt-0 md:flex-1 md:h-[648px] relative ">
                    <Image src={HeroImage} alt="hero-image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 xl:left-30 2xl:left-60 hero-img"/>
                    <Image src={Cercal} alt="cyrcal" width={200} height={200} className="absolute -left-20 -top-10 max-md:hidden min-xl:left-10"/>
                    <Image src={Nodel} alt="nodel" width={200} height={200} className=" max-xl:hidden absolute -bottom-30 rotate-[40deg]  -right-10 "/>
                </div>
                </div>
            </div>
            
        </section>
    )
}