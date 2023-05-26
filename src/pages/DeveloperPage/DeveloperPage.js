import developerPhoto from '../../images/developer/taras-kachmar.jpg';
// import developerPhoto1x from '../../images/developer/taras-kachmar-1x.jpg';
// import developerPhoto2x from '../../images/developer/taras-kachmar-2x.jpg';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import {
  DeveloperContainer,
  DeveloperImg,
  DeveloperContactsContainer,
  DeveloperName,
  DeveloperRole,
  DeveloperContactsList,
  DeveloperLink,
  DeveloperContactsItem,
  DeveloperSkilsList,
  DeveloperSkilsTitle,
  DeveloperSkilsItem,
} from './DeveloperPage.styled';

const DeveloperPage = () => {
  return (
    <DeveloperContainer>
      <DeveloperImg
        // srcset="
        //   ../../images/developer/taras-kachmar-1x.jpg 1x,
        //   ../../images/developer/taras-kachmar-2x.jpg 2x,
        // "
        // sizes="(max-width: 1200px) 1200px, (max-width: 768px) 768px, (max-width: 480px) 480px, 100vw"
        src={developerPhoto}
        alt="Developer"
      />
      <DeveloperContactsContainer>
        <div>
          <DeveloperName>Taras Kachmar</DeveloperName>
          <DeveloperRole>Developer</DeveloperRole>
        </div>
        <div>
          <DeveloperContactsList>
            <DeveloperContactsItem>
              <DeveloperLink href="https://wa.me/+380631753008">
                <FaWhatsapp color="black" fontSize={24} />
              </DeveloperLink>
            </DeveloperContactsItem>
            <DeveloperContactsItem>
              <DeveloperLink href="https://t.me/+380631753008">
                <FaTelegramPlane color="black" fontSize={24} />
              </DeveloperLink>
            </DeveloperContactsItem>
            <DeveloperContactsItem>
              <DeveloperLink href="mailto:kachmar.taras@gmail.com">
                <MdOutlineMarkEmailRead color="black" fontSize={24} />
              </DeveloperLink>
            </DeveloperContactsItem>
          </DeveloperContactsList>
        </div>
        <div>
          <hr />
          <DeveloperSkilsTitle>Tech Skils:</DeveloperSkilsTitle>
          <DeveloperSkilsList>
            <DeveloperSkilsItem>HTML5/CSS3/SASS</DeveloperSkilsItem>
            <DeveloperSkilsItem>Responsive/Adaptive design</DeveloperSkilsItem>
            <DeveloperSkilsItem>GIT/GitHub</DeveloperSkilsItem>
            <DeveloperSkilsItem>JavaScript</DeveloperSkilsItem>
            <DeveloperSkilsItem>React Hooks & Components</DeveloperSkilsItem>
            <DeveloperSkilsItem>React Redux</DeveloperSkilsItem>
            <DeveloperSkilsItem>React Native</DeveloperSkilsItem>
            <DeveloperSkilsItem>REST API</DeveloperSkilsItem>
            <DeveloperSkilsItem>Handlebars</DeveloperSkilsItem>
            <DeveloperSkilsItem>Parcel</DeveloperSkilsItem>
            <DeveloperSkilsItem>Webpack</DeveloperSkilsItem>
            <DeveloperSkilsItem>Node.js</DeveloperSkilsItem>
            <DeveloperSkilsItem>MongoDB</DeveloperSkilsItem>
          </DeveloperSkilsList>
        </div>
      </DeveloperContactsContainer>
    </DeveloperContainer>
  );
};

export default DeveloperPage;
