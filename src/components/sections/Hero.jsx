import React from 'react';
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.jpg";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center pt-24 pb-32 md:pt-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                Hi, I'm <br className="hidden lg:block" />
                                <span className="text-primary">Muammar Rafi</span>
                            </h1>
                            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Hospital Administration Student at Institut Kesehatan Helvetia. Passionate about bridging healthcare with modern technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-2 min-[400px]:flex-row"
                        >
                            <Button size="lg" className="h-12 px-8" asChild>
                                <a href="#contact">Contact Me</a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                                <a href="#about">Learn More</a>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-[80px] opacity-50"></div>
                            <img
                                src={profileImg}
                                alt="Muammar Rafi"
                                className="relative h-full w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
