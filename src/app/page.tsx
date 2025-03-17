import {getResumeData, ResumeData} from '@/lib/resume-parser'
import dynamic from 'next/dynamic'
import {Badge} from "@/components/ui/badge"
import {Card} from "@/components/ui/card"
import Image from "next/image";
import {ColorName, colorSystem} from '@/lib/color-system';

const icons = {
    Mail: dynamic(() => import('lucide-react').then(mod => mod.Mail)),
    Globe: dynamic(() => import('lucide-react').then(mod => mod.Globe)),
    FileText: dynamic(() => import('lucide-react').then(mod => mod.FileText)),
    GraduationCap: dynamic(() => import('lucide-react').then(mod => mod.GraduationCap)),
    Code: dynamic(() => import('lucide-react').then(mod => mod.Code)),
    User: dynamic(() => import('lucide-react').then(mod => mod.User)),
    Zap: dynamic(() => import('lucide-react').then(mod => mod.Zap)),
    MapPin: dynamic(() => import('lucide-react').then(mod => mod.MapPin)),
    Phone: dynamic(() => import('lucide-react').then(mod => mod.Phone)),
    Languages: dynamic(() => import('lucide-react').then(mod => mod.Languages)),
    Calendar: dynamic(() => import('lucide-react').then(mod => mod.Calendar)),
    Github: dynamic(() => import('lucide-react').then(mod => mod.Github)),
    Briefcase: dynamic(() => import('lucide-react').then(mod => mod.Briefcase)),
    Award: dynamic(() => import('lucide-react').then(mod => mod.Award)),
}

export default function Resume() {
    const data = getResumeData()

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
                {/* Header */}
                <Header data={data.personalInfo}/>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-1 space-y-8">
                        <ProfileSection data={data.profile}/>
                        <SkillsSection data={data.skills}/>
                        <EducationSection data={data.education}/>
                        {data.certifications && <CertificationsSection data={data.certifications}/>}
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-8">
                        {data.workExperience && <WorkExperienceSection data={data.workExperience}/>}
                        <ProjectsSection data={data.projects}/>
                    </div>
                </div>

                <Footer data={data.footer}/>
            </Card>
        </div>
    )
}

// 子组件定义
const Header = ({data}: { data: ResumeData['personalInfo'] }) => (
    <header className="relative mb-8 pb-6 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mt-10 -mr-10 opacity-70"></div>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative">
            <div className="relative">
                <div
                    className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <Image src={data.avatar} width={64} height={64} alt="Profile"
                           className="w-full h-full object-cover"/>
                </div>
                <div
                    className="absolute bottom-0 right-0 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                </div>
            </div>

            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{data.name}</h1>
                <p className="text-blue-600 mt-1 font-medium">{data.title}</p>
                <div className="flex items-center gap-2 mt-2">
                    {data.badges.map((badge, i) => (
                        <Badge key={i}
                               className={colorSystem[getColor(i) as ColorName]?.headerBadge || colorSystem.blue.headerBadge}>
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {data.contacts.map((contact, i) => {
                const Icon = icons[contact.type as keyof typeof icons]
                return (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                            {Icon && <Icon className="h-4 w-4 text-blue-600"/>}
                        </div>
                        {contact.link ? (
                            <a href={contact.link} target="_blank"
                               className="text-gray-800 hover:text-blue-600 transition-colors">
                                {contact.value}
                            </a>
                        ) : (
                            <span>{contact.value}</span>
                        )}
                    </div>
                )
            })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-100">
            <DetailItem icon="Calendar" label="出生年月" value={data.personalDetails.birth}/>
            <DetailItem icon="Languages" label="语言能力" value={data.personalDetails.languages}/>
            <DetailItem label="求职意向" value={data.personalDetails.jobTarget}/>
            <DetailItem label="期望薪资" value={data.personalDetails.salary}/>
        </div>
    </header>
)

const DetailItem = ({icon, label, value}: { icon?: keyof typeof icons; label: string; value: string }) => {
    const Icon = icon ? icons[icon] : null
    return (
        <div>
            <h3 className="text-xs text-gray-500 uppercase mb-1">{label}</h3>
            <div className="flex items-center gap-1.5">
                {Icon && <Icon className="h-3.5 w-3.5 text-gray-400"/>}
                <span className="text-sm text-gray-700">{value}</span>
            </div>
        </div>
    )
}

const ProfileSection = ({data}: { data: ResumeData['profile'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-3">
            <icons.User className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">个人简介</h2>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{data.content}</p>
            <p className="text-gray-700 italic mt-3 text-sm pl-3 border-l-2 border-blue-300">
                &#34;{data.quote}&#34;
            </p>
        </div>
    </section>
)

const SkillsSection = ({data}: { data: ResumeData['skills'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-3">
            <icons.Code className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">技能专长</h2>
        </div>
        <div className="space-y-3">
            {data.categories.map((category) => (
                <div key={category.name}>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => (
                            <Badge key={i}
                                   className={colorSystem[category.color as ColorName]?.badge || colorSystem.blue.badge}>
                                {item}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">团队管理经验</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                        {data.teamExperience}
                    </p>
                </div>
            </div>
        </div>
    </section>
)

const EducationSection = ({data}: { data: ResumeData['education'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-3">
            <icons.GraduationCap className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">教育背景</h2>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex justify-between items-baseline">
                <h3 className="text-base font-medium text-gray-900">{data.degree}</h3>
                <span className="text-sm text-gray-600">{data.duration}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{data.university}</p>
            <p className="text-gray-700 text-sm whitespace-pre-line">{data.courses}</p>
        </div>
    </section>
)

const CertificationsSection = ({data}: { data: ResumeData['certifications'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-3">
            <icons.Award className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">证书与认证</h2>
        </div>
        <div className="space-y-3">
            {data && data.map((cert, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-800">{cert.title}</h3>
                    <p className="text-xs text-gray-600">{cert.year}</p>
                </div>
            ))}
        </div>
    </section>
)

const WorkExperienceSection = ({data}: { data: ResumeData['workExperience'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-4">
            <icons.Briefcase className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">工作经历</h2>
        </div>
        <div className="space-y-6">
            {data && data.map((exp, i) => (
                <div key={i} className="relative pl-6 pb-6 border-l-2 border-blue-100">
                    <div
                        className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-base font-medium text-gray-900">{exp.position}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {exp.duration}
            </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm pl-1 space-y-1">
                        {exp.points.map((point, j) => (
                            <li key={j}>{point}</li>
                        ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech, j) => (
                            <Badge key={j} className="bg-gray-100 text-gray-700 text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
)

const ProjectsSection = ({data}: { data: ResumeData['projects'] }) => (
    <section>
        <div className="flex items-center gap-2 mb-4">
            <icons.Code className="h-5 w-5 text-blue-600"/>
            <h2 className="text-lg font-semibold text-gray-800">项目经验</h2>
        </div>
        <div className="space-y-6">
            {data.map((project, i) => {
                const colorVariant = colorSystem[project.color as ColorName]?.project || colorSystem.blue.project;
                return (
                    <div key={i}
                         className={`bg-gradient-to-r ${colorVariant.bg} to-transparent p-5 rounded-lg border ${colorVariant.border}`}>
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-base font-medium text-gray-900 flex items-center">
                                <span>{project.title}</span>
                                {project.url && (
                                    <a href={project.url} target="_blank"
                                       className="ml-2 text-xs text-blue-600 hover:underline">
                                        {new URL(project.url).hostname}
                                    </a>
                                )}
                            </h3>
                        </div>

                        <p className="text-gray-700 text-sm mb-3 whitespace-pre-line">{project.description}</p>

                        {project.techStack?.length > 0 && (
                            <div className="mb-3">
                                <h4 className="text-xs font-medium text-gray-500 uppercase mb-1">技术栈</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techStack.map((tech, j) => (
                                        <Badge key={j} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.challenges?.length > 0 && (
                            <div>
                                <h4 className="flex items-center text-xs font-medium text-gray-500 uppercase mb-1">
                                    <icons.Zap className="h-3 w-3 mr-1 text-amber-500"/>
                                    <span>技术难点</span>
                                </h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    {project.challenges.map((challenge, j) => (
                                        <li key={j}>• {challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    </section>
)

const Footer = ({data}: { data: ResumeData['footer'] }) => (
    <footer className="mt-10 text-center text-gray-500 text-xs border-t border-gray-100 pt-4">
        <p>更新日期: {data.updateDate}</p>
        <p>{data.copyright}</p>
    </footer>
)

// 辅助函数
const getColor = (index: number) => {
    const colors = ['blue', 'green', 'purple']
    return colors[index % colors.length]
}