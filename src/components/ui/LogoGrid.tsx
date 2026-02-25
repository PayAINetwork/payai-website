import Image from 'next/image';

const logos = [
    { },
    { src: "/projects/aimo-network.jpg" },
    { src: "/projects/dira-network.jpg" },
    { src: "/projects/earnfi.jpg" },
    { },
    { },
    { src: "/projects/near-protocol.jpg" },
    { src: "/projects/nofa-ai.jpg" },
    { src: "/projects/pixel-games-ai.jpg" },
    { },
    { noBorder: true },
    { src: "/projects/predict.jpg", noBorder: true },
    { src: "/projects/skale.jpg", noBorder: true },
    { src: "/projects/t54-ai.jpg", noBorder: true },
    { noBorder: true },
];

export default function LogoGrid() {
    return (
        <div className="absolute top-0 -left-[15%] transform skew-x-12 h-full w-[130%] overflow-hidden">
            <div className="grid grid-cols-5 w-full h-full overflow-hidden">
                {logos.map((logo, index) => (
                    <div 
                        key={index}
                        className={`
                                flex items-center justify-center
                                border-r
                                ${logo.noBorder ? 'md:border-b-0 border-b' : 'border-b'}
                                border-[#E4E4E7]
                                min-h-[120px]
                            `}
                    >
                        {logo.src ? (
                            <div className="transform skew-x-3 w-fit h-fit hover:scale-110
                                transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt='logo'
                                    width={64}  
                                    height={64}
                                    className="rounded-xl sm:w-16 sm:h-16 w-12 h-12"
                                />
                            </div>
                        ) : (
                            <div className="transform skew-x-3" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}