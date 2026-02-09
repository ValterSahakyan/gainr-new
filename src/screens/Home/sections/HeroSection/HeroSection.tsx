export const HeroSection = (): JSX.Element => {
    return (
        <section id="home" className="relative">
            <div className="relative h-[calc(100svh-96px)] overflow-hidden rounded-[50px] border border-[#1f1b1d]">
                <video
                    src="/videos/Stadium video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.1)_100%)]" />
                <div className="relative flex h-full w-full items-center px-4 py-14 md:px-12 lg:px-20">
                    <div className="max-w-[800px]">
                        <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-[#FF5A00] drop-shadow-lg md:text-[64px]">
                            Institutional Infrastructure for Sports-Betting-As-An-Asset-Class
                        </h1>
                        <p className="mt-6 max-w-[600px] text-[18px] font-medium leading-[1.4] text-white drop-shadow-md md:text-[28px]">
                            The first AI-Native, Decentralized and Compliant architecture for Sports Betting and Prediction Markets on Solana
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
