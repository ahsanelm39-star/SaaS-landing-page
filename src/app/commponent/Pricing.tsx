import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
        ],
    },
];


const pricingTiersList = pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features}) => {
    return (
        <div key={title} className={`shadow-lg p-10 pb-6 rounded-xl border border-gray-200 w-80  ${popular === true ? "bg-black text-white":""}  relative`} >
            <h3 className="text-xl opacity-60 font-bold mb-6">{title}</h3>
            <div className="mb-6">
                <span className={`text-4xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ${popular === true ? " text-white":""}`}>${monthlyPrice}</span>
                <span className="opacity-60">/monthely</span>
            </div>
            {inverse === true ? <div className="border border-[#414141] w-fit rounded-lg py-1 px-3 bg-gradient-to-r from-white to-[#00805591] text-transparent bg-clip-text  absolute top-10 right-10 text-sm">
                Most popular
            </div>:""}
            <button className={`btn w-full font-bold mb-6  ${popular === true ? "bg-white text-black":""}`}>{buttonText}</button>
            <ul>
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 mb-4">
                        <FontAwesomeIcon icon={faCheck} width={15}/>
                        <span className={`p text-sm mt-0 ${popular === true ? " text-white":""}`}>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
})


export default function  Pricing () {
    return (
        <section className="pb-20 pt-28" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center min-md:w-[600px] mx-auto mb-20">
                    <h2 className="section-title md:text-4xl">Pricing</h2>
                    <p className="section-description">Free forever. Upgrade for Unlimited tasks, better sucirty. and exclusive features</p>
                </div>
                <div className="flex items-end justify-center gap-6 mt-12 flex-wrap">
                    {pricingTiersList} 
                </div>
            </div>
        </section>
    )
}