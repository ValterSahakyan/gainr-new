import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { NavigationHeaderSection } from "@/screens/Home/sections/NavigationHeaderSection";
import { FooterSection } from "@/screens/Home/sections/FooterSection";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

const tokenHero = {
    image: "/images/frame2.png",
    titleMain: "GAINR",
    titleAccent: "token economy",
    subtitle:
        "GAINR is the native SPL utility/governance token on Solana, powering VIP features, discounts, and ecosystem growth. It's designed for stability through measured releases and deflationary mechanics.",
};

const tokenDistributionPills = [
    {
        value: "35%",
        label: "community liquidity",
        offsetClass: "lg:ml-0",
    },
    {
        value: "25%",
        label: "ecosystem development",
        offsetClass: "lg:ml-20",
    },
    {
        value: "20%",
        label: "team & advisors",
        offsetClass: "lg:ml-12",
    },
    {
        value: "20%",
        label: "private & public sale",
        offsetClass: "lg:-ml-8",
    },
];

const tokenUtilities = [
    {
        title: "Governance",
        description: "Propose and vote on upgrades, fees, and new markets.",
        image: "/images/Rectangle1.png",
        imagePosition: "center 72%",
    },
    {
        title: "Access & discounts",
        description: "Fee rebates on bets (down to 5% for VIPs), premium AI content, early cash-outs, and exclusive perks.",
        image: "/images/Rectangle2.png",
        imagePosition: "center 62%",
    },
    {
        title: "Payments",
        description: "Primary currency for entry fees, subscriptions, and services across dApps.",
        image: "/images/Rectangle3.png",
        imagePosition: "center 36%",
    },
    {
        title: "Deflationary features",
        description: "Quarterly burns of 25% platform profits + 10% staking fee; treasury management for 10-20% annual returns via AI market-making.",
        image: "/images/Rectangle4.png",
        imagePosition: "center 32%",
    },
];

export const Token = (): JSX.Element => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#efeff1] font-['Figtree'] text-[#161515]">
            <NavigationHeaderSection />

            <main className="flex w-full flex-col gap-8 px-[20px] pb-8 pt-[96px] md:gap-10 md:pb-12 md:pt-[96px]">
                <section id="token-home" className="relative">
                    <div
                        className="relative h-[calc(100svh-96px)] overflow-hidden rounded-[50px] bg-cover bg-center"
                        style={{ backgroundImage: `url('${tokenHero.image}')` }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.25)_100%)]" />
                        <div className="relative flex h-full w-full items-center px-6 py-14 md:px-12 lg:px-20">
                            <div className="max-w-[650px]">
                                <h1 className="text-[32px] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[58px]">
                                    <span>{tokenHero.titleMain}</span>
                                    <br />
                                    <span className="text-[#FF5A00]">{tokenHero.titleAccent}</span>
                                </h1>
                                <p className="mt-6 max-w-[830px] text-[18px] leading-[1.35] text-black md:text-[30px]">
                                    {tokenHero.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full rounded-[32px] bg-white py-10 md:py-14">
                    <div className={SECTION_INNER_PADDING}>
                        <p className="text-[20px] leading-none tracking-[-0.02em] text-[#3d4048] md:text-[34px]">Token distribution</p>
                        <h2 className="mt-2 text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[66px]">Token allocation</h2>
                        <p className="mt-4 max-w-[1050px] text-[18px] leading-[1.3] text-[#3f4249] md:text-[38px]">
                            Fair distribution ensuring long-term sustainability and community ownership
                        </p>

                        <Card className="mt-8 rounded-[20px] bg-[#EFEFF1] shadow-none">
                            <CardContent className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:gap-8 md:px-10 md:py-12">
                                <div className="flex h-[132px] w-[132px] shrink-0 items-center justify-center rounded-[24px] bg-[#e5e6e9]">
                                    <ShieldCheck className="h-16 w-16 text-[#616672]" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-semibold leading-none tracking-[-0.02em] text-[#353840] md:text-[46px]">Community-First Approach</h3>
                                    <p className="mt-4 max-w-[980px] text-[17px] leading-[1.35] text-[#59606d] md:text-[36px]">
                                        <span className="text-brand">60%</span> of tokens allocated to community liquidity and ecosystem development,
                                        ensuring decentralized governance and sustainable growth.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-10">
                            <div className="mx-auto max-w-[1240px] rounded-[34px] px-6 py-9 md:px-10 md:py-12">
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[430px_1fr] lg:items-center lg:gap-14">
                                    <div className="mx-auto h-[280px] w-[280px] overflow-hidden rounded-full bg-[#cfd1d7] sm:h-[320px] sm:w-[320px] md:h-[430px] md:w-[430px]">
                                        <video
                                            src="/videos/video2.mp4"
                                            className="h-full w-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    </div>

                                    <div className="flex flex-col gap-6 md:gap-8">
                                        {tokenDistributionPills.map((pill) => (
                                            <div
                                                key={pill.label}
                                                className={`w-full lg:max-w-[560px] rounded-[24px] bg-[linear-gradient(180deg,#f5f6f8_0%,#e7e9ee_100%)] px-6 py-4 text-center text-[22px] leading-none transition-transform duration-300 ease-out hover:-translate-y-1 md:px-9 md:py-6 md:text-[30px] lg:text-left lg:text-[36px] ${pill.offsetClass}`}
                                            >
                                                <span className="inline-flex items-center gap-3 whitespace-normal md:whitespace-nowrap">
                                                    <span className="font-semibold tracking-[-0.02em] text-brand">{pill.value}</span>
                                                    <span className="text-[#343840]">{pill.label}</span>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-8 md:py-10">
                    <div className={SECTION_INNER_PADDING}>
                        <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[62px]">Token utilities</h2>

                        <div className="mt-8">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {tokenUtilities.map((item) => (
                                    <Card
                                        key={item.title}
                                        className="group h-[420px] w-full overflow-hidden rounded-[30px] bg-white md:h-[500px]"
                                    >
                                        <CardContent className="flex h-full flex-col p-0">
                                            <div className="px-6 pt-6 md:px-8 md:pt-8">
                                                <h3 className="text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-[#262228] md:text-[22px]">{item.title}</h3>
                                                <p className="mt-4 text-[16px] leading-[1.35] text-[#646a77] md:text-[17px]">{item.description}</p>
                                            </div>
                                            <div className="relative mt-auto h-[190px] w-full overflow-hidden md:h-[235px]">
                                                <img
                                                    src={item.image}
                                                    alt={`${item.title} visual`}
                                                    className="h-full w-full object-cover grayscale"
                                                    style={{ objectPosition: item.imagePosition }}
                                                />
                                                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/70 to-transparent" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection backgroundClassName="bg-[#efeff1]" />
        </div>
    );
};
