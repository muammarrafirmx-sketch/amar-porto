import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Education</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[600px]">
                        My academic foundation that drives my professional growth.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">Institut Kesehatan Helvetia</CardTitle>
                                        <CardDescription className="text-base text-primary">Bachelor of Hospital Administration</CardDescription>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>Present</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>Medan, Indonesia</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Specializing in healthcare operations, policy analysis, and strategic management of health services.
                                Actively involved in student organizations and academic research regarding hospital efficiency.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
