import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Shield, 
  Database,
  Code2,
  Server,
  Activity,
  GitBranch,
  Command,
  ChevronRight,
  ExternalLink,
  Mail,
  Linkedin,
  FileText,
  Minimize,
  Maximize,
  X,
  Menu,
  Zap,
  Lock,
  Workflow,
  RefreshCw,
  Key
} from 'lucide-react';

// ==========================================
// DADOS DO CURRÍCULO
// ==========================================
const portfolioData = {
    hero: {
        name: "Samuel Lima",
        role: "Senior Systems Engineer",
        subRole: "& Solutions Architect",
        tagline: "Modern Workplace | Automation | AI-Ops",
        bio: "Transformo operações manuais em ecossistemas autônomos. Especialista em orquestração Microsoft, segurança de identidade e engenharia de confiabilidade (SRE) aplicada à infraestrutura.",
        email: "samuel.lima_@hotmail.com",
        linkedin: "https://www.linkedin.com/in/samuel-lima-tech",
        // O Vite serve a pasta 'public' na raiz '/'
        avatar: "/profile.jpg" 
    },
    techStack: [
        { name: "Python & Automation", icon: Code2, level: 90 },
        { name: "PowerShell Core", icon: Terminal, level: 95 },
        { name: "Azure Entra ID", icon: Shield, level: 88 },
        { name: "Intune / Autopilot", icon: Globe, level: 92 },
        { name: "SCCM / MECM", icon: Server, level: 85 },
        { name: "AI Integration (LLMs)", icon: Cpu, level: 80 },
    ],
    // ==========================================
    // PROJETOS DESTAQUE (4 Projetos)
    // ==========================================
    projects: [
        {
            title: "AI-Driven Incident Response & Ops Automation",
            icon: Workflow, 
            tech: ["Python", "OpenAI API", "ServiceNow", "Azure Functions"],
            description: "Arquitetura de AI-Ops que ingere logs de incidentes críticos, utiliza LLMs para análise de causa raiz (RCA) e dispara playbooks de remediação automática. Integração direta com ITSM para fechamento de tickets.",
            impact: "Redução de 40% no MTTR (Mean Time to Repair) e automação de 65% dos chamados L1, liberando a equipe para engenharia estratégica."
        },
        {
            title: "Zero-Trust Endpoint Architecture Migration",
            icon: Shield, 
            tech: ["Intune", "Entra ID", "Autopilot", "Defender XDR"],
            description: "Transformação digital migrando 5.000+ ativos de gestão legada (GPO) para Modern Management. Implementação de provisionamento Zero-Touch (Autopilot) e políticas de Acesso Condicional baseadas em risco do dispositivo.",
            impact: "Eliminação de VPN para compliance, redução de 75% no tempo de onboarding e aumento do Security Score em 35 pontos."
        },
        {
            title: "Enterprise Patch Compliance & Vulnerability Mgmt",
            icon: RefreshCw,
            tech: ["SCCM", "Windows Autopatch", "PowerShell", "Log Analytics"],
            description: "Orquestração de anéis de atualização (Update Rings) para parque híbrido. Desenvolvimento de scripts de 'Force Compliance' que detectam e corrigem agentes de update corrompidos automaticamente.",
            impact: "Atingimento de 98% de conformidade de patches críticos em <7 dias, mitigando vetores de ataque Zero-Day em larga escala."
        },
        {
            title: "Identity Hardening & Privileged Access (PAM)",
            icon: Key,
            tech: ["Azure LAPS", "MFA Conditional Access", "Tiering Model"],
            description: "Implementação de Windows LAPS para rotação de senhas de administrador local e reestruturação de permissões RBAC. Endurecimento do perímetro de identidade contra movimentos laterais.",
            impact: "Erradicação de credenciais administrativas estáticas e cobertura de 100% de MFA resistente a phishing para contas privilegiadas."
        }
    ],
    experience: [
        {
            company: "JSL S.A.",
            role: "IT Operations Analyst",
            period: "2024 - Presente",
            type: "Full-time",
            desc: "Liderança técnica na modernização de Ops.",
            stack: ["Python", "Azure Automation", "AI-Ops"],
            achievements: [
                "Engenharia de Automação e Scripting (Python/PS).",
                "Implementação de IA Generativa para análise de logs.",
                "Self-Healing para correção autônoma de endpoints."
            ]
        },
        {
            company: "Grupo Simpar S.A.",
            role: "Analista de Infraestrutura & Automação",
            period: "2022 - 2024",
            type: "Full-time",
            desc: "Sustentação crítica e evolução de arquitetura.",
            stack: ["SCCM", "Intune", "Security"],
            achievements: [
                "Redução drástica de MTTR via automação.",
                "Gestão de Ciclo de Vida (LCM) de ativos.",
                "Hardening de segurança (LAPS, Bitlocker)."
            ]
        },
        {
            company: "Shibata Supermercados",
            role: "Analista de Suporte & Infraestrutura",
            period: "2018 - 2021",
            type: "Full-time",
            desc: "Gestão de infraestrutura de alta disponibilidade.",
            stack: ["Windows Server", "Networking", "VPN"],
            achievements: [
                "Administração de Servidores Windows/Linux.",
                "Gestão de conectividade em ambiente crítico."
            ]
        }
    ],
    certifications: [
        { inst: "FIAP", name: "Especialização em IA & Inovação", domain: "fiap.com.br", year: "2025" },
        { inst: "Alura", name: "AI Engineer (Formação Completa)", domain: "alura.com.br", year: "2025" },
        { inst: "Cisco", name: "CyberOps Associate", domain: "cisco.com", year: "2024" },
        { inst: "IBSEC", name: "Redes Industriais Seguras", domain: "ibsec.com.br", year: "2024" },
        { inst: "Google", name: "Google Cloud Platform", domain: "cloud.google.com", year: "2023" },
        { inst: "CertiProf", name: "Scrum Foundation & COBIT", domain: "certiprof.com", year: "2023" }
    ],
    education: [
        { school: "Anhanguera", degree: "Engenharia de Computação", status: "Cursando" },
        { school: "Anhanguera", degree: "Redes de Computadores", status: "Concluído" }
    ]
};

// ==========================================
// COMPONENTES UI
// ==========================================

const CodeBlock = () => (
    <div className="bg-[#0d1117] rounded-lg border border-slate-700 font-mono text-xs md:text-sm shadow-2xl overflow-hidden relative group w-full max-w-[90vw] md:max-w-full mx-auto">
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-700">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-slate-500 text-[10px] md:text-xs">profile_config.json</span>
        </div>
        <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <div className="min-w-[300px]"> {/* Garante largura mínima para scroll no mobile */}
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">1</span>
                    <span><span className="text-purple-400">class</span> <span className="text-yellow-300">SystemArchitect</span>:</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">2</span>
                    <span className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">3</span>
                    <span className="pl-8">self.name = <span className="text-green-400">"{portfolioData.hero.name}"</span></span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">4</span>
                    <span className="pl-8">self.role = <span className="text-green-400">"Systems Eng."</span></span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">5</span>
                    <span className="pl-8">self.focus = [<span className="text-green-400">"Auto"</span>, <span className="text-green-400">"Sec"</span>]</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">6</span>
                    <span>&nbsp;</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">7</span>
                    <span className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">deploy</span>(self):</span>
                </div>
                <div className="flex">
                    <span className="text-slate-600 select-none w-6 text-right mr-4">8</span>
                    <span className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Optimized"</span></span>
                </div>
                
                {/* Cursor piscante */}
                <div className="flex mt-2">
                     <span className="text-slate-600 select-none w-6 text-right mr-4">9</span>
                     <span className="pl-4 text-blue-500 animate-pulse">_</span>
                </div>
            </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
    </div>
);

const SectionHeader = ({ title, icon: Icon, subtitle }) => (
    <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                <Icon size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-slate-400 text-sm md:text-base md:ml-12 border-l border-slate-700 pl-4">{subtitle}</p>}
    </div>
);

const TechBadge = ({ icon: Icon, name }) => (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-xs md:text-sm font-mono hover:border-blue-500 hover:text-blue-400 transition-all cursor-default active:scale-95 duration-150">
        <Icon size={14} />
        <span>{name}</span>
    </div>
);

// ==========================================
// APP PRINCIPAL
// ==========================================
export default function App() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
            
            {/* BACKGROUND GRID */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>
            
            {/* RADIAL GLOWS (Reduzidos no mobile) */}
            <div className="fixed top-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs md:text-sm font-bold text-white">
                        <Terminal size={18} className="text-blue-500" />
                        <span>SAMUEL_LIMA<span className="animate-pulse">_</span></span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> SYSTEM: ONLINE</span>
                        <span>V.2.0.25</span>
                    </div>

                    {/* Mobile Menu Icon (Decorativo para simular app) */}
                    <div className="md:hidden text-slate-400">
                        <Activity size={18} className="text-green-500" />
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
                
                {/* HERO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
                    <div className={`space-y-6 md:space-y-8 order-2 lg:order-1 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs text-blue-400 font-mono mb-4 md:mb-6">
                                <Activity size={12} />
                                <span>Open to new challenges</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
                                Automating <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    Intelligence.
                                </span>
                            </h1>
                            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                                {portfolioData.hero.role} <span className="text-slate-600">/</span> {portfolioData.hero.subRole}
                            </p>
                        </div>

                        <p className="text-slate-400 text-sm md:text-base border-l-2 border-slate-700 pl-4 max-w-lg">
                            {portfolioData.hero.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <a href={`mailto:${portfolioData.hero.email}`} className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-900/20 group w-full sm:w-auto">
                                <Mail size={18} /> 
                                <span>Contact Me</span>
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href={portfolioData.hero.linkedin} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 active:bg-slate-800 text-white rounded-lg border border-slate-700 font-medium transition-all w-full sm:w-auto">
                                <Linkedin size={18} /> 
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: PROFILE + CODE */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10 flex flex-col items-center lg:block">
                            {/* Grid wrapper para desktop, stack para mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full max-w-md lg:max-w-none mx-auto">
                                
                                {/* Card com Foto */}
                                <div className="bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-2xl md:rotate-2 md:hover:rotate-0 transition-all duration-500 w-3/4 md:w-full mx-auto">
                                    <img 
                                        src={portfolioData.hero.avatar} 
                                        alt="Samuel Lima" 
                                        className="w-full aspect-square object-cover object-top rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="mt-3 px-2 pb-1 flex justify-between items-center font-mono text-[10px] md:text-xs text-slate-500">
                                        <span>IMG_2025.RAW</span>
                                        <span>2.4 MB</span>
                                    </div>
                                </div>
                                
                                {/* Card de Código Flutuante - Ajustado para mobile */}
                                <div className="mt-6 md:-ml-10 md:mt-20 z-20 w-full">
                                    <CodeBlock />
                                </div>
                            </div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>

                {/* TECH STACK GRID */}
                <div className="mb-20 md:mb-32">
                    <p className="text-center font-mono text-[10px] md:text-xs text-slate-500 mb-6 md:mb-8 uppercase tracking-widest">Core Technologies</p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
                        {portfolioData.techStack.map((tech, i) => (
                            <TechBadge key={i} icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                </div>

                {/* EXPERIENCE TIMELINE */}
                <section className="mb-20 md:mb-32">
                    <SectionHeader 
                        title="Engineering Log" 
                        icon={GitBranch} 
                        subtitle="Histórico de atuação em ambientes de missão crítica."
                    />

                    {/* Linha vertical - Ajustada: Esquerda no mobile, Centro no desktop */}
                    <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        {portfolioData.experience.map((job, index) => (
                            <div key={index} className="relative flex items-center md:justify-center group">
                                
                                {/* Content Card */}
                                <div className={`
                                    w-[calc(100%-40px)] ml-10 md:ml-0 md:w-[calc(50%-40px)] 
                                    bg-[#111] p-5 md:p-6 rounded-xl border border-slate-800 
                                    hover:border-blue-500/50 transition-all shadow-xl 
                                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                                `}>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                                        <div>
                                            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                                            <span className="text-xs md:text-sm text-slate-400 font-mono">{job.company}</span>
                                        </div>
                                        <span className="text-[10px] md:text-xs font-mono px-2 py-1 bg-slate-800 rounded text-slate-400 border border-slate-700 whitespace-nowrap">{job.period}</span>
                                    </div>
                                    <p className="text-slate-400 text-xs md:text-sm mb-4 leading-relaxed">{job.desc}</p>
                                    
                                    <div className="space-y-2 mb-4">
                                        {job.achievements.map((ach, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                                <span className="mt-1 text-blue-500 shrink-0">➜</span>
                                                <span>{ach}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/50">
                                        {job.stack.map((s, i) => (
                                            <span key={i} className="text-[10px] uppercase font-mono text-slate-500">#{s}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Dot on timeline */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-slate-900 border-2 border-slate-600 rounded-full -translate-x-1.5 md:-translate-x-1/2 z-10 group-hover:border-blue-500 group-hover:scale-125 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURED PROJECTS (4 PROJETOS ATUALIZADOS) */}
                <section className="mb-20 md:mb-32">
                    <SectionHeader 
                        title="Featured Projects" 
                        icon={Zap} 
                        subtitle="Arquiteturas de solução e automações de alto impacto implementadas."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.projects.map((proj, i) => (
                            <div key={i} className="bg-[#111] border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group relative overflow-hidden">
                                {/* Background glow on hover */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-slate-900 rounded-lg text-blue-400 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                                            <proj.icon size={24} />
                                        </div>
                                        <ExternalLink size={16} className="text-slate-600 group-hover:text-blue-400 transition-colors cursor-pointer" />
                                    </div>
                                    
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {proj.tech.map((t, idx) => (
                                            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-slate-800/50 rounded text-slate-400 border border-slate-700/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 border-b border-slate-800 pb-4">
                                        {proj.description}
                                    </p>
                                    
                                    <div className="flex items-start gap-2">
                                        <div className="mt-1 text-green-500"><Activity size={14} /></div>
                                        <p className="text-xs text-slate-300 font-medium">
                                            <span className="text-slate-500 uppercase text-[10px] tracking-wider block mb-0.5">Business Impact</span>
                                            {proj.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CERTIFICATIONS & EDUCATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
                    
                    {/* Certifications */}
                    <section>
                        <SectionHeader title="Credentials" icon={Shield} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {portfolioData.certifications.map((cert, i) => (
                                <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors group flex flex-col justify-between h-full active:scale-[0.98] duration-150">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="w-8 h-8 rounded bg-white p-1 flex items-center justify-center">
                                             <img 
                                                src={`https://www.google.com/s2/favicons?domain=${cert.domain}&sz=64`} 
                                                alt={cert.inst}
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {e.target.style.display='none';}}
                                            />
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-1.5 rounded">{cert.year}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2">{cert.name}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{cert.inst}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                         <SectionHeader title="Education" icon={Database} />
                         <div className="space-y-3 md:space-y-4">
                            {portfolioData.education.map((edu, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                    <div className="p-2 md:p-3 bg-slate-800 rounded-full text-slate-400 shrink-0">
                                        <Database size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
                                        <p className="text-xs text-slate-400">{edu.school}</p>
                                        <span className={`text-[10px] font-mono mt-1 inline-block px-2 rounded ${edu.status === 'Cursando' ? 'bg-blue-900/30 text-blue-400' : 'bg-green-900/30 text-green-400'}`}>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                         </div>

                         {/* System Status Widget (Decorative) */}
                         <div className="mt-8 p-4 bg-black border border-slate-800 rounded-lg font-mono text-xs text-slate-500 space-y-2 shadow-inner">
                             <div className="flex justify-between">
                                 <span>CLUSTER STATUS:</span>
                                 <span className="text-green-500">HEALTHY</span>
                             </div>
                             <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                                 <div className="bg-blue-600 w-[85%] h-full rounded-full"></div>
                             </div>
                             <div className="flex justify-between pt-1">
                                 <span>UPTIME:</span>
                                 <span>99.99%</span>
                             </div>
                         </div>
                    </section>
                </div>

            </main>

            <footer className="border-t border-slate-800 bg-[#050505] py-8 text-center px-6">
                <p className="font-mono text-xs text-slate-600">
                    Deployed by <span className="text-slate-400">Samuel Lima</span> via React & Tailwind
                </p>
                <p className="font-mono text-[10px] text-slate-700 mt-2">
                    ID: {Math.random().toString(36).substring(7).toUpperCase()}
                </p>
            </footer>

        </div>
    );
}