import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export type ResumeData = {
    personalInfo: {
        name: string
        title: string
        avatar: string
        badges: string[]
        contacts: {
            type: string
            value: string
            link?: string
        }[]
        personalDetails: {
            birth: string
            languages: string
            jobTarget: string
            salary: string
        }
    }
    profile: {
        content: string
        quote: string
    }
    skills: {
        categories: {
            name: string
            items: string[]
            color: string
        }[]
        teamExperience: string
    }
    education: {
        degree: string
        university: string
        duration: string
        courses: string
    }
    workExperience?: {
        position: string
        company: string
        duration: string
        points: string[]
        techStack: string[]
    }[]
    projects: {
        title: string
        url: string
        description: string
        techStack: string[]
        challenges: string[]
        color: string
    }[]
    certifications?: {
        title: string
        year: string
    }[]
    footer: {
        updateDate: string
        copyright: string
    }
}

export function getResumeData(): ResumeData {
    const filePath = path.join(process.cwd(), 'src/resume-data.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const {data} = matter(fileContents)
    return data as ResumeData
}