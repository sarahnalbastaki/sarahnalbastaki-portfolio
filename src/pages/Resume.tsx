const Resume = () => {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>

      {/* Embed the resume for display */}
      <div className="resume-display">
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      </div>

      {/* Download button */}
      <div className="download-button">
        <a href="/resume.pdf" download="SarahAlbastaki_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
