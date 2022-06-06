import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href = {"https://www.linkedin.com/in/kgothatso-molefe-078a0020b/"} target="_black" > <LinkedInIcon /></a>
            <a href = {"mailto:molefe.lebo7@gmail.com"}><EmailIcon /></a>
            <a href = {"https://github.com/laliga7"} target="_black" ><GitHubIcon /></a>
        </div>
        <p>&copy; 2022 By K.L.Molefe</p>
    </div>
  )
}

export default Footer;