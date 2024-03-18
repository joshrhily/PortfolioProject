import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'

const SocialBar = ({}) => {
  return (
    <div className="flex gap-4">
      <SocialIcon className="transition ease-in-out hover:scale-105" url="https://www.linkedin.com/" />
      <SocialIcon className="hover:scale-105" url="https://github.com/" />
      <SocialIcon className="hover:scale-105" url="https://instagram.com/" />
      <SocialIcon className="hover:scale-105" url="https://facebook.com/" />
    </div>
  );
};

export default SocialBar;