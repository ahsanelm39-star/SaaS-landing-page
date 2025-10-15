import Image from "next/image"
import Logo from "../../../public/images/logosaas.png"
import Youtub from '../../../public/images/linked.png'
import Linked from '../../../public/images/Instagram_logo_2022.svg.webp'
import Insta from '../../../public/images/X_logo.jpg'
import X from '../../../public/images/facebook (2)_1.png'

export default function Footer(){
    return (
        <section className="bg-black text-[#b9b9b9] text-center p-8">
            <div className="contsiner mx-auto px-4">
                <div className="inline-flex  relative before:content-[''] before:absolute before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] ">
                    <Image src={Logo} alt="logo" width={40} height={40} className="relative"/>
                </div>
                <ul className="flex flex-col md:flex-row md:justify-center gap-5 mt-7" >
                    <li>About</li>
                    <li>Features</li>
                    <li>Customers</li>
                    <li>Pricing</li>
                    <li>Help</li>
                    <li>Careers</li>
                </ul>
                <div className="mt-7 flex gap-4 justify-center">
                    <Image src={Youtub} alt="youtube" width={20} height={20} className="inline-block m-2 w-8 rounded-md"/>
                    <Image src={Linked} alt="linkedin" width={20} height={20} className="inline-block m-2 w-8 rounded-md"/>
                    <Image src={Insta} alt="instagram" width={20} height={20} className="inline-block m-2 w-8 rounded-md"/>
                    <Image src={X} alt="x" width={20} height={20} className="inline-block m-2 w-8 rounded-md"/>
                </div>
                <div className="flex justify-center mt-7 text-sm">
                    <p>@2024 your compony,inc,All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}