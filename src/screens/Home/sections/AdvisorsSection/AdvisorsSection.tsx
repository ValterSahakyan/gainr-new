import { ChevronsLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDragScroll } from "@/hooks/useDragScroll";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

const advisors = [
    {
        name: "Dr. Stylianos Kampakis",
        role: "Tokenomics",
        description:
            "Stylianos is a mathematician and tokenomics expert with a long career in AI and blockchain. He is a published author on Tokenomics and Web3, with work presented in top-ranked journals and conferences.",
    },
    {
        name: "Professor Joemon Jose",
        role: "AI & Deep Learning",
        description:
            "Joemon is a professor of deep learning with an h-index of 45, 7,699 citations, and over 290 publications in prestigious journals. He specializes in predictive modeling and recommendation systems, powering Gainr's AI-driven sports analytics vision.",
    },
    {
        name: "James Hart",
        role: "Marketing Consultant",
        description:
            "Jimmy is a European sports tech GTM specialist who has led successful B2C go-to-market campaigns for LALIGA Web3 fantasy and worked on GTM strategy with PFL, Karate Combat, and Socios/Chiliz. He has managed $20M+ in ad spend and previously launched an AI adtech product at Google London to 7-figure revenue.",
    },
];

export const AdvisorsSection = (): JSX.Element => {
    const { ref: trackRef, handlers } = useDragScroll<HTMLDivElement>();

    return (
        <section className="relative z-20 w-full rounded-[28px] bg-[#dfe0e4] py-8 md:py-10">
            <div className={SECTION_INNER_PADDING}>
                <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[56px]">Strategic advisors</h2>

                <div className="mt-4 flex items-center justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#c8cad1] bg-[#eef0f4] px-3 py-1.5 text-xs font-medium text-[#4f5563]">
                        <ChevronsLeftRight className="h-4 w-4 text-brand [animation:swipe-hint_1.4s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            <div>
                <div
                    ref={trackRef}
                    className="relative z-30 mt-3 cursor-grab overflow-x-auto overflow-y-visible pb-2 select-none touch-pan-x [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    {...handlers}
                >
                    <div className={`relative z-30 flex w-max snap-x snap-mandatory items-start gap-4 ${SECTION_INNER_PADDING}`}>
                        {advisors.map((advisor) => (
                            <Card
                                key={advisor.name}
                                className="relative z-40 group w-[360px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[20px] border border-[#d7d8de] bg-[#f6f6f8] shadow-none transition-all duration-300 ease-out"
                            >
                                <CardContent className="p-5 pb-4">
                                    <h3 className="text-[14px] font-medium text-[#1f2025]">{advisor.name}</h3>
                                    <p className="mt-1 text-[26px] leading-none text-brand">{advisor.role}</p>
                                    <p className="mt-4 overflow-hidden text-sm leading-[1.5] text-[#50525a] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] group-hover:[display:block] group-hover:[-webkit-line-clamp:unset]">
                                        {advisor.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
