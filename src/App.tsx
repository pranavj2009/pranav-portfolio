import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Database } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <span className="text-xl font-bold text-blue-600">Pranav.dev</span>
              <div className="flex space-x-8">
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Senior SDET & <br/>
                <span className="text-blue-600">Automation Architect</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Building robust test automation frameworks and ensuring software quality through modern CI/CD practices. Expert in Java, TypeScript, and Playwright.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
                  Get in Touch
                </a>
                <a href="https://github.com/pranavj2009" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Automation */}
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Test Automation</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Playwright & Cypress</li>
                  <li>• Selenium WebDriver</li>
                  <li>• Appium (Mobile)</li>
                  <li>• API Testing (RestAssured)</li>
                </ul>
              </div>

              {/* Languages */}
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Languages & Tools</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• TypeScript / JavaScript</li>
                  <li>• Java / Python</li>
                  <li>• Git & GitHub Actions</li>
                  <li>• Docker & Kubernetes</li>
                </ul>
              </div>

              {/* Architecture */}
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Architecture</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Framework Design</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Performance Testing</li>
                  <li>• Cloud Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all">
                <div className="bg-slate-100 h-48 flex items-center justify-center">
                  <span className="text-slate-400">Project Screenshot</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Playwright BDD Framework</h3>
                  <p className="text-slate-600 mb-6">
                    A comprehensive BDD testing framework using Playwright, Cucumber, and TypeScript. Features include parallel execution, retry logic, and rich HTML reporting.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/pranavj2009" target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all">
                <div className="bg-slate-100 h-48 flex items-center justify-center">
                  <span className="text-slate-400">Project Screenshot</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">API Testing Suite</h3>
                  <p className="text-slate-600 mb-6">
                    Robust API automation suite using RestAssured and Java. Includes data-driven testing, schema validation, and integration with Jenkins pipelines.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/pranavj2009" target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-slate-900 text-slate-300 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            <div className="flex justify-center gap-8 mb-12">
              <a href="https://github.com/pranavj2009" target="_blank" className="hover:text-white transition-colors">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/pranav" target="_blank" className="hover:text-white transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="mailto:contact@pranav.dev" className="hover:text-white transition-colors">
                <Mail size={32} />
              </a>
            </div>
            <p className="text-slate-500">
              © {new Date().getFullYear()} Pranav. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
