import { ChevronsLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDragScroll } from "@/hooks/useDragScroll";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

const organizations = [
    { name: "Microsoft", logo: "/images/microsoft.png", className: "h-[35px] w-[104px]" },
    { name: "IBM", logo: "/images/ibm.png", className: "h-[35px] w-[72px]" },
    { name: "University of Glasgow", logo: "/images/ug-keyline.png", className: "h-[35px] w-[112px]" },
];

const teamMembers = [
    {
        name: "Theodoros Koumis",
        role: "CEO",
        description:
            "Theo is a British professional gambler and technology entrepreneur with a multidisciplinary background in Computer Science, Maths and Physics. Leveraging his expertise in developing quantitative models, Theo consulted for Microsoft, NHS, abrdn, Santander, Scottish Power and the UK Government. He returned to iGaming in 2016 to develop the first in-running GPS horse racing model for SIS.",
    },
    {
        name: "Noelle Gahan",
        role: "Chief Business Officer",
        description:
            "Noelle has a 6-year track record in Web3 and AI leadership across blockchain and token ecosystems, spanning CMO roles, tokenomics strategy, and global GTM execution. Earlier, she held senior roles in top PR firms and global tech companies including Cisco and HP. She holds 3 engineering degrees and an MBA.",
    },
    {
        name: "Nakul Shah",
        role: "Chief AI Officer",
        description:
            "Nakul Shah, AI Product Manager and author, holds a master's degree in financial engineering from the University of Michigan. With 10+ years of global experience, including Charles River Development, he drives AI innovation in fintech, DeFi, and emerging technology platforms.",
    },
    {
        name: "Rajesh Shiva",
        role: "Chief Technology Officer",
        description:
            "Rajesh Shiva brings decades of global IT leadership, specializing in post-quantum cryptography, Web3 frameworks, and AI-driven architectures. He partners with founders and executives to scale ventures, modernize systems, and deliver secure, high-impact digital solutions.",
    },
    {
        name: "Alan Young",
        role: "Chief Product Officer",
        description:
            "Alan is an ex-IBM Senior Managing Consultant and holds a BEng in Software Engineering from McMaster University. He is an innovation strategist with a track record in leveraging AI, blockchain, and emerging technologies to drive transformative product solutions.",
    },
    {
        name: "Valter Sahakyan",
        role: "Head of Engineering",
        description:
            "Valter is a technology entrepreneur and full-stack software engineer with over 10 years of experience delivering modern, transformative DeFi and iGaming solutions. He also holds a BSc in Actuarial and Financial Mathematics.",
    },
    {
        name: "Vanessa Tang",
        role: "Head of Marketing",
        description:
            "Vanessa is skilled in strategic storytelling, branding and growth campaigns, with a record of generating $16M+ in revenue for Web3 projects. She has orchestrated token launches with 44x ATH post-TGE and scaled communities by 150K+ users in one week.",
    },
];

export const CoreTeamSection = (): JSX.Element => {
    const { ref: trackRef, handlers } = useDragScroll<HTMLDivElement>();

    return (
        <section className="relative z-20 w-full rounded-[28px] bg-[#dfe0e4] py-8 md:py-10">
            <div className={SECTION_INNER_PADDING}>
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[56px]">Core team</h2>
                    <div className="flex flex-nowrap items-center gap-[6px] md:justify-end">
                        {organizations.map((item, index) => (
                            <img
                                key={item.name}
                                src={item.logo}
                                alt={item.name}
                                className={`${item.className} ${index === 0 ? "mr-4" : ""} object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#c8cad1] bg-[#eef0f4] px-3 py-1.5 text-xs font-medium text-[#4f5563]">
                        <ChevronsLeftRight className="h-4 w-4 text-brand [animation:swipe-hint_1.4s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            <div>
                <div
                    ref={trackRef}
                    className="relative z-30 mt-3 cursor-grab overflow-x-auto overflow-y-visible pb-2 select-none touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    {...handlers}
                >
                    <div className={`relative z-30 flex w-max snap-x snap-mandatory items-start gap-4 ${SECTION_INNER_PADDING}`}>
                        {teamMembers.map((member) => (
                            <Card
                                key={member.name}
                                className="relative z-40 group w-[360px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[20px] border border-[#d7d8de] bg-[#f6f6f8] shadow-none transition-all duration-300 ease-out"
                            >
                                <CardContent className="p-5 pb-4">
                                    <h3 className="text-[14px] font-medium text-[#1f2025]">{member.name}</h3>
                                    <p className="mt-1 text-[26px] leading-none text-brand">{member.role}</p>
                                    <p className="mt-4 overflow-hidden text-sm leading-[1.5] text-[#50525a] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] group-hover:[display:block] group-hover:[-webkit-line-clamp:unset]">
                                        {member.description}
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
