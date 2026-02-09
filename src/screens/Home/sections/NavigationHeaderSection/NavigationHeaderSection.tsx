import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
    { label: "home", href: "/", type: "route" as const },
    { label: "token", href: "/token", type: "route" as const },
    { label: "ecosystem", href: "/ecosystem", type: "route" as const },
    { label: "buy GAINR", href: "/buy-gainr", type: "route" as const },
    { label: "docs", href: "#docs", type: "anchor" as const },
];

export const NavigationHeaderSection = (): JSX.Element => {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 z-50 h-[80px] w-full px-3 md:px-[20px]">
            <nav className="flex h-[80px] w-full items-center justify-between rounded-[50px] bg-[linear-gradient(140deg,rgba(246,248,252,0.72)_0%,rgba(226,231,240,0.58)_48%,rgba(210,216,228,0.62)_100%)] px-3 shadow-[0_18px_52px_rgba(15,23,42,0.24),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-1px_0_rgba(255,255,255,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:px-12 lg:px-20">
                <Link to="/" className="flex shrink-0 items-center gap-2 md:gap-3">
                    <img src="/images/logo.svg" alt="Gainr logo" className="h-8 w-auto md:h-10" />
                </Link>
                <div className="hidden items-center gap-6 lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-6">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink asChild>
                                        {item.type === "route" ? (
                                            <Link
                                                to={item.href}
                                                className={`text-[18px] font-medium tracking-wide capitalize transition-colors hover:text-brand ${pathname === item.href ? "text-brand" : "text-black"}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a href={item.href} className="text-[18px] font-medium tracking-wide capitalize text-black transition-colors hover:text-brand">
                                                {item.label}
                                            </a>
                                        )}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button
                        asChild
                        className="h-auto rounded-full bg-brand px-7 py-2 text-sm font-medium text-brand-foreground hover:bg-brand-hover"
                    >
                        <a href="#litepaper">litepaper</a>
                    </Button>
                </div>
                <button
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-brand-foreground transition-colors hover:bg-brand-hover lg:hidden"
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </nav>

            {isMobileMenuOpen ? (
                <div className="mt-2 rounded-[24px] bg-[linear-gradient(140deg,rgba(246,248,252,0.95)_0%,rgba(226,231,240,0.9)_48%,rgba(210,216,228,0.92)_100%)] px-4 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navigationItems.map((item) =>
                            item.type === "route" ? (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className={`text-[18px] font-medium tracking-wide capitalize transition-colors hover:text-brand ${pathname === item.href ? "text-brand" : "text-black"}`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-[18px] font-medium tracking-wide capitalize text-black transition-colors hover:text-brand"
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </div>
                    <Button
                        asChild
                        className="mt-5 h-auto w-full rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-brand-foreground hover:bg-brand-hover"
                    >
                        <a href="#litepaper">litepaper</a>
                    </Button>
                </div>
            ) : null}
        </header>
    );
};
