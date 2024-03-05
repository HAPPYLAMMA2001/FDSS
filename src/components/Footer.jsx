import styles from "../style";

import { footerLinks, socialMedia } from "../constants";
import fdsslogo from "../fdssresources/White.png"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 border-t-[2px] border-t-[#3F3E45] ">
        <img 
          src={fdsslogo}
          alt="fdsslogo"
          className="w-[266px] h-[72.14px] object-contain mt-4"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          FAST Data Science Society
        </p>
      </div>

      
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 ">
      <p className="font-poppins font-normal  text-[16px] leading-[27px] text-white">
        Copyright Ⓒ 2023 FDSS Research and Development Department
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
