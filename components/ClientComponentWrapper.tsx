"use client";

import dynamic from 'next/dynamic';

// Dynamic imports for components that access 'window' or browser-only APIs
const DynamicCertifications = dynamic(() => import("./Certifications").then(mod => mod.Certifications), { ssr: false });
const DynamicGitHub = dynamic(() => import("./GitHub").then(mod => mod.GitHub), { ssr: false });
const DynamicBlogs = dynamic(() => import("./Blogs").then(mod => mod.Blogs), { ssr: false });

export function ClientComponentWrapper({ component }: { component: 'Certifications' | 'GitHub' | 'Blogs' }) {
    if (component === 'Certifications') return <DynamicCertifications />;
    if (component === 'GitHub') return <DynamicGitHub />;
    if (component === 'Blogs') return <DynamicBlogs />;
    return null;
}
