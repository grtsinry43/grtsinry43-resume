import {
    Mail,
    Globe,
    FileText,
    GraduationCap,
    Code,
    User,
    Zap,
    MapPin,
    Phone,
    Languages,
    Calendar,
    Github,
} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Card} from "@/components/ui/card"

export default function Resume() {
    return (
        <div
            className="min-h-screen py-8 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-60">
                <div
                    className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-200/30 to-blue-300/30 blur-3xl"></div>
                <div
                    className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-purple-200/30 to-pink-200/30 blur-3xl"></div>
                <div
                    className="absolute bottom-[-15%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-t from-pink-200/30 to-blue-200/30 blur-3xl"></div>
            </div>

            <Card
                className="max-w-4xl mx-auto p-6 md:p-8 shadow-md border border-gray-200 bg-white/90 backdrop-blur-sm relative z-10">
                {/* Header Section with Avatar */}
                <header className="relative mb-8 pb-6 border-b border-gray-100">
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-10 -mr-10 opacity-70"></div>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative">
                        {/* Avatar */}
                        <div className="relative">
                            <div
                                className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                                <img src="https://dogeoss.grtsinry43.com/img/author.jpeg" alt="Profile"
                                       className="w-full h-full object-cover"/>
                            </div>
                            <div
                                className="absolute bottom-0 right-0 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-xs font-bold">✓</span>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">grtsinry43</h1>
                            <p className="text-blue-600 mt-1 font-medium"> 前端开发工程师 </p>

                            <div className="flex items-center gap-2 mt-2">
                                <Badge
                                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"> 可远程工作 </Badge>
                                <Badge
                                    className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200"> 实习 </Badge>
                                <Badge className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200">1
                                    年项目经验 </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Extended Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <Mail className="h-4 w-4 text-blue-600"/>
                            </div>
                            <span>grtsinry43@outlook.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <Phone className="h-4 w-4 text-blue-600"/>
                            </div>
                            <span>+86 *** **** ****</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <MapPin className="h-4 w-4 text-blue-600"/>
                            </div>
                            <span> 湖南省长沙市 </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <Globe className="h-4 w-4 text-blue-600"/>
                            </div>
                            <a href="https://www.grtsinry43.com" target="_blank"
                               className="text-gray-800 hover:text-blue-600 transition-colors">
                                www.grtsinry43.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <FileText className="h-4 w-4 text-blue-600"/>
                            </div>
                            <a href="https://blog.grtsinry43.com" target="_blank"
                               className="text-gray-800 hover:text-blue-600 transition-colors">
                                blog.grtsinry43.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                                <Github className="h-4 w-4 text-blue-600"/>
                            </div>
                            <a href="https://github.com/grtsinry43" target="_blank"
                               className="text-gray-800 hover:text-blue-600 transition-colors">
                                grtsinry43
                            </a>
                        </div>
                    </div>

                    {/* Additional Personal Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-100">
                        <div>
                            <h3 className="text-xs text-gray-500 uppercase mb-1"> 出生年月 </h3>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-gray-400"/>
                                <span className="text-sm text-gray-700">2005 年 4 月 </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs text-gray-500 uppercase mb-1"> 语言能力 </h3>
                            <div className="flex items-center gap-1.5">
                                <Languages className="h-3.5 w-3.5 text-gray-400"/>
                                <span className="text-sm text-gray-700"> 中文（母语）, 英语（流利）</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs text-gray-500 uppercase mb-1"> 求职意向 </h3>
                            <span className="text-sm text-gray-700"> 前端工程师 </span>
                        </div>
                        <div>
                            <h3 className="text-xs text-gray-500 uppercase mb-1"> 期望薪资 </h3>
                            <span className="text-sm text-gray-700"> 面议 </span>
                        </div>
                    </div>
                </header>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-1 space-y-8">
                        {/* Personal Profile */}
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <User className="h-5 w-5 text-blue-600"/>
                                <h2 className="text-lg font-semibold text-gray-800"> 个人简介 </h2>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    一个热爱编程的前端开发工程师，专注于 Web 开发，跨平台开发和基建，关注前沿技术和开源社区，喜欢分享技术经验和见解。
                                    希望用技术解决实际问题，让世界变得更美好。
                                </p>
                                <p className="text-gray-700 italic mt-3 text-sm pl-3 border-l-2 border-blue-300">
                                    &#34; 希望自己能成为独当一面的前端工程师，在热爱的领域闪闪发光，仅此而已 &#34;
                                </p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <Code className="h-5 w-5 text-blue-600"/>
                                <h2 className="text-lg font-semibold text-gray-800"> 技能专长 </h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2"> 前端开发 </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">JavaScript</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">TypeScript</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">CSS/Tailwind</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">React</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Vue</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Nuxt.js</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Next.js</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Electron</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Tauri</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">React
                                            Native</Badge>
                                        <Badge
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">Webpack/rollup</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2"> 后端开发 </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">Node.js</Badge>
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">Express</Badge>
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">Spring
                                            Boot</Badge>
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">SQL</Badge>
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">MongoDB</Badge>
                                        <Badge
                                            className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">SocketIO</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2"> 开发工具 </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200">Git</Badge>
                                        <Badge
                                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200">Docker</Badge>
                                        <Badge
                                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200">CI/CD</Badge>
                                        <Badge
                                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200"> 云服务 </Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2"> 操作系统 </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200">Archlinux</Badge>
                                        <Badge
                                            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200">Ubuntu/Ubuntu
                                            Server</Badge>
                                        <Badge
                                            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200">wsl2</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2"> 团队管理经验 </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                目前在学校两个学生信息技术团队任管理岗位和技术负责人，<br/>
                                                负责 <span className="underline-color relative"> 技术选型 </span>，<span
                                                className="underline-color relative"> 文档书写 </span>，<span
                                                className="underline-color relative"> 团队协作分工 </span>，<span
                                                className="underline-color relative"> 项目管理 </span> 等工作。<br/>
                                                有 30 人左右的全栈团队，一直保持项目产出，和负责学校的信息化工作
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap className="h-5 w-5 text-blue-600"/>
                                <h2 className="text-lg font-semibold text-gray-800"> 教育背景 </h2>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-base font-medium text-gray-900"> 人工智能 </h3>
                                    <span className="text-sm text-gray-600">2023 - 2027</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2"> 中南大学 </p>
                                <p className="text-gray-700 text-sm"> 主修课程：计算机视觉、机器学习、自然语言处理、深度学习等 </p>
                            </div>
                        </section>

                        {/*/!* Certifications *!/*/}
                        {/*<section>*/}
                        {/*    <div className="flex items-center gap-2 mb-3">*/}
                        {/*        <Award className="h-5 w-5 text-blue-600"/>*/}
                        {/*        <h2 className="text-lg font-semibold text-gray-800"> 证书与认证 </h2>*/}
                        {/*    </div>*/}
                        {/*    <div className="space-y-3">*/}
                        {/*        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">*/}
                        {/*            <h3 className="text-sm font-medium text-gray-800">AWS 认证解决方案架构师 </h3>*/}
                        {/*            <p className="text-xs text-gray-600">2023 年获得 </p>*/}
                        {/*        </div>*/}
                        {/*        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">*/}
                        {/*            <h3 className="text-sm font-medium text-gray-800">Google 专业数据工程师 </h3>*/}
                        {/*            <p className="text-xs text-gray-600">2022 年获得 </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-8">
                        {/*    /!* Work Experience *!/*/}
                        {/*    <section>*/}
                        {/*        <div className="flex items-center gap-2 mb-4">*/}
                        {/*            <Briefcase className="h-5 w-5 text-blue-600"/>*/}
                        {/*            <h2 className="text-lg font-semibold text-gray-800"> 工作经历 </h2>*/}
                        {/*        </div>*/}
                        {/*        <div className="space-y-6">*/}
                        {/*            <div className="relative pl-6 pb-6 border-l-2 border-blue-100">*/}
                        {/*                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>*/}
                        {/*                <div className="flex justify-between items-baseline">*/}
                        {/*                    <h3 className="text-base font-medium text-gray-900"> 高级开发工程师 </h3>*/}
                        {/*                    <span*/}
                        {/*                        className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">*/}
                        {/*  2022 - 至今 */}
                        {/*</span>*/}
                        {/*                </div>*/}
                        {/*                <p className="text-sm text-gray-600 mb-2"> 某技术公司 </p>*/}
                        {/*                <ul className="list-disc list-inside text-gray-700 text-sm pl-1 space-y-1">*/}
                        {/*                    <li> 负责前端架构设计与实现，优化用户体验 </li>*/}
                        {/*                    <li> 开发与维护核心产品功能，提升系统性能 </li>*/}
                        {/*                    <li> 与团队协作完成项目目标，确保高质量交付 </li>*/}
                        {/*                    <li> 参与技术选型与决策，推动技术栈升级 </li>*/}
                        {/*                </ul>*/}
                        {/*                <div className="mt-2 flex flex-wrap gap-1.5">*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs">React</Badge>*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs">Node.js</Badge>*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs"> 微服务 </Badge>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <div className="relative pl-6 border-l-2 border-blue-100">*/}
                        {/*                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-300"></div>*/}
                        {/*                <div className="flex justify-between items-baseline">*/}
                        {/*                    <h3 className="text-base font-medium text-gray-900">Web 开发工程师 </h3>*/}
                        {/*                    <span*/}
                        {/*                        className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">*/}
                        {/*  2020 - 2022*/}
                        {/*</span>*/}
                        {/*                </div>*/}
                        {/*                <p className="text-sm text-gray-600 mb-2"> 某科技公司 </p>*/}
                        {/*                <ul className="list-disc list-inside text-gray-700 text-sm pl-1 space-y-1">*/}
                        {/*                    <li> 参与多个项目的开发与维护，确保代码质量 </li>*/}
                        {/*                    <li> 实现响应式网站设计，提升用户体验 </li>*/}
                        {/*                    <li> 解决技术难题与 bug 修复，保障系统稳定性 </li>*/}
                        {/*                    <li> 与设计师和产品经理紧密合作，实现产品愿景 </li>*/}
                        {/*                </ul>*/}
                        {/*                <div className="mt-2 flex flex-wrap gap-1.5">*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs">Vue.js</Badge>*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs">Express</Badge>*/}
                        {/*                    <Badge className="bg-gray-100 text-gray-700 text-xs">MongoDB</Badge>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </section>*/}

                        {/* Projects */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Code className="h-5 w-5 text-blue-600"/>
                                <h2 className="text-lg font-semibold text-gray-800"> 项目经验 </h2>
                            </div>
                            <div className="space-y-6">
                                <div
                                    className="bg-gradient-to-r from-blue-50 to-transparent p-5 rounded-lg border border-blue-100">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-base font-medium text-gray-900 flex items-center">
                                            <span> 全栈现代化博客系统 </span>
                                            <a href="https://blog.grtsinry43.com"
                                               target="_blank"
                                               className="ml-2 text-xs text-blue-600 hover:underline">
                                                blog.grtsinry43.com
                                            </a>
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-3">
                                        基于 Reactjs 与
                                        SpringBoot，前后端分离，支持服务端渲染与静态生成混合模式，结合向量推荐，
                                        有丰富自定义，支持增量生成与主题更换的综合型博客系统（内容管理系统）
                                    </p>

                                    <div className="mb-3">
                                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-1"> 技术栈 </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Next.js</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">React</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">TypeScript</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Tailwind
                                                CSS</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Spring
                                                Boot</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Redis</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">FastAPI</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Umi.js</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">SocketIO</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">MySQL</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center text-xs font-medium text-gray-500 uppercase mb-1">
                                            <Zap className="h-3 w-3 mr-1 text-amber-500"/>
                                            <span> 技术难点 </span>
                                        </h4>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>• 结合 SSG SSR 实现良好的 SEO 和性能优化</li>
                                            <li>• 实现高性能的静态生成与增量静态再生成</li>
                                            <li>• 优化图片加载与代码分割，提升页面加载速度</li>
                                            <li>• 设计响应式布局，适配各种设备尺寸</li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-r from-green-50 to-transparent p-5 rounded-lg border border-green-100">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-base font-medium text-gray-900 flex items-center">
                                            <span> 个人网站 </span>
                                            <a href="https://www.grtsinry43.com" target="_blank"
                                               className="ml-2 text-xs text-green-600 hover:underline">
                                                www.grtsinry43.com
                                            </a>
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-3">
                                        展示个人作品与技术文章的门户网站，采用现代前端技术栈构建，实现了良好的响应式设计与交互体验。
                                    </p>

                                    <div className="mb-3">
                                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-1"> 技术栈 </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Vue</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Nuxt.js</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">TypeScript</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Tailwind
                                                CSS</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Sanity
                                                CMS</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center text-xs font-medium text-gray-500 uppercase mb-1">
                                            <Zap className="h-3 w-3 mr-1 text-amber-500"/>
                                            <span> 技术难点 </span>
                                        </h4>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>• 实现平滑的页面过渡动画，提升用户体验</li>
                                            <li>• 优化首屏加载时间，提高性能评分</li>
                                            <li>• 设计可复用的组件系统，提高开发效率</li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-r from-purple-50 to-transparent p-5 rounded-lg border border-purple-100">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-base font-medium text-gray-900 flex items-center">
                                            <span> 学校登山节系统 </span>
                                            <a href="https://race.54sher.com" target="_blank"
                                               className="ml-2 text-xs text-purple-600 hover:underline">
                                                race.54sher.com
                                            </a>
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-3">
                                        为学校开发的登山节活动系统，包含打卡定位，活动报名，排行展示，活动数据统计等功能，支持多种角色权限管理。
                                    </p>

                                    <div className="mb-3">
                                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-1"> 技术栈 </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Vue.js</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Vant
                                                UI</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Spring
                                                Boot</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">MySQL</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center text-xs font-medium text-gray-500 uppercase mb-1">
                                            <Zap className="h-3 w-3 mr-1 text-amber-500"/>
                                            <span> 技术难点 </span>
                                        </h4>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>• 前端页面的移动端优化和响应式设计</li>
                                            <li>• 设计基于 WebAssembly 的签名加密机制，有效防止作弊情况</li>
                                            <li>• 缓存与优化高并发下的使用体验</li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-r from-yellow-50 to-transparent p-5 rounded-lg border border-yellow-100">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-base font-medium text-gray-900 flex items-center">
                                            <span>Pure Start 浏览器起始页 </span>
                                            <a href="https://justpure.dev" target="_blank"
                                               className="ml-2 text-xs text-yellow-600 hover:underline">
                                                justpure.dev
                                            </a>
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-3">
                                        一个现代化、美观且高效的浏览器起始页，采用 Next.js 构建并支持服务端渲染和暗黑模式。项目基于
                                        TypeScript 开发，利用 Shadcn-ui 实现主题定制，追求极简与性能并重，目前正处于早期开发阶段，欢迎提出建议与贡献代码。
                                    </p>

                                    <div className="mb-3">
                                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-1"> 技术栈 </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Next.js</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">TypeScript</Badge>
                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Tailwind
                                                CSS</Badge>
                                            <Badge
                                                className="bg-gray-100 text-gray-800 hover:bg-gray-200">Shadcn-ui</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center text-xs font-medium text-gray-500 uppercase mb-1">
                                            <Zap className="h-3 w-3 mr-1 text-amber-500"/>
                                            <span> 技术难点 </span>
                                        </h4>
                                        <ul className="text-xs text-gray-700 space-y-1">
                                            <li>• 实现服务端渲染与客户端动态交互的无缝切换</li>
                                            <li>• 优化暗黑模式与主题定制，确保 UI 在不同模式下的高一致性</li>
                                            <li>• 利用 TypeScript 强类型系统保障项目的高可靠性和可维护性</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="mt-10 text-center text-gray-500 text-xs border-t border-gray-100 pt-4">
                    <p> 更新日期: 2025 年 3 月 13 日 </p>
                    <p> copyRight © 2025 grtsinry43 </p>
                </footer>
            </Card>
        </div>
    )
}

