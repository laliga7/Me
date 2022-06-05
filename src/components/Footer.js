import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
        </div>
        <p>&copy; 2022 By K.L.Molefe</p>
    </div>
  )
}

export default Footer