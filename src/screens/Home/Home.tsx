import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { FeatureSection } from "./sections/FeatureSection";
import { CoreTeamSection } from "./sections/CoreTeamSection";
import { AdvisorsSection } from "./sections/AdvisorsSection";
import { PartnersSection } from "./sections/PartnersSection";
import { FooterSection } from "./sections/FooterSection";

export const Home = (): JSX.Element => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#efeff1] font-['Figtree'] text-[#161515]">
            <NavigationHeaderSection />
            <main className="flex w-full flex-col gap-12 px-3 pb-8 pt-[96px] md:px-[20px] md:pb-12 md:pt-[96px]">
                <HeroSection />
                <FeatureSection />
                <CoreTeamSection />
                <AdvisorsSection />
                <PartnersSection />
            </main>
            <FooterSection backgroundClassName="bg-[#efeff1]" />
        </div>
    );
};
