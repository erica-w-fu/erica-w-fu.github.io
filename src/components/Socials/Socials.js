import './Socials.css'

function Socials() {

  return (
    <>
        <div className="social-media">
            <a 
                className="nav-bar-links social-icon-link envelope"
                target='_blank'
                href='mailto:ericawfu@gmail.com'
                rel='noopener noreferrer'
            >
                <i className="fa fa-envelope"></i>
            </a>
            <a 
                className="nav-bar-links social-icon-link linkedIn"
                target='_blank'
                href='https://www.linkedin.com/in/ericawfu/'
                rel='noopener noreferrer'
            >
                <i className="fab fa-linkedin"></i>
            </a>
            <a 
                className="nav-bar-links social-icon-link github"
                target='_blank'
                href='https://github.com/erica-w-fu'
                rel='noopener noreferrer'
            >
                <i className="fab fa-github"></i>
            </a>
            <a 
                className="nav-bar-links social-icon-link instagram"
                target='_blank'
                href='https://www.instagram.com/ericacreatesss/'
                rel='noopener noreferrer'
            >
                <i className="fab fa-instagram"></i>
            </a>
        </div>
    </>
  );
}
export default Socials;