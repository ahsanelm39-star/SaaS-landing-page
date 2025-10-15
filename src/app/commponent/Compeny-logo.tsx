import Image from "next/image";
import LogoOne from "../../../public/images/logo-acme.png";
import LogoTwo from "../../../public/images/logo-apex.png";
import LogoThree from "../../../public/images/logo-celestial.png";
import LogoFour from "../../../public/images/logo-echo.png";
import LogoFive from "../../../public/images/logo-pulse.png";
import LogoSix from "../../../public/images/logo-quantum.png";


export default function   Logo () {
    return (
    <div>
        <div className="container m-auto px-4  py-8 md:py-12 ">
            <div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <div className="flex gap-x-14 main-logo transition-transform will-change-transform">
                    <Image src={LogoOne} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoTwo} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoThree} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFour} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFive} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoSix} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoOne} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoTwo} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoThree} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFour} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFive} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoSix} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoOne} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoTwo} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoThree} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFour} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFive} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoSix} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoOne} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoTwo} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoThree} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFour} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoFive} alt='Compeny logo' className="logo-ticker"/>
                    <Image src={LogoSix} alt='Compeny logo' className="logo-ticker"/>
                </div>
            </div>
        </div>
    </div>
    )
}