
import {} from "react";
import "../Footer/footer.scss"

const Footer = () => {
  return (
<>
<footer>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
      </footer>
</>
  );
};

export default Footer;


