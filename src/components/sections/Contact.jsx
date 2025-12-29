import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Let's Connect</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Have a question or want to discuss a potential collaboration?
                            I'm always open to new opportunities in the healthcare sector.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:muammarrafirmxx@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border hover:bg-card transition-colors">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-medium">Email Me</div>
                                    <div className="text-sm text-muted-foreground">muammarrafirmxx@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-md">
                        <Card className="bg-card/50 backdrop-blur border-primary/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    Send a Message
                                </CardTitle>
                                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First Name</Label>
                                            <Input id="first-name" placeholder="John" className="bg-background/50" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last Name</Label>
                                            <Input id="last-name" placeholder="Doe" className="bg-background/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="How can I help you?" className="min-h-[120px] bg-background/50" />
                                    </div>
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
