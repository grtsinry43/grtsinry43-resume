import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "grtsinry43的个人简历",
    description: "一个热爱编程的前端开发工程师，专注于 Web 开发，跨平台开发和基建，关注前沿技术和开源社区，喜欢分享技术经验和见解。 希望用技术解决实际问题，让世界变得更美好。",
    keywords: "简历,grtsinry43,前端开发,Web开发,跨平台开发,基建,前沿技术,开源社区,技术经验,后端开发,全栈工程"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
