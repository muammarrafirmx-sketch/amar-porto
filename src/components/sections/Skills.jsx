import React from 'react';
import { motion } from "framer-motion";

const skills = [
    "Hospital Management", "Patient Safety", "Healthcare Administration",
    "Medical Records", "Public Speaking", "Leadership", "Microsoft Office",
    "Data Analysis", "Health Policy", "Communication", "Strategic Planning",
    "Team Management", "Problem Solving"
];

export function Skills() {
    return (
        <section className="py-10 border-y bg-muted/20 overflow-hidden">
            <div className="flex relative">
                <motion.div
                    className="flex gap-8 px-4 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
                                {skill}
                            </span>
                            <span className="text-primary/20">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
