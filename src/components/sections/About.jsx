import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, BookOpen, User, Building2 } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Me</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Get to know more about my background and academic journey.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Main Intro Card */}
                    <Card className="col-span-full lg:col-span-2 bg-gradient-to-br from-card to-secondary/20 border-primary/10">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                <CardTitle>Who am I?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                My name is Muammar Rafi. I am currently dedicated to mastering Hospital Administration.
                                I combine my academic knowledge with a strong interest in technology to improve healthcare systems.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Stats/Quick Info */}
                    <Card className="bg-card/50 backdrop-blur">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-purple-500" />
                                <CardTitle>Institution</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Institut Kesehatan Helvetia</div>
                            <p className="text-sm text-muted-foreground">Medan, Indonesia</p>
                        </CardContent>
                    </Card>

                    {/* Major Card */}
                    <Card className="bg-card/50 backdrop-blur">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-blue-500" />
                                <CardTitle>Major</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-bold">Administrasi Rumah Sakit</div>
                            <p className="text-sm text-muted-foreground">Undergraduate Student</p>
                        </CardContent>
                    </Card>

                    {/* Focus Areas */}
                    <Card className="col-span-full md:col-span-2 lg:col-span-2 bg-card/50 backdrop-blur">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-green-500" />
                                <CardTitle>Key Focus Areas</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Healthcare Management
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Hospital Operations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Health Information Systems
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    Patient Experience Quality
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
