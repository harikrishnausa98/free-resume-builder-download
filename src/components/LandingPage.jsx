import React from 'react';

export default function LandingPage({ onCreateResume, onSignIn }) {
  return (
    <div className="selection:bg-primary-fixed selection:text-on-primary-fixed bg-background text-on-surface min-h-screen">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full glass-nav z-50">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-purple-700 dark:text-purple-400">Yari Resumes</div>
          <div className="hidden md:flex items-center space-x-10 font-inter tracking-tight font-medium">
            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">ATS Templates</a>
            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Modern Templates</a>
          </div>
          <div className="flex items-center space-x-6 font-inter tracking-tight font-medium">
            <button onClick={onSignIn} className="text-slate-600 hover:text-purple-600 transition-colors outline-none px-4 py-2 border border-outline/20 rounded hover:border-purple-600/30">Sign In</button>
            <button onClick={onCreateResume} className="hero-gradient text-white px-6 py-2.5 rounded font-bold hover:scale-[1.02] transition-transform duration-200">Create Resume</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="label-md uppercase tracking-[0.05em] text-secondary font-bold text-xs">Architectural Career Tools</span>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
                Build Your Professional <span className="text-transparent bg-clip-text hero-gradient">Resume</span> in Minutes
              </h1>
            </div>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Elevate your professional narrative with ATS-friendly templates curated for the modern architect of business. Structure your success with intentional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={onCreateResume} className="hero-gradient text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform duration-200 shadow-xl shadow-primary/10">Build Your Resume</button>
              <button onClick={onCreateResume} className="bg-white border border-outline/20 text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:scale-[1.02] transition-transform duration-200">Browse Templates</button>
            </div>
          </div>
          
          <div className="relative group hidden md:block">
            {/* Architectural Layering Mockup */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-surface-container-low rounded-xl p-4 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 animate-shuffle">
              <img className="rounded shadow-sm brightness-[0.98]" alt="A high-fidelity, professional resume document mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-ljH6YsjiCcS-5FICvLhcFZEfZfLZiCjgUEYB1fgXCzkyMMlExCr4X8lHGbAgv6UO0LoDBct1agJLqFyeLQKD894rQIK8xYa7YOR8v7wGIevH65JGMdAIKUiUDVqGizXS2wVbp314bHiw6B_GNLTvOkARVqANbc7ynibbFrcb9j07ZNIhhonU2BA6K4km299zCzOHB-j_QLQtRpWRKwbsO3dQNaXZOvjEiQ3Lx3U_lXoLQNi_P-Wt8ILbLHP-dw7a4amurbESQ"/>
              <div className="absolute -bottom-8 -right-8 w-64 md:w-80 bg-surface-container-lowest rounded-xl p-4 shadow-2xl -rotate-6 group-hover:-rotate-2 transition-all duration-500 delay-75 animate-sub-shuffle">
                <img className="rounded shadow-sm" alt="Modern resume template" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ008CCwbHMebAIJ3WD1cHa4acJ1gDrYW4Asgu5S8wut6fkL7X3s69fa7uCLxhr4caMKsBNQPWKxuDFrADxNrTnzMRxrr0yHryHKeZVlmUqd5sN7NdY7TVXeyBZWWVm7G9v2OcIKGP8ON2wMcis-vokoO0sbSoz1pFCuy5vLwU7JLEWZxJ-gt6HE7pu7usQov4WY8eEI_dC1BsRPa4FfkGqYnsdj_g6KradKXTUtJyIlktAJEq-gKWalcs_yNerKmYj3X1NmxwA"/>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-12">
            <div className="bg-surface-container-lowest rounded-2xl p-12 md:p-20 shadow-sm border border-outline-variant/15 flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3 space-y-6">
                <h2 className="text-4xl font-black tracking-tighter text-on-surface">About Yari Resumes</h2>
                <div className="h-1 w-20 hero-gradient rounded-full"></div>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  We believe that every career deserves a beautiful frame. Yari Resumes merges technical ATS precision with editorial-grade aesthetics.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">edit_note</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">Easy resume creation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Focus on your story while our intuitive curator handles the architectural layout automatically.</p>
                </div>
                <div className="space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">robot_2</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">ATS-friendly templates</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Engineered to pass through screening algorithms without sacrificing visual authority or brand identity.</p>
                </div>
                <div className="space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">architecture</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">Modern designs</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Inspired by architectural blueprints and premium editorial magazines for a look that commands respect.</p>
                </div>
                <div className="space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">Secure &amp; Private</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Your professional data is encrypted and handled with the highest degree of architectural integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Chips */}
        <section className="max-w-7xl mx-auto px-12 py-16 flex flex-wrap justify-center gap-4">
          <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Project Management</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Strategic Design</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Growth Leadership</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Data Architecture</span>
          <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Brand Strategy</span>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 w-full border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 max-w-7xl mx-auto w-full">
          <div className="space-y-2 text-center md:text-left mb-8 md:mb-0">
            <div className="text-lg font-bold text-slate-900 dark:text-white">Yari Resumes</div>
            <p className="text-sm font-inter tracking-wide text-slate-500 dark:text-slate-400">© 2024 Yari Resumes. Architectural Curator.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <a className="text-sm font-inter tracking-wide text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors opacity-80 hover:opacity-100" href="#">Contact</a>
            <a className="text-sm font-inter tracking-wide text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors opacity-80 hover:opacity-100" href="#">Terms and Conditions</a>
            <a className="text-sm font-inter tracking-wide text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}