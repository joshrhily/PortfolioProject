import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/x'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

const SocialBar = ({}) => {
  return (
    <div className="flex gap-4">
      <SocialIcon className="transition ease-in-out hover:scale-105" url="https://facebook.com/" />
      <SocialIcon className="hover:scale-105" url="https://instagram.com/" />
      <SocialIcon className="hover:scale-105" url="https://github.com/" />
      <SocialIcon className="hover:scale-105" url="https://x.com/" />
    </div>
  );
};

export default SocialBar;