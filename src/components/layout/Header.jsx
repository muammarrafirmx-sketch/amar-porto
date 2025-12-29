import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 50 && latest > previous) {
            setIsScrolled(true);
        } else if (latest < 50) {
            setIsScrolled(false);
        }
    });

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.header
                className={cn(
                    "pointer-events-auto flex items-center justify-between rounded-full border bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out",
                    isScrolled ? "w-[60%] h-14 px-6" : "w-[90%] md:w-[80%] h-16 px-8"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center">
                    <a className="font-bold text-xl tracking-tighter" href="/">
                        MR
                    </a>
                </div>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <a className="transition-colors hover:text-primary text-muted-foreground" href="#about">About</a>
                    <a className="transition-colors hover:text-primary text-muted-foreground" href="#education">Education</a>
                    <a className="transition-colors hover:text-primary text-muted-foreground" href="#contact">Contact</a>
                </nav>

                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex rounded-full">
                        <a href="#contact">Contact</a>
                    </Button>
                    <Button className="rounded-full" size={isScrolled ? "sm" : "default"} asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </Button>
                </div>
            </motion.header>
        </div>
    );
}
