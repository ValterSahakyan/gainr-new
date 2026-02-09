import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
    protocol: ["Litepaper", "Tokenomics"],
    products: ["Back.Bet", "Pick.Bet", "XOX.Bet"],
    community: ["Discord", "Twitter", "Telegram"],
    resources: ["Documentation", "GitHub", "Explorer", "Support"],
};

const legalLinks = ["Privacy policy", "Terms of service", "Testnet beta"];
const productRoutes: Record<string, string> = {
    "Back.Bet": "/coming-soon",
    "Pick.Bet": "/coming-soon",
    "XOX.Bet": "/coming-soon",
};

type FooterSectionProps = {
    backgroundClassName?: string;
};

export const FooterSection = ({ backgroundClassName = "bg-white" }: FooterSectionProps): JSX.Element => {
    return (
        <footer className={`mt-6 w-full px-3 pb-10 pt-8 md:px-[20px] md:pt-10 ${backgroundClassName}`}>
            <div className="w-full px-0 md:px-12 lg:px-20">
                <Separator className="bg-[#e5e7eb]" />

                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[250px_1fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/images/logo.svg" alt="Gainr logo" className="h-10 w-auto" />
                        </div>
                        <p className="mt-4 max-w-[190px] text-sm leading-[1.35] text-[#374151]">Smarter betting, powered by AI &amp; Web3</p>
                        <p className="mt-5 max-w-[180px] text-sm text-[#6b7280]">Not financial advice - bet responsibly</p>
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
                            {Object.entries(footerLinks).map(([section, links]) => (
                                <div key={section} className="space-y-3">
                                    <h3 className="text-sm font-medium capitalize text-[#111827]">{section}</h3>
                                    <ul className="space-y-2">
                                        {links.map((link) => (
                                            <li key={link}>
                                                {productRoutes[link] ? (
                                                    <Link to={productRoutes[link]} className="text-sm text-[#6b7280] transition-colors hover:text-brand">
                                                        {link}
                                                    </Link>
                                                ) : (
                                                    <a href="#" className="text-sm text-[#6b7280] transition-colors hover:text-brand">
                                                        {link}
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Button
                                variant="outline"
                                className="h-auto rounded-full border border-[#d1d5db] bg-transparent px-5 py-2.5 text-[#374151] hover:border-[#9ca3af] hover:bg-transparent"
                            >
                                <span className="mr-3 text-sm">Resources</span>
                                <Twitter className="mr-2 h-4 w-4" />
                                <MessageCircle className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-[#e5e7eb] pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-[#6b7280]">(c) 2026 Gainr pro. All rights reserved.</p>
                    <div className="flex gap-6">
                        {legalLinks.map((link) => (
                            <a key={link} href="#" className="text-xs text-[#6b7280] transition-colors hover:text-[#374151]">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

