import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background/50 backdrop-blur-md">
            <div className="container py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand / Info */}
                    <div className="md:col-span-2 space-y-4">
                        <a href="/" className="font-bold text-2xl tracking-tighter">
                            MR
                        </a>
                        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                            Dedicated to improving healthcare systems through modern administration and technology.
                            Based in Medan, Indonesia.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">Navigation</h3>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#about" className="hover:text-primary transition-colors">About</a>
                            <a href="#education" className="hover:text-primary transition-colors">Education</a>
                            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">Contact</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:muammarrafirmxx@gmail.com">muammarrafirmxx@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>&copy; {currentYear} Muammar Rafi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
