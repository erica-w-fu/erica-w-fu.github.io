import './Socials.css'

function Socials() {

  return (
    <>
        <div className="social-media">
            <a 
                className="social-icon-link linkedIn"
                target='_blank'
                href='https://www.linkedin.com/in/erica-fu-15b3a61b9/'
            >
                <i className="fab fa-linkedin"></i>
            </a>
            <a 
                className="social-icon-link github"
                target='_blank'
                href='https://github.com/erica-w-fu'
            >
                <i className="fab fa-github"></i>
            </a>
            <a 
                className="social-icon-link instagram"
                target='_blank'
                href='https://www.instagram.com/ericacreatesss/'
            >
                <i className="fab fa-instagram"></i>
            </a>
        </div>
    </>
  );
}
export default Socials;