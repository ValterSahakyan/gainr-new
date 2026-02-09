export const TokenDetailsSection = (): JSX.Element => {
    return (
        <section className="relative w-full px-3 pt-[96px] md:px-[20px]">
            <div
                className="relative h-[calc(100svh-96px)] overflow-hidden rounded-[50px] border border-[#1f1b1d] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/frame2.png')" }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.58)_45%,rgba(255,255,255,0.34)_100%)]" />
                <div className="relative flex h-full w-full items-center px-4 py-14 md:px-12 lg:px-20">
                    <div className="max-w-[830px]">
                        <h1 className="text-[32px] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[58px]">
                            <span>GAINR</span>
                            <br />
                            <span className="text-brand">token economy</span>
                        </h1>
                        <p className="mt-6 max-w-[830px] text-[18px] leading-[1.35] text-black md:text-[30px]">
                            GAINR is the native SPL utility/governance token on Solana, powering VIP features, discounts, and ecosystem growth.
                            It&apos;s designed for stability through measured releases and deflationary mechanics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
