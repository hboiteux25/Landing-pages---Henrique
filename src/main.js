import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a href="#" class="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      Henrique.
    </a>
    <nav>
      <ul class="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero container">
      <div class="hero-glow"></div>
      <div class="label-sm">System Status: Online</div>
      <h1 class="headline-xl">Building High-Performance Digital Solutions.</h1>
      <p class="body-md">
        I'm Henrique, a developer specializing in OutSystems and modern web architectures. 
        I transform complex business requirements into scalable, precise, and maintainable applications.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Initialize Contact</a>
      </div>
    </section>

    <section id="skills" class="container">
      <h2 class="headline-lg" style="margin-bottom: var(--spacing-md);">Technical Proficiencies</h2>
      <div class="glass-panel" style="padding: var(--spacing-lg);">
        <h3 style="margin-bottom: var(--spacing-xs); font-family: var(--font-headline); color: #fff;">Core Stack</h3>
        <div class="chips-container" style="margin-bottom: var(--spacing-md);">
          <span class="chip">[ OutSystems ]</span>
          <span class="chip">[ React ]</span>
          <span class="chip">[ JavaScript ]</span>
          <span class="chip">[ C# ]</span>
          <span class="chip">[ SQL Server ]</span>
        </div>
        
        <h3 style="margin-bottom: var(--spacing-xs); font-family: var(--font-headline); color: #fff;">Architecture & Tools</h3>
        <div class="chips-container">
          <span class="chip">[ Microservices ]</span>
          <span class="chip">[ REST APIs ]</span>
          <span class="chip">[ CI/CD ]</span>
          <span class="chip">[ Git ]</span>
          <span class="chip">[ Agile/Scrum ]</span>
        </div>
      </div>
    </section>

    <section id="projects" class="container">
      <h2 class="headline-lg" style="margin-bottom: var(--spacing-md);">Deployed Modules</h2>
      <div class="projects-grid">
        
        <div class="project-card glass-panel">
          <div class="project-card-header">
            <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <a href="#" style="color: var(--on-surface-variant);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
          </div>
          <h3>Enterprise ERP Migration</h3>
          <p>Lead the migration of a legacy system to OutSystems, reducing operational costs and improving system latency by 40%.</p>
          <div class="chips-container">
            <span class="chip">OutSystems</span>
            <span class="chip">SQL</span>
          </div>
        </div>

        <div class="project-card glass-panel">
          <div class="project-card-header">
            <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <a href="#" style="color: var(--on-surface-variant);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
          </div>
          <h3>Dashboard Analytics</h3>
          <p>Real-time data visualization interface for institutional intelligence, featuring high-density data tables and dynamic filtering.</p>
          <div class="chips-container">
            <span class="chip">React</span>
            <span class="chip">REST API</span>
          </div>
        </div>

        <div class="project-card glass-panel">
          <div class="project-card-header">
            <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <a href="#" style="color: var(--on-surface-variant);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
          </div>
          <h3>Pet Shop Management</h3>
          <p>Complete management system for pet care facilities with scheduling, inventory, and automated reminders.</p>
          <div class="chips-container">
            <span class="chip">OutSystems</span>
            <span class="chip">UX/UI</span>
          </div>
        </div>

      </div>
    </section>
  </main>

  <footer id="contact">
    <p>System Architect: Henrique Boiteux</p>
    <p style="margin-top: var(--spacing-xs);"><a href="mailto:hello@example.com" class="nav-link">Initialize Connection</a></p>
  </footer>
`;
