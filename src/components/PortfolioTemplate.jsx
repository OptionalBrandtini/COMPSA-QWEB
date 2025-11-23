import "./PortfolioTemplate.css";

function PortfolioTemplate({ data }) {
  const colors = data.colors || {
    heroBackgroundColor: "#ffffff",
    socialBackgroundColor: "#ffffff",
    showcaseBackgroundColor: "#ffffff",
    footerBackgroundColor: "#ffffff",
    textColor: "#0a0a0a",
    secondaryTextColor: "#737373",
    borderColor: "#e5e5e5",
    hoverColor: "#0a0a0a"
  };

  return (
    <div 
      className="portfolio-template"
      style={{
        '--hero-bg-color': colors.heroBackgroundColor,
        '--social-bg-color': colors.socialBackgroundColor,
        '--showcase-bg-color': colors.showcaseBackgroundColor,
        '--footer-bg-color': colors.footerBackgroundColor,
        '--text-color': colors.textColor,
        '--secondary-text-color': colors.secondaryTextColor,
        '--border-color': colors.borderColor,
        '--hover-color': colors.hoverColor
      }}
    >
      <main>
        {/* Hero Section */}
        <section className="hero">
          {data.profileImage && (
            <img 
              src={data.profileImage} 
              alt="Profile"
              className="profile-image"
            />
          )}
          
          <h1>{data.firstName} {data.lastName}</h1>
          
          {data.role && (
            <p className="subtitle">
              {data.role}
            </p>
          )}
          
          {data.bio && (
            <p className="bio">
              {data.bio}
            </p>
          )}
        </section>

        {/* Social Links Section */}
        <section className="social-links">
          <div className="social-container">
            {data.socials && data.socials.map((social, index) => (
              <>
                <a href={social.url} target="_blank" rel="noopener noreferrer" key={index}>{social.name}</a>
                {index < data.socials.length - 1 && <span className="separator">·</span>}
              </>
            ))}
          </div>
        </section>

        {/* Showcase Section */}
        {data.info && data.info.length > 0 && (
          <section className="showcase">
            <h2>{data.infoSectionTitle || "About Me"}</h2>

            <div className="projects">
              {data.info.map((item, index) => (
                <div className="project" key={index}>
                  <div className="project-grid">
                    {item.image && (
                      <div className="project-image-container">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="project-image"
                        />
                      </div>
                    )}
                    
                    <div className="project-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      
      {data.footerText && (
        <footer>
          <p>{data.footerText}</p>
        </footer>
      )}
    </div>
  );
}

export default PortfolioTemplate;
