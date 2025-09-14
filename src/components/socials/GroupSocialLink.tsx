import { socials } from "@/app-data/socials";
import SocialLink from "./SocialLink";
import Facebook from "@/assets/svg/socials/facebook";
import Instagram from "@/assets/svg/socials/Instagram";
import Tiktok from "@/assets/svg/socials/Tiktok";
// import Twitter from "@/assets/svg/socials/Twitter";
import Whatsapp from "@/assets/svg/socials/Whatsapp";

const GroupSocialLink = () => {
  return (
    <nav className="flex gap-8 sm:gap-16">
      <SocialLink to={socials.whatsapp} icon={<Whatsapp />} />
      <SocialLink to={socials.instagram} icon={<Instagram />} />
      {/* <SocialLink to={socials.twitter} icon={<Twitter />} /> */}
      <SocialLink to={socials.tiktok} icon={<Tiktok />} />
      <SocialLink to={socials.facebook} icon={<Facebook />} />
    </nav>
  );
};

export default GroupSocialLink;
