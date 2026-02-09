import { Card, CardContent } from "@/components/ui/card";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

const partnerGroups = [
    "Gainr Analytics team of quants, traders and data scientists",
    "University of Glasgow",
];

const partnerLogos = [
    { id: "layer2", src: "/images/Layer%202.png", alt: "Layer 2" },
    { id: "amazon", src: "/images/Amazon.png", alt: "Amazon" },
    { id: "bvnk", src: "/images/bvnk.png", alt: "Bvnk" },
    { id: "karate-combat", src: "/images/Karate%20Combat.png", alt: "Karate Combat" },
    { id: "pfl", src: "/images/PFL.png", alt: "PFL" },
    { id: "solana", src: "/images/solana.png", alt: "Solana" },
    { id: "sportradar", src: "/images/Sportradar.png", alt: "Sportradar" },
    { id: "zkme", src: "/images/zkme.png", alt: "zkMe" },
];

export const PartnersSection = (): JSX.Element => {
    return (
        <section id="token" className="w-full rounded-[28px] bg-[linear-gradient(180deg,#d9dbe0_0%,#666c79_100%)] py-8 md:py-10">
            <div className={SECTION_INNER_PADDING}>
                <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[56px]">Strategic partners</h2>

                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <Card className="relative overflow-hidden rounded-[20px] border-0 bg-[linear-gradient(180deg,#E2E2E2_0px,#E2E2E2_20px,#FF5A00_100%)] shadow-none">
                        <CardContent className="relative p-5">
                            <div className="flex flex-wrap justify-center gap-2">
                                {partnerLogos.map((logo) => (
                                    <div key={logo.id} className="flex h-12 w-[30%] items-center justify-center rounded-xl bg-white/80">
                                        <img src={logo.src} alt={logo.alt} className="h-6 w-auto object-contain" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {partnerGroups.map((partner) => (
                        <Card key={partner} className="rounded-[20px] border border-[#d7d8de] bg-[#f6f6f8] shadow-none">
                            <CardContent className="flex min-h-[98px] items-center justify-center p-5">
                                <p className="text-center text-[20px] leading-[1.5] text-[#FF5A00] whitespace-pre-line md:text-[24px]">{partner}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
