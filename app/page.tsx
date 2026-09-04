const work = [
  { index: '01', title: 'Reliability Evaluation of Uncertainty Calibration and Gompertz-Inspired Regularization', description: 'A reliability-centered benchmark for sparse longitudinal CT lesion prediction, spanning uncertainty calibration, interval sharpness, subgroup behavior, and trajectory regularization.', tags: ['Medical imaging', 'Uncertainty', 'Longitudinal CT'], href: 'https://github.com/Lorettakong/deeplesion-dlt-reliability' },
  { index: '02', title: 'Uncertainty-Aware Mechanistic Correction for Lung Nodule Trajectories', description: 'A Bayesian Gompertz-guided framework that learns population-level mechanistic deviation and uses conformal calibration for more reliable prediction intervals.', tags: ['Bayesian modeling', 'Conformal prediction', 'Lung nodules'], href: 'https://github.com/Lorettakong/ct-nodule-mechanistic-correction' },
  { index: '03', title: 'Diagonal Cache', description: 'Structural interventions on AlphaEdit’s edit-batch covariance cache, studying how cache geometry influences knowledge editing in large language models.', tags: ['Knowledge editing', 'LLMs', 'Representation geometry'], href: 'https://github.com/Lorettakong/diagonal-cache' },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Loretta Kong, home">LK<span>.</span></a>
      <div className="navLinks"><a href="#about">About</a><a href="#research">Research</a><a href="#contact">Contact</a></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy">
        <p className="eyebrow"><span /> Medical imaging · Reliable AI</p>
        <h1>Loretta<br />Kong</h1>
        <p className="intro">I build reliable machine-learning methods for medical imaging and study how models can make better decisions with sparse, uncertain data.</p>
        <div className="heroActions">
          <a className="button primary" href="#research">Explore my work</a>
          <a className="button quiet" href="https://github.com/Lorettakong" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <div className="portraitWrap">
        <div className="portraitFrame"><img src="/loretta-avatar.jpg" alt="Portrait of Loretta Kong" /></div>
        <p className="portraitNote">● Researching across disciplines</p>
      </div>
    </section>

    <section className="about shell" id="about">
      <p className="sectionLabel">About</p>
      <div className="aboutText">
        <h2>Questions worth pursuing sit between disciplines.</h2>
        <p>My work brings together machine learning, medical imaging, uncertainty quantification, and mechanistic modeling. I am especially interested in methods that remain interpretable and dependable when observations are limited—because that is often where careful modeling matters most.</p>
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

    <section className="personal shell">
      <p className="sectionLabel">Beyond the work</p>
      <div><h2>Curiosity doesn’t end at the lab door.</h2><p>I value the slower observations, unexpected connections, and everyday experiences that make research—and life—more thoughtful.</p></div>
    </section>

    <footer id="contact">
      <div className="shell footerInner"><div><p className="sectionLabel">Let’s connect</p><h2>Interested in my work?</h2></div><a className="button light" href="https://github.com/Lorettakong" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div>
      <div className="shell footerBase"><span>© {new Date().getFullYear()} Loretta Kong</span><span>Research · Build · Learn</span></div>
    </footer>
  </main>;
}
