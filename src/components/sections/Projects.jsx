import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen } from 'lucide-react';

const projects = [
    {
        title: "Hospital Efficiency Analysis",
        description: "A comprehensive study on improving patient flow and reducing waiting times in outpatient departments.",
        tags: ["Research", "Operations", "Data Analysis"],
        year: "2024"
    },
    {
        title: "Digital Health Records Implemenation Plan",
        description: "Proposed framework for transitioning from paper-based to digital medical records systems in local clinics.",
        tags: ["Strategic Planning", "IT in Health", "Case Study"],
        year: "2023"
    },
    {
        title: "Patient Satisfaction Survey 2023",
        description: "Conducted and analyzed a survey of 500+ patients to identify key areas for service improvement.",
        tags: ["Quality Assurance", "Survey", "Analysis"],
        year: "2023"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Academic Projects</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Selected research and case studies from my academic journey.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-card hover:shadow-lg transition-all hover:bg-card/80 border-primary/10">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <FolderOpen className="h-8 w-8 text-primary p-1.5 bg-primary/10 rounded-md" />
                                    <Badge variant="outline">{project.year}</Badge>
                                </div>
                                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary" className="text-xs font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
