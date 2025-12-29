import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, BellRing } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function WelcomeToast() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 1 second
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Auto hide after 8 seconds
            const timer = setTimeout(() => setIsVisible(false), 8000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-4 right-4 z-50 max-w-[340px] w-full md:bottom-8 md:right-8"
                >
                    <div className="bg-card/95 backdrop-blur border border-primary/20 rounded-xl shadow-2xl p-4 overflow-hidden relative">
                        {/* Progress bar */}
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="absolute bottom-0 left-0 h-1 bg-primary/50"
                        />

                        <div className="flex gap-4">
                            <div className="bg-primary/10 p-2 rounded-full h-fit">
                                <BellRing className="h-5 w-5 text-primary animate-pulse" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <h4 className="font-semibold text-sm">Open to Opportunities!</h4>
                                <p className="text-xs text-muted-foreground">
                                    I am currently looking for roles in Hospital Administration. Let's collaborate.
                                </p>
                                <div className="pt-2 flex gap-2">
                                    <Button size="xs" variant="default" className="h-7 text-xs" onClick={() => (window.location.href = "#contact")}>
                                        Contact Me
                                    </Button>
                                    <Button size="xs" variant="ghost" className="h-7 text-xs" onClick={() => setIsVisible(false)}>
                                        Dismiss
                                    </Button>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-muted-foreground hover:text-foreground h-fit"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
