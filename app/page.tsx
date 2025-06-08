"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"

// Configuration facile à modifier
const personalInfo = {
  firstName: "Pedro",
  lastName: "BELLEC",
  age: 20,
  class: "BTS SIO SLAM 2ème année",
  description: "Développeur Web & Logiciel en Devenir",
  email: "pedro.bellec@email.com",
  phone: "+33 6 12 34 56 78",
}

const languages = [
  { name: "JavaScript", logo: "/placeholder.svg?height=60&width=60", level: "Avancé" },
  { name: "Python", logo: "/placeholder.svg?height=60&width=60", level: "Intermédiaire" },
  { name: "Java", logo: "/placeholder.svg?height=60&width=60", level: "Intermédiaire" },
  { name: "PHP", logo: "/placeholder.svg?height=60&width=60", level: "Débutant" },
  { name: "HTML/CSS", logo: "/placeholder.svg?height=60&width=60", level: "Avancé" },
  { name: "React", logo: "/placeholder.svg?height=60&width=60", level: "Intermédiaire" },
]

const personalProjects = [
  {
    title: "Site E-commerce",
    description: "Développement d'un site de vente en ligne avec panier et paiement",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Application Mobile",
    description: "App de gestion de tâches avec synchronisation cloud",
    technologies: ["React Native", "Firebase"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const schoolProjects = [
  {
    title: "Système de Gestion",
    description: "Application de gestion d'inventaire pour une entreprise",
    technologies: ["Java", "MySQL"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Site Web Vitrine",
    description: "Création d'un site vitrine responsive pour une association",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const internships = [
  {
    company: "TechCorp Solutions",
    logo: "/placeholder.svg?height=80&width=80",
    period: "Mai - Juillet 2024",
    description:
      "Stage de développement web où j'ai participé à la création d'une application de gestion client. J'ai travaillé sur le frontend avec React et appris les bonnes pratiques de développement en équipe.",
    projects: ["Interface utilisateur responsive", "Intégration API REST", "Tests unitaires"],
  },
  {
    company: "Digital Innovation",
    logo: "/placeholder.svg?height=80&width=80",
    period: "Janvier - Mars 2024",
    description:
      "Premier stage axé sur le développement d'applications mobiles. J'ai découvert React Native et participé au développement d'une application de suivi de commandes.",
    projects: ["Application mobile", "Base de données SQLite", "Interface administrateur"],
  },
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/pedro-bellec" },
  { name: "GitHub", icon: Github, url: "https://github.com/pedro-bellec" },
  { name: "Email", icon: Mail, url: "mailto:pedro.bellec@email.com" },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Portfolio BTS SIO</div>
            <ul className="flex space-x-6">
              {[
                { id: "home", label: "Accueil" },
                { id: "about", label: "À propos" },
                { id: "skills", label: "Compétences" },
                { id: "languages", label: "Langages" },
                { id: "projects", label: "Projets" },
                { id: "internships", label: "Stages" },
                { id: "veille", label: "Veille" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white hover:text-orange-400 transition-colors ${
                      activeSection === item.id ? "text-orange-400" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Section Accueil */}
      <section id="home" className="min-h-screen flex items-center justify-center text-white pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Photo de profil"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Salut, je suis{" "}
              <span className="text-orange-400">
                {personalInfo.firstName} {personalInfo.lastName}
              </span>
            </h1>
            <p className="text-xl mb-2">{personalInfo.description}</p>
            <p className="text-lg text-gray-300 mb-2">
              {personalInfo.age} ans • {personalInfo.class}
            </p>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">À propos de moi</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le développement d'applications et de
              solutions logicielles. Mon parcours m'a permis d'acquérir des compétences solides en programmation et en
              gestion de projets informatiques.
            </p>
            <p className="text-lg leading-relaxed">
              Toujours curieux d'apprendre de nouvelles technologies, je m'efforce de rester à jour avec les dernières
              tendances du développement web et mobile. Mon objectif est de devenir un développeur full-stack compétent
              et polyvalent.
            </p>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Mes Compétences</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Voir mon tableau de compétences
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Tableau de Compétences BTS SIO</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tableau de compétences"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Section Langages */}
      <section id="languages" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Langages & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={lang.logo || "/placeholder.svg"}
                    alt={lang.name}
                    width={60}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-white mb-2">{lang.name}</h3>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                    {lang.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>

          {/* Projets Personnels */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-orange-400">Projets Personnels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-orange-400 text-orange-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projets de Cours */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-orange-400">Projets de Cours</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {schoolProjects.map((project, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-orange-400 text-orange-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Stages */}
      <section id="internships" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Mes Stages</h2>
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={internship.logo || "/placeholder.svg"}
                        alt={internship.company}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-white mb-2">{internship.company}</h3>
                      <p className="text-orange-400 mb-4">{internship.period}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{internship.description}</p>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Projets réalisés :</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {internship.projects.map((project, projectIndex) => (
                            <li key={projectIndex}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Veille Technologique */}
      <section id="veille" className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Veille Technologique</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8 text-gray-300">
              Ma veille technologique porte sur les dernières tendances en développement web, les nouveaux frameworks
              JavaScript, et l'évolution des pratiques DevOps.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Télécharger ma veille technologique
            </Button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Contact & CV</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* CV */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-400">Mon CV</h3>
                <p className="text-gray-300 mb-6">
                  Téléchargez mon CV pour découvrir mon parcours complet et mes expériences.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger mon CV
                </Button>
              </div>

              {/* Réseaux Sociaux */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-400">Mes Réseaux</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="h-8 w-8 text-white" />
                    </Link>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-gray-300">
                  <p className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {personalInfo.email}
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
