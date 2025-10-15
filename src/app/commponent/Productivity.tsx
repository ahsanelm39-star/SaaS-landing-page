import Image from "next/image"
import Tamplate from '../../../public/images/product-image.png'
import Pymid from '../../../public/images/pyramid.png'
import Trub from '../../../public/images/tube.png'

export default function Productivity () {
    return (
        <section  className="pt-14 overflow-hidden overflow-x-clip " id="features">
            <div className="container mx-auto px-4">
                <div className="">
                    <div className="text-center md:w-[600px] m-auto">
                        <div className="tag">Boost your Productivity</div>
                        <h2 className="section-title mt-6 md:text-4xl">A more effective way to track progress</h2>
                        <p className="section-description">effortlessly turn your ideas a fully functional, responsivec, SaaS website in just minutes with this template</p>
                    </div>
                </div>
                <div className="relative">
                    <Image src={Tamplate} alt='template' className="mt-10"/>
                    <Image src={Pymid} alt='pymid' className="hidden md:block absolute -top-20 -right-20 w-50"/>
                    <Image src={Trub} alt='pymid' className="hidden md:block absolute bottom-30 max-lg:bottom-20 -left-25 w-50"/>
                </div>
            </div>
        </section>
    )
}