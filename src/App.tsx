import { FormEvent, ReactNode, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "award"
  | "check"
  | "chevron"
  | "cloud"
  | "code"
  | "download"
  | "email"
  | "github"
  | "globe"
  | "graduation"
  | "layers"
  | "linkedin"
  | "lock"
  | "menu"
  | "network"
  | "phone"
  | "search"
  | "send"
  | "shield"
  | "terminal"
  | "x";

const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  cloud: <path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A6 6 0 0 1 19.8 11 4 4 0 0 1 17.5 19Z" />,
  code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.6a14 14 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4M9 19c-3 .9-3-1.5-4.2-2" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c3 2.6 9 2.6 12 0v-4.5M22 9v7" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  network: <><circle cx="12" cy="5" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /><path d="m10.5 7.5-4 8M13.5 7.5l4 8M8 18h8" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2.1Z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
  terminal: <><rect x="2" y="3" width="20" height="18" rx="2" /><path d="m6 8 4 4-4 4M12 16h6" /></>,
  x: <><path d="m5 5 14 14M19 5 5 19" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">{paths[name]}</g>
    </svg>
  );
}

function ActionLink({
  children,
  href,
  icon,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  icon?: IconName;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}{icon && <Icon name={icon} size={17} />}
    </a>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow"><span>//</span> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

const skills = [
  { icon: "shield" as IconName, title: "Security Operations", featured: true, items: ["SIEM: Splunk, Wazuh, ELK", "Log Analysis", "Threat Hunting", "Incident Response", "Alert Triage", "MITRE ATT&CK", "Cyber Kill Chain", "Threat Intelligence", "Phishing Analysis", "Digital Forensics"] },
  { icon: "search" as IconName, title: "Offensive Security", items: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit", "Wireshark", "OWASP Top 10", "Web App Pentesting", "Nessus / OpenVAS", "Privilege Escalation", "Hydra / John / Hashcat"] },
  { icon: "network" as IconName, title: "Network Security", items: ["TCP/IP", "DNS & HTTP/S", "Firewalls", "Snort / Suricata", "VPN", "Network Segmentation", "Packet Analysis"] },
  { icon: "cloud" as IconName, title: "Cloud & DevSecOps", items: ["AWS Security Services", "Azure Sentinel & Defender", "Docker", "Terraform", "Linux Hardening", "CI/CD Security"] },
  { icon: "code" as IconName, title: "Programming", items: ["Python", "Bash", "PowerShell", "JavaScript", "C/C++", "SQL", "Git / GitHub"] },
  { icon: "terminal" as IconName, title: "Systems & People", items: ["Ubuntu / Kali / Parrot", "Windows Server", "Active Directory", "Analytical Thinking", "Report Writing", "Teamwork", "Continuous Learning"] },
];

const certifications = [
  ["Google Cybersecurity", "Coursera", "In Progress"],
  ["ISC2 Certified in Cybersecurity", "ISC2", "In Progress"],
  ["Security+ (SY0-701)", "CompTIA", "Planned"],
  ["Network+", "CompTIA", "Planned"],
  ["CCNA", "Cisco", "Planned"],
  ["Splunk Core Certified User", "Splunk", "Planned"],
  ["SOC Level 1 & Pre-Security", "TryHackMe", "In Progress"],
  ["SC-900", "Microsoft", "Planned"],
  ["SC-200", "Microsoft", "Planned"],
  ["AWS Cloud Practitioner", "AWS", "Planned"],
  ["AZ-900", "Microsoft", "Planned"],
  ["CySA+", "CompTIA", "Planned"],
  ["eJPT", "INE Security", "Planned"],
  ["Blue Team Level 1", "Security Blue Team", "Planned"],
  ["AWS Security – Specialty", "AWS", "Long-term"],
  ["CEH / OSCP", "EC-Council / OffSec", "Long-term"],
];

const projects = [
  { icon: "shield" as IconName, number: "01", title: "Home SOC Lab", desc: "A virtual SOC with Wazuh, ELK, and Splunk, monitoring Windows and Linux endpoints with custom detections and live dashboards.", tags: ["Wazuh", "Splunk", "ELK", "Sysmon"] },
  { icon: "email" as IconName, number: "02", title: "Phishing Email Analyzer", desc: "Python tooling to extract headers, URLs, and attachments, then enrich indicators through VirusTotal threat intelligence.", tags: ["Python", "VirusTotal", "OSINT"] },
  { icon: "globe" as IconName, number: "03", title: "Web App Assessment", desc: "Security testing of DVWA and OWASP Juice Shop with findings translated into a professional penetration test report.", tags: ["Burp Suite", "OWASP", "Nmap"] },
  { icon: "cloud" as IconName, number: "04", title: "Secure AWS Architecture", desc: "A hardened VPC with least-privilege IAM, CloudTrail, GuardDuty, encryption, and reproducible Terraform deployment.", tags: ["AWS", "Terraform", "GuardDuty"] },
  { icon: "network" as IconName, number: "05", title: "Traffic & Intrusion Detection", desc: "Network analysis detecting scans, brute force activity, and malware beacons across controlled lab traffic.", tags: ["Wireshark", "Suricata", "PCAP"] },
  { icon: "layers" as IconName, number: "06", title: "IR Playbooks & Threat Hunting", desc: "Actionable playbooks for ransomware, phishing, and brute force, plus ATT&CK-driven hunts in Splunk BOTS.", tags: ["MITRE ATT&CK", "Splunk", "IR"] },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState(0);
  const roles = ["Cyber Security Expert", "SOC Analyst", "Cloud Security Engineer"];

  useEffect(() => {
    const timer = window.setInterval(() => setRole((current) => (current + 1) % roles.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#top"><span>TA</span><b>_SEC</b></a>
          <nav className={mobileOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
            {["About", "Skills", "Certifications", "Projects", "Education", "Contact"].map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMobileOpen(false)}>{item}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <ActionLink href="#contact" icon="download" variant="secondary">Download CV</ActionLink>
            <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
              <Icon name={mobileOpen ? "x" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> Available for opportunities</div>
              <div className="command"><span>root@portfolio:~$</span> &gt; whoami</div>
              <h1>TAREQ <span>AHMED</span></h1>
              <div className="role-line"><span className="prompt">&gt;</span> <strong key={role}>{roles[role]}</strong><span className="cursor" /></div>
              <p className="hero-tagline">Software Engineer specializing in Cyber Security, defending systems, detecting threats, and securing the cloud.</p>
              <div className="hero-buttons">
                <ActionLink href="#projects" icon="arrow">View Projects</ActionLink>
                <ActionLink href="#contact" variant="secondary">Contact Me</ActionLink>
                <ActionLink href="#contact" icon="download" variant="ghost">Download CV</ActionLink>
              </div>
              <div className="social-row">
                <span>CONNECT</span><i />
                <a href="https://github.com/TareqAhmed0" aria-label="GitHub"><Icon name="github" /></a>
                <a href="https://linkedin.com/in/tareq-ahmed" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href="mailto:ahmed242-35-580@diu.edu.bd" aria-label="Email"><Icon name="email" /></a>
              </div>
            </div>
            <div className="portrait-wrap" aria-label="Tareq Ahmed profile placeholder">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="portrait-shield">
                <img src="/images/tareq-ahmed-profile.png" alt="Tareq Ahmed" />
                <div className="scan-line" />
              </div>
              <div className="floating-chip chip-top"><Icon name="lock" size={16} /> SYSTEM SECURE</div>
              <div className="floating-chip chip-bottom"><span className="status-dot" /> MONITORING ACTIVE</div>
            </div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><Icon name="chevron" /></div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionTitle eyebrow="01. About" title="Built to defend." description="A security-focused engineer turning curiosity into practical defense." />
            <div className="about-grid">
              <div className="about-copy">
                <p>I’m a Software Engineering student majoring in <strong>Cyber Security at Daffodil International University</strong>. I’m driven by the challenge of understanding how systems fail—and building smarter ways to keep them secure.</p>
                <p>My focus spans SOC operations, threat detection, incident response, ethical hacking, and cloud security. I learn by doing: building labs, analyzing real traffic, writing detections, and documenting every finding clearly.</p>
                <p>My goal is to become a security engineer who bridges deep technical work with business-aware risk decisions.</p>
              </div>
              <div className="stats-grid">
                {[["12+", "Projects Built"], ["50+", "Labs Completed"], ["04", "Certifications"], ["80+", "CTF / Rooms Solved"]].map(([value, label]) => (
                  <Card className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionTitle eyebrow="02. Capabilities" title="Security arsenal." description="Tools, platforms, and methodologies I use to investigate, defend, and build." />
            <div className="skills-grid">
              {skills.map((skill) => (
                <Card className={skill.featured ? "skill-card featured" : "skill-card"} key={skill.title}>
                  <div className="card-heading"><span className="icon-box"><Icon name={skill.icon} /></span><h3>{skill.title}</h3></div>
                  <div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container">
            <SectionTitle eyebrow="03. Credentials" title="Always leveling up." description="A deliberate learning path from core principles to advanced security operations." />
            <div className="cert-grid">
              {certifications.map(([name, issuer, status]) => (
                <Card className="cert-card" key={name}>
                  <div className="cert-icon"><Icon name="award" /></div>
                  <div><h3>{name}</h3><p>{issuer}</p></div>
                  <span className={`status ${status.toLowerCase().replace(/[^a-z]/g, "")}`}>{status}</span>
                </Card>
              ))}
            </div>
            <Card className="roadmap">
              <div className="roadmap-head"><div><span className="eyebrow"><span>//</span> NEXT OBJECTIVE</span><h3>Certification Roadmap</h3></div><Icon name="network" size={32} /></div>
              <div className="roadmap-track">
                {[
                  ["Foundation", "CC · Network+"],
                  ["Security", "Security+ · SC-900"],
                  ["Specialization", "CySA+ · SC-200 · BTL1"],
                  ["Cloud", "AWS · Azure"],
                  ["Advanced", "AWS Security · OSCP"],
                ].map(([stage, certs], index) => (
                  <div className="roadmap-step" key={stage}><div className="roadmap-node">{String(index + 1).padStart(2, "0")}</div><strong>{stage}</strong><span>{certs}</span></div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="container">
            <SectionTitle eyebrow="04. Selected work" title="Security in practice." description="Hands-on projects built to solve realistic security problems." />
            <div className="projects-grid">
              {projects.map((project) => (
                <Card className="project-card" key={project.title}>
                  <div className="project-visual"><span>{project.number}</span><Icon name={project.icon} size={48} /><div className="visual-grid" /></div>
                  <div className="project-content">
                    <h3>{project.title}</h3><p>{project.desc}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                    <div className="project-links"><a href="https://github.com/TareqAhmed0"><Icon name="github" size={17} /> GitHub</a><a href="#contact">Details <Icon name="arrow" size={17} /></a></div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="center-action"><ActionLink href="https://github.com/TareqAhmed0" icon="github" variant="secondary">View all on GitHub</ActionLink></div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionTitle eyebrow="05. Education" title="The learning path." />
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot"><Icon name="graduation" size={18} /></span>
                <div className="timeline-date">2024 — 2028</div>
                <Card className="timeline-card"><span className="current">CURRENT</span><h3>B.Sc. in Software Engineering</h3><h4>Cyber Security Major</h4><p>Daffodil International University</p><div className="tag-list"><span className="tag">Dhaka, Bangladesh</span><span className="tag">Undergraduate</span></div></Card>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"><Icon name="graduation" size={18} /></span>
                <div className="timeline-date">2021 — 2023</div>
                <Card className="timeline-card"><h3>Higher Secondary Certificate</h3><h4>Science</h4><p>Shah Makhdum College</p></Card>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <SectionTitle eyebrow="06. Contact" title="Let’s secure something together." description="Have an opportunity, project, or security challenge in mind? My inbox is open." />
            <div className="contact-grid">
              <div className="contact-info">
                <div>
                  <span className="eyebrow"><span>//</span> DIRECT CHANNELS</span>
                  <h3>Start a conversation.</h3>
                  <p>I’m currently open to internships, entry-level SOC roles, security collaborations, and ambitious projects.</p>
                </div>
                {[
                  ["email" as IconName, "EMAIL", "ahmed242-35-580@diu.edu.bd", "mailto:ahmed242-35-580@diu.edu.bd"],
                  ["phone" as IconName, "PHONE", "01315500511", "tel:01315500511"],
                  ["linkedin" as IconName, "LINKEDIN", "linkedin.com/in/tareq-ahmed", "https://linkedin.com/in/tareq-ahmed"],
                  ["github" as IconName, "GITHUB", "github.com/TareqAhmed0", "https://github.com/TareqAhmed0"],
                ].map(([icon, label, value, href]) => (
                  <a className="contact-line" href={href} key={label}><span className="icon-box"><Icon name={icon} /></span><span><small>{label}</small><b>{value}</b></span><Icon name="arrow" size={18} /></a>
                ))}
              </div>
              <Card className="contact-form-card">
                <div className="terminal-bar"><span /><span /><span /><b>secure_message.sh</b></div>
                <form onSubmit={submitForm}>
                  <label htmlFor="name">NAME</label><input id="name" name="name" placeholder="Your name" required />
                  <label htmlFor="email">EMAIL</label><input id="email" name="email" placeholder="you@company.com" required type="email" />
                  <label htmlFor="message">MESSAGE</label><textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required rows={5} />
                  <button className="button button-primary submit-button" type="submit">Send Message <Icon name="send" size={17} /></button>
                  <p className="privacy"><Icon name="lock" size={13} /> Your information stays private.</p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top"><span>TA</span><b>_SEC</b></a>
          <p>© 2026 Tareq Ahmed <i /> Securing the digital world</p>
          <div className="footer-links"><a href="https://github.com/TareqAhmed0" aria-label="GitHub"><Icon name="github" /></a><a href="https://linkedin.com/in/tareq-ahmed" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="#top">Back to top <span>↑</span></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
