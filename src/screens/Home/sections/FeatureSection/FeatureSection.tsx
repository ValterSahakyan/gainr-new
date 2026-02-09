import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
};

const featureItems: FeatureItem[] = [
    {
        title: "AI expertise & human intelligence combined",
        description:
            "Powered by AI developed in collaboration with the University of Glasgow, Gainr integrates deep behavioral modeling, dynamic odds adjustment, and predictive analytics. Fused with professional syndicate insights from Gainr Analytics' 22 AI engineers and quants, our system delivers personalized bet recommendations, portfolio optimization, and an unbeatable edge-turning data into real wins for every player.",
        icon: "/images/icon1.svg",
    },
    {
        title: "Blockchain traceability & transparency",
        description:
            "Built on Solana's high-speed blockchain, every bet, settlement, and transaction is fully traceable and auditable on-chain. With transparent smart contracts, real-time oracles from Chainlink, and proof-of-reserves, Gainr eliminates hidden risks, ensuring fair play and building unbreakable trust in a decentralized ecosystem.",
        icon: "/images/icon2.svg",
    },
    {
        title: "Fully compliant",
        description:
            "Compliance-first from day one: ZKP-based KYC via zk.ME for privacy-preserving verification, geo-fencing for jurisdictional adherence, and full alignment with global standards like GLI-33 and ISO 27001. We are pursuing licenses in Isle of Man, Curacao, Malta, and beyond-passing the Howey Test to keep GAINR as a true utility token, not a security.",
        icon: "/images/icon3.svg",
    },
    {
        title: "Deep liquidity & 0 slippage",
        description:
            "Our treasury-funded AMM Liquidity Engine provides deep, shared pools across all dApps, ensuring competitive odds, instant execution, and zero slippage-even for large bets. Backed by internal market-making and partnerships with Azuro, Drift, and Polymarket, Gainr delivers scalable liquidity that attracts more users and developers for network effects.",
        icon: "/images/icon4.svg",
    },
    {
        title: "Advised by University of Glasgow",
        description:
            "In partnership with the University of Glasgow's School of Computing Science, Gainr leverages academic research in ML models, reinforcement learning, and Bayesian inference for superior sports predictions. This collaboration ensures our AI is future-proof, data-driven, and grounded in rigorous science.",
        icon: "/images/icon5.svg",
    },
    {
        title: "Real-time risk monitoring",
        description:
            "Continuous risk controls monitor market behavior and liquidity conditions to keep execution stable and transparent during volatility spikes and high-activity periods.",
        icon: "/images/icon2.svg",
    },
];

export const FeatureSection = (): JSX.Element => {
    return (
        <section id="ecosystem" className={`w-full ${SECTION_INNER_PADDING}`}>
            <header className="mb-8 md:mb-10">
                <h2 className="text-[38px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[66px]">Feature</h2>
                <p className="mt-2 text-lg text-[#3e3e42] md:text-[34px] md:leading-[1.1]">Join Gainr to bet like a pro, win without barriers</p>
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                {featureItems.map((item) => (
                    <FeatureCard key={item.title} item={item} />
                ))}
            </div>
        </section>
    );
};

const FeatureCard = ({ item }: { item: FeatureItem }): JSX.Element => {
    return (
        <div className="group flex h-full flex-col items-start rounded-[32px] border border-[#e7e7ec] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-xl md:p-10">
            <div className="mb-6 flex w-full items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xls p-1.5 transition-colors group-hover:bg-brand/5 md:h-16 md:w-16">
                    <img src={item.icon} alt={`${item.title} icon`} className="h-full w-full object-contain" />
                </div>
                <h3 className="flex-1 text-xl font-bold leading-tight tracking-tight text-[#151515] md:text-2xl">
                    {item.title}
                </h3>
            </div>
            <p className="text-base leading-relaxed text-[#5e5f6e] md:text-lg">
                {item.description}
            </p>
        </div>
    );
};
