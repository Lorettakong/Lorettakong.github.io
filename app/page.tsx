const work = [
  { index: '01', title: 'Reliability Evaluation of Uncertainty Calibration and Gompertz-Inspired Regularization', description: 'A reliability-centered benchmark for sparse longitudinal CT lesion prediction, spanning uncertainty calibration, interval sharpness, subgroup behavior, and trajectory regularization.', tags: ['Medical imaging', 'Uncertainty', 'Longitudinal CT'], href: 'https://github.com/Lorettakong/deeplesion-dlt-reliability' },
  { index: '02', title: 'Uncertainty-Aware Mechanistic Correction for Lung Nodule Trajectories', description: 'A Bayesian Gompertz-guided framework that learns population-level mechanistic deviation and uses conformal calibration for more reliable prediction intervals.', tags: ['Bayesian modeling', 'Conformal prediction', 'Lung nodules'], href: 'https://github.com/Lorettakong/ct-nodule-mechanistic-correction' },
  { index: '03', title: 'Diagonal Cache', description: 'Structural interventions on AlphaEdit’s edit-batch covariance cache, studying how cache geometry influences knowledge editing in large language models.', tags: ['Knowledge editing', 'LLMs', 'Representation geometry'], href: 'https://github.com/Lorettakong/diagonal-cache' },
];

const publications = [
  { year: '2026', status: 'Under review', title: 'Uncertainty-Aware Mechanistic Misspecification Correction for Sparse Longitudinal CT-Derived Lung Nodule Trajectory Prediction', venue: 'Biomedical Signal Processing and Control', href: 'https://github.com/Lorettakong/ct-nodule-mechanistic-correction' },
  { year: '2026', status: 'Preprint', title: 'Uncertainty-aware prediction of lung tumor growth from sparse longitudinal CT data via Bayesian physics-informed neural networks', venue: 'arXiv:2605.13560', href: 'https://arxiv.org/abs/2605.13560' },
  { year: '2024', status: 'Published', title: 'Mathematical Model for COVID-19', venue: 'Highlights in Science, Engineering and Technology, 98', href: 'https://doi.org/10.54097/b640hq26' },
  { year: '2024', status: 'Published', title: 'Analytical Examination of GINI Index and Lorenz Curves: A Scientific Inquiry', venue: 'Proceedings of ICEESR 2024', href: 'https://doi.org/10.25236/iceesr.2024.022' },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Loretta Kong, home">LK<span>.</span></a>
      <div className="navLinks"><a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="/Lingfei-Kong-CV.pdf" target="_blank">CV</a></div>
    </nav>

    <section className="hero shell" id="top">
      <aside className="profileCard">
        <div className="portraitFrame"><img src="/lingfei-kong-portrait.jpg" alt="Portrait of Lingfei Kong" /></div>
        <h1>Lingfei Kong</h1>
        <p className="profileRole">B.S. Statistics · Vanderbilt University</p>
        <div className="profileLinks">
          <span>● Nashville, Tennessee</span>
          <a href="mailto:lingfei.kong@vanderbilt.edu">✉ Vanderbilt Email</a>
          <a href="mailto:lingfeikong0930@gmail.com">✉ Personal Email</a>
          <a href="https://github.com/Lorettakong" target="_blank" rel="noreferrer">↗ GitHub</a>
          <a href="/Lingfei-Kong-CV.pdf" target="_blank">↗ Curriculum Vitae</a>
        </div>
      </aside>
      <div className="heroCopy">
        <p className="eyebrow"><span /> About me</p>
        <h2>Hello, I’m Lingfei.</h2>
        <p className="intro">I am a Statistics major and Data Science minor at Vanderbilt University. My research brings together scientific machine learning, Bayesian inference, physics-informed learning, uncertainty quantification, and medical AI.</p>
        <p className="intro secondaryIntro">I am especially interested in reliable models for sparse longitudinal medical data, machine learning for PDEs, and understanding how large language models represent and update knowledge.</p>
        <div className="heroActions"><a className="button primary" href="#publications">Selected publications</a><a className="button quiet" href="#research">Research projects</a></div>
      </div>
    </section>

    <section className="about shell" id="about">
      <p className="sectionLabel">About</p>
      <div className="aboutText">
        <h2>Questions worth pursuing sit between disciplines.</h2>
        <p>My work brings together machine learning, medical imaging, uncertainty quantification, and mechanistic modeling. I am especially interested in methods that remain interpretable and dependable when observations are limited. I also explore knowledge editing for large language models and machine learning for PDEs.</p>
      </div>
    </section>

    <section className="research" id="research"><div className="shell">
      <div className="sectionHead"><div><p className="sectionLabel">Selected research</p><h2>Current work</h2></div><p>Open-source code and manuscript-facing materials.</p></div>
      <div className="workList">{work.map((item) =>
        <a className="workItem" href={item.href} target="_blank" rel="noreferrer" key={item.index}>
          <span className="workIndex">{item.index}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <span className="workArrow" aria-hidden="true">↗</span>
        </a>)}</div>
    </div></section>

    <section className="publications shell" id="publications">
      <div className="sectionHead publicationHead"><div><p className="sectionLabel">Writing & papers</p><h2>Publications</h2></div><a className="textLink" href="/Lingfei-Kong-CV.pdf" target="_blank">Full CV ↗</a></div>
      <div className="publicationList">{publications.map((paper) =>
        <a className="publicationItem" href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
          <span className="pubYear">{paper.year}</span>
          <div><p className="pubStatus">{paper.status}</p><h3>{paper.title}</h3><p>{paper.venue}</p></div>
          <span aria-hidden="true">↗</span>
        </a>)}</div>
    </section>

    <section className="personal shell">
      <p className="sectionLabel">Beyond the work</p>
      <div><h2>Curiosity doesn’t end at the lab door.</h2><p>Outside research, I enjoy theater directing, novel writing, photography, billiards, and puzzle games.</p></div>
    </section>

    <footer id="contact">
      <div className="shell footerInner"><div><p className="sectionLabel">Let’s connect</p><h2>Interested in my work?</h2><div className="emails"><a href="mailto:lingfei.kong@vanderbilt.edu">lingfei.kong@vanderbilt.edu</a><a href="mailto:lingfeikong0930@gmail.com">lingfeikong0930@gmail.com</a></div></div><a className="button light" href="https://github.com/Lorettakong" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div>
      <div className="shell footerBase"><span>© {new Date().getFullYear()} Loretta Kong</span><span>Research · Build · Learn</span></div>
    </footer>
  </main>;
}
