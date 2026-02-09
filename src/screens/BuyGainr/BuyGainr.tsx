import { Button } from "@/components/ui/button";
import { NavigationHeaderSection } from "@/screens/Home/sections/NavigationHeaderSection";
import { FooterSection } from "@/screens/Home/sections/FooterSection";
import { SECTION_INNER_PADDING } from "@/screens/Home/layout";

const PITCH_DECK_URL = "https://gainr.docsend.com/view/493w6em4cgb453db";

export const BuyGainr = (): JSX.Element => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#efeff1] font-['Figtree'] text-[#161515]">
            <NavigationHeaderSection />

            <main className="flex w-full flex-col gap-8 px-3 pb-8 pt-[96px] md:gap-10 md:px-[20px] md:pb-12 md:pt-[96px]">
                <section className="relative">
                    <div
                        className="relative h-[calc(100svh-96px)] overflow-hidden rounded-[50px] border border-[#1f1b1d] bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/frame3.png')" }}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.36)_44%,rgba(0,0,0,0.2)_100%)]" />
                        <div className="relative flex h-full w-full items-center px-4 py-14 md:px-12 lg:px-20">
                            <div className="max-w-[680px]">
                                <h1 className="text-[34px] font-medium leading-[1.02] tracking-[-0.02em] text-white md:text-[62px]">
                                    Buy <span className="text-brand">GAINR</span>
                                </h1>
                                <p className="mt-6 max-w-[860px] text-[18px] leading-[1.35] text-[#e5e7ec] md:text-[30px]">
                                    Our integrated purchase flow is being finalized. Soon you will be able to buy GAINR directly with a
                                    seamless on-chain experience.
                                </p>
                                <div className="mt-7 inline-flex rounded-full bg-brand px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white md:text-sm">
                                    Coming Soon
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full rounded-[30px] bg-[#e8e8eb] py-10 md:py-12">
                    <div className={SECTION_INNER_PADDING}>
                        <h2 className="text-[36px] font-medium leading-none tracking-[-0.02em] text-brand md:text-[56px]">What is next</h2>
                        <p className="mt-3 max-w-[1050px] text-[18px] leading-[1.3] text-[#3f4249] md:text-[34px]">
                            We are completing provider integrations, wallet checkout, and compliance checks before launch.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="rounded-[20px] bg-[#EFEFF1] p-5">
                                <h3 className="mt-2 text-[22px] font-medium leading-none text-[#23262d] md:text-[26px]">On-ramp setup</h3>
                                <p className="mt-3 text-[15px] leading-[1.5] text-[#5a6070]">Fiat and crypto on-ramp options connected for smooth entry.</p>
                            </div>
                            <div className="rounded-[20px] bg-[#EFEFF1] p-5">
                                <h3 className="mt-2 text-[22px] font-medium leading-none text-[#23262d] md:text-[26px]">Checkout flow</h3>
                                <p className="mt-3 text-[15px] leading-[1.5] text-[#5a6070]">Simple wallet-first flow with clear fees and transaction status.</p>
                            </div>
                            <div className="rounded-[20px] bg-[#EFEFF1] p-5">
                                <h3 className="mt-2 text-[22px] font-medium leading-none text-[#23262d] md:text-[26px]">Launch access</h3>
                                <p className="mt-3 text-[15px] leading-[1.5] text-[#5a6070]">Public release with guides, support, and best execution routing.</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button className="h-auto rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-hover">
                                Notify me
                            </Button>
                            <Button asChild className="h-auto rounded-full bg-[#d9dce3] px-6 py-2.5 text-sm text-[#2e3440] hover:bg-[#d0d4dc]">
                                <a href={PITCH_DECK_URL} target="_blank" rel="noopener noreferrer">
                                    Pitch Deck
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection backgroundClassName="bg-[#efeff1]" />
        </div>
    );
};
