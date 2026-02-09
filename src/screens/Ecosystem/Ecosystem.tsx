import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeaderSection } from "@/screens/Home/sections/NavigationHeaderSection";
import { FooterSection } from "@/screens/Home/sections/FooterSection";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";
import { Orbit, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type ProductItem = {
    name: string;
    badge: string;
    description: string;
    benefits: string[];
    features: string[];
    launchText: string;
    launchPath: string;
    accent: "orange" | "slate";
    image: string;
    imageClass: string;
};

const products: ProductItem[] = [
    {
        name: "Back.Bet",
        badge: "Live",
        description: "Provably fair wagering platform with instant payouts and transparent odds",
        benefits: ["Provably fair algorithms", "Transparent odds", "Instant payouts", "Low fees with GAINR rebates"],
        features: ["Sports betting", "Casino games", "Live events", "Mobile optimized"],
        launchText: "Launch app",
        launchPath: "/coming-soon",
        accent: "orange",
        image: "/images/frame11.png",
        imageClass: "brightness-[1.07] contrast-[1.08] saturate-[1.08] sepia-[0.35] hue-rotate-[-16deg]",
    },
    {
        name: "Pick.Bet",
        badge: "Coming Soon",
        description: "Decentralized tipping system for content creators and streamers",
        benefits: ["Direct creator support", "Transparent transactions", "Cross-platform compatibility", "Community rewards"],
        features: ["Twitch integration", "YouTube support", "Social media tips", "Creator dashboard"],
        launchText: "Launch app",
        launchPath: "/coming-soon",
        accent: "slate",
        image: "/images/frame12.png",
        imageClass: "brightness-[1.07] contrast-[1.08] saturate-[1.08]",
    },
    {
        name: "XOX.Bet",
        badge: "Beta",
        description: "Gaming platform with skill-based competitions and tournaments",
        benefits: ["Skill-based competitions", "Fair matchmaking", "Tournament prizes", "Community tournaments"],
        features: ["Multi-game support", "Leaderboard", "Custom tournaments", "Streaming integration"],
        launchText: "Launch app",
        launchPath: "/coming-soon",
        accent: "slate",
        image: "/images/frame13.png",
        imageClass: "brightness-[1.07] contrast-[1.08] saturate-[1.08]",
    },
];

const ecosystemPoints = [
    {
        title: "Seamless integration",
        description: "All products work together across users, creators, rewards, and data for a unified experience.",
        icon: <Orbit className="h-4 w-4 text-brand" />,
    },
    {
        title: "Provably fair",
        description: "Every product is built with transparent verification and smart-contract-backed fairness.",
        icon: <ShieldCheck className="h-4 w-4 text-brand" />,
    },
    {
        title: "Community driven",
        description: "Built with community feedback and governance to shape product decisions and roadmap activity.",
        icon: <Sparkles className="h-4 w-4 text-brand" />,
    },
];

const iconForProduct = (name: string, isActive: boolean): JSX.Element => {
    const iconClass = `h-6 w-6 object-contain ${isActive ? "opacity-100 [filter:brightness(0)_saturate(100%)_invert(49%)_sepia(87%)_saturate(3880%)_hue-rotate(1deg)_brightness(102%)_contrast(104%)]" : "opacity-60 grayscale"}`;
    if (name === "Back.Bet") {
        return <img src="/images/Vector2.svg" alt="Back.Bet icon" className={iconClass} />;
    }
    if (name === "Pick.Bet") {
        return <img src="/images/Vector1.svg" alt="Pick.Bet icon" className={iconClass} />;
    }
    return <img src="/images/Vector3.svg" alt="XOX.Bet icon" className={iconClass} />;
};

export const Ecosystem = (): JSX.Element => {
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const productRefs = useRef<(HTMLDivElement | null)[]>([]);
    const visibilityRatios = useRef<Record<number, number>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const index = Number((entry.target as HTMLDivElement).dataset.productIndex);
                    visibilityRatios.current[index] = entry.intersectionRatio;
                }

                let nextActive = activeProductIndex;
                let maxRatio = -1;

                for (let i = 0; i < products.length; i += 1) {
                    const ratio = visibilityRatios.current[i] ?? 0;
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        nextActive = i;
                    }
                }

                if (nextActive !== activeProductIndex && maxRatio > 0) {
                    setActiveProductIndex(nextActive);
                }
            },
            {
                threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
                rootMargin: "-10% 0px -25% 0px",
            }
        );

        for (let i = 0; i < productRefs.current.length; i += 1) {
            const el = productRefs.current[i];
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [activeProductIndex]);

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white font-['Figtree'] text-[#161515]">
            <NavigationHeaderSection />

            <main className="flex w-full flex-col gap-8 px-3 pb-8 pt-[96px] md:gap-10 md:px-[20px] md:pb-12 md:pt-[96px]">
                <section id="ecosystem-home" className="relative">
                    <div
                        className="relative h-[calc(100svh-96px)] overflow-hidden rounded-[50px] bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/frame3.png')" }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,239,241,0.55)_0%,rgba(239,239,241,0.28)_45%,rgba(239,239,241,0.12)_100%)]" />
                        <div className="relative flex h-full w-full items-center px-4 py-14 md:px-12 lg:px-20">
                            <div className="max-w-[650px]">
                                <h1 className="text-[34px] font-medium leading-[1.02] tracking-[-0.02em] text-black md:text-[62px]">
                                Complete
                                <br />
                                <span className="text-brand">Gaming ecosystem</span>
                                </h1>
                                <p className="mt-6 max-w-[840px] text-[18px] leading-[1.35] text-[#1f2026] md:text-[30px]">
                                    A comprehensive suite of products designed to revolutionize decentralized gaming, from wagering to
                                    community investment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full rounded-[22px] bg-[#e7e7ea] py-8 md:py-10">
                    <div className={SECTION_INNER_PADDING}>
                        <div className="mx-auto w-full max-w-[1180px]">
                            <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[66px]">Our products</h2>
                            <p className="mt-2 max-w-[920px] text-[18px] leading-[1.2] text-[#252933] md:text-[34px]">
                                Four core products working together to create the ultimate gaming experience
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            {products.map((product, index) => {
                                const isActive = index === activeProductIndex;
                                return (
                                <div
                                    key={product.name}
                                    data-product-index={index}
                                    className="mx-auto w-full max-w-[1180px]"
                                    ref={(el) => {
                                        productRefs.current[index] = el;
                                    }}
                                    onMouseEnter={() => setActiveProductIndex(index)}
                                >
                                <Card
                                    className={`rounded-[24px] shadow-none ring-1 transition-all duration-300 ${isActive ? "bg-white ring-[#dde0e7]" : "bg-[#f4f6fa] ring-[#dde0e7]"}`}
                                >
                                    <CardContent className="relative grid gap-4 p-2 md:grid-cols-[1.28fr_1fr] md:items-center md:gap-6 md:p-5">
                                        <div className={`rounded-[18px] p-3 transition-colors duration-300 md:p-5 ${isActive ? "bg-white" : "bg-transparent"}`}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4e7ee]">
                                                    {iconForProduct(product.name, isActive)}
                                                </div>
                                                <div>
                                                    <h3 className="text-[22px] font-medium leading-none text-[#1f232b] md:text-[30px]">{product.name}</h3>
                                                    <span
                                                        className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] ${
                                                            isActive
                                                                ? "bg-[#ffe7da] text-[#ff5a00]"
                                                                : "bg-[#d7dae1] text-[#555c68]"
                                                        }`}
                                                    >
                                                        {product.badge}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="mt-3 text-[15px] leading-[1.3] text-[#2f3440] md:text-[22px]">{product.description}</p>
                                            <div className={`mt-4 h-px w-full ${isActive ? "bg-[#ff5a00]/35" : "bg-[#d7dbe4]"}`} />

                                            <div className="mt-4 pt-3">
                                                <p className="text-[13px] font-medium text-[#4f5562] md:text-[15px]">Key Benefits</p>
                                                <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
                                                    {product.benefits.map((benefit) => (
                                                        <div key={benefit} className="flex items-start gap-2 text-[11px] leading-[1.2] text-[#59606d] md:text-[13px]">
                                                            <span className={`mt-1 inline-block h-[8px] w-[8px] shrink-0 rounded-full ${isActive ? "bg-[#FF5A00]" : "bg-[#8a909c]"}`} />
                                                            <span>{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-[13px] font-medium text-[#4f5562] md:text-[15px]">Features</p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {product.features.map((feature) => (
                                                        <span
                                                            key={feature}
                                                            className="rounded-full bg-[#f3f4f6] px-2 py-1 text-[9px] uppercase tracking-[0.08em] text-[#606776] md:text-[10px]"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-4 flex gap-3">
                                                <Button
                                                    asChild
                                                    className={`h-auto rounded-full px-5 py-2 text-xs font-medium ${isActive ? "bg-brand text-white hover:bg-brand-hover" : "bg-[#5f636c] text-white hover:bg-[#4f535b]"}`}
                                                >
                                                    <Link to={product.launchPath}>
                                                        {product.launchText}
                                                    </Link>
                                                </Button>
                                                <Button className="h-auto rounded-full bg-[#d9dce3] px-5 py-2 text-xs text-[#434955] hover:bg-[#d2d6de]">
                                                    Learn more
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="relative mx-auto w-full max-w-[450px] md:justify-self-center">
                                            <div className={`overflow-hidden rounded-[18px] ring-1 transition-all duration-300 ${isActive ? "bg-[#dddfe5] ring-[#d4d8e1]" : "bg-[#f4f6fa] ring-[#d4d8e1]"}`}>
                                                <img
                                                    src={product.image}
                                                    alt={`${product.name} visual`}
                                                    className={`h-[220px] w-full object-cover transition-all duration-500 sm:h-[240px] md:h-[290px] ${isActive ? "scale-[1.02] grayscale-0" : "scale-100 grayscale"}`}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                </div>
                            )})}
                        </div>
                    </div>
                </section>

                <section className="overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#e7e8ec_0%,#525866_100%)] py-14 md:py-16">
                    <div className={SECTION_INNER_PADDING}>
                        <div className="mx-auto max-w-[680px] text-center">
                            <h2 className="text-[34px] font-medium leading-none tracking-[-0.02em] text-[#14151a] md:text-[56px]">
                                Ready to <span className="text-brand">get started</span>?
                            </h2>
                            <p className="mt-4 text-[18px] leading-[1.25] text-[#1f232b] md:text-[34px]">
                                Join the future of decentralized gaming and be part of the GAINR ecosystem.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                                <Button className="h-auto rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-hover">
                                    Start gaming
                                </Button>
                                <Button className="h-auto rounded-full bg-[#f1f2f4] px-6 py-2.5 text-sm text-[#242832] hover:bg-[#eceef2]">
                                    Join community
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-[22px] bg-white py-10">
                    <div className={SECTION_INNER_PADDING}>
                        <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[66px]">Why our ecosystem?</h2>
                        <p className="mt-3 text-[16px] leading-[1.5] text-[#4f5562] md:text-[18px]">
                            Integrated products that work together to create a seamless gaming experience
                        </p>

                        <div className="mt-8 grid gap-6 pt-6 md:grid-cols-3 md:gap-8">
                            {ecosystemPoints.map((point) => (
                                <div key={point.title}>
                                    <div className="flex items-center gap-2">
                                        {point.icon}
                                        <h3 className="text-[16px] font-medium text-[#232126] md:text-[18px]">{point.title}</h3>
                                    </div>
                                    <p className="mt-3 text-[13px] leading-[1.45] text-[#59606d] md:text-[14px]">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </div>
    );
};


