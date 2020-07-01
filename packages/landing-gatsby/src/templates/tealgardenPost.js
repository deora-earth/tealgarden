import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import {
  Tabs,
  Tab,
  ContentWrapper,
  ContentWrapperIntegration,
  ContentWrapperAccordion,
  FlexWrapper,
  ContentScroll,
  ContentScrollSmall,
  ContentHover,
  ContentHoverTools,
  ToolImg,
  SectionWrapper,
  SectionWrapperSmall,
  StepNavigation,
  StepNavigationElement,
  HorizontalDivider,
  SetpsAccordion,
  ToolContent,
  YellowHighliter,
  TealHighliter,
} from './tamplateComponents/tealgardenPost.style';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { MobileBlocker } from './tamplateComponents/MobileBlocker/mobileBlocker.style';
import { isMobile } from 'react-device-detect';
import MDReactComponent from 'markdown-react-js';
import { ExternalLink } from 'react-external-link';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Title from './tamplateComponents/Title/title';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import Box from 'common/src/components/Box';
import SEO from '../components/seo';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import List from 'common/src/components/List';

// allows to group components and adoptionRequirements by type
const byType = (componentType) => {
  return function (elem) {
    // filter roles, as they don't have a type field
    if (
      elem.accountabilities !== null &&
      componentType.localeCompare('role') === 0
    ) {
      return true;
    }
    // filter values, tools, policies and structures
    if (elem.type !== null && elem.type.localeCompare(componentType) === 0) {
      return true;
    }
    return false;
  };
};

const BasicTemplate = (props) => {
  const { pageContext } = props;
  const { pageContent } = pageContext;
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.currentTarget.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const structures = pageContent.components.filter(byType('structure'));
  structures.push(
    ...pageContent.addoptionRequirements.filter(byType('structure'))
  );
  const policies = pageContent.components.filter(byType('policy'));
  const roles = pageContent.components.filter(byType('role'));
  const tools = pageContent.components.filter(byType('tool'));
  tools.push(...pageContent.addoptionRequirements.filter(byType('tool')));
  const values = pageContent.addoptionRequirements.filter(byType('value'));
  if (isMobile) {
    return (
      <ThemeProvider theme={appTheme}>
        <AppWrapper>
          <MobileBlocker>
            This Website is currently only available on Desktop devices. Pleas
            come back to enjoy the full experiance.
          </MobileBlocker>
        </AppWrapper>
      </ThemeProvider>
    );
  } else
    return (
      <ThemeProvider theme={appTheme}>
        <Fragment>
          <SEO title="The best processes for self-managed and distributed teams" />
          <Modal />
          <ResetCSS />
          <GlobalStyle />
          <AppWrapper>
            <Sun />
            <CookieBanner
              styles={{
                banner: { backgroundColor: 'rgba(9, 22, 50, 0.1)' },
                message: {
                  fontWeight: 500,
                  fontFamily: 'poppins, sans-serif',
                  color: '#091632',
                },
              }}
              message="Yes, we use cookies. To enhance the user experience."
              cookie="gatsby-gdpr-google-analytics"
            />
            <Navbar />
            <Title
              icon1={pageContent.icons.startIconUrl}
              icon2={pageContent.icons.endIconUrl}
              title={pageContent.title}
              description={pageContent.summary.abstract.substr(0, 180) + '...'}
            />
            <Container>
              <SectionWrapperSmall>
                <YellowHighliter>
                  <Heading content="Summary" />
                </YellowHighliter>
                <MDReactComponent text={pageContent.summary.abstract} />
              </SectionWrapperSmall>
              <SectionWrapper>
                <YellowHighliter>
                  <Heading content="Adoption Requirements" />
                </YellowHighliter>
                <div>
                  <Tabs>
                    <Tab onClick={handleClick} active={active === 0} id={0}>
                      <span role="img" aria-label="Organisation">
                        🌐
                      </span>{' '}
                      Org Structure
                    </Tab>

                    <Tab onClick={handleClick} active={active === 1} id={1}>
                      <span role="img" aria-label="Policies">
                        📜
                      </span>{' '}
                      Policies
                    </Tab>
                    <Tab onClick={handleClick} active={active === 2} id={2}>
                      <span role="img" aria-label="Roles">
                        🎭
                      </span>{' '}
                      Roles
                    </Tab>
                    <Tab onClick={handleClick} active={active === 3} id={3}>
                      <span role="img" aria-label="Tools">
                        ⚒️
                      </span>{' '}
                      Tools
                    </Tab>
                    <Tab onClick={handleClick} active={active === 4} id={4}>
                      <span role="img" aria-label="Values">
                        💖
                      </span>{' '}
                      Values
                    </Tab>
                  </Tabs>
                  <>
                    <Fragment>
                      <ContentWrapper active={active === 0}>
                        <p>
                          Organisational structures, formats and style of
                          governance that is needed to adapt the process."
                        </p>
                        {structures.map((structure) => (
                          <ExternalLink href={structure.link}>
                            <Fragment>
                              <ContentHover>
                                <Heading content={structure.name} />
                                <MDReactComponent
                                  text={structure.description}
                                />
                              </ContentHover>
                            </Fragment>
                          </ExternalLink>
                        ))}
                      </ContentWrapper>
                      <ContentWrapper active={active === 1}>
                        <p>
                          Policies and frameworks used in this process. These
                          can be individualized based on the organisation’s need
                          and background.
                        </p>
                        {policies.map((policy) => (
                          <ContentScroll>
                            <Heading content={policy.name} />
                            <MDReactComponent text={policy.description} />
                          </ContentScroll>
                        ))}
                      </ContentWrapper>
                      <ContentWrapper active={active === 2}>
                        <p>
                          Mandatory roles that are affected or created for this
                          process to work properly.{' '}
                        </p>
                        {roles.map((role) => (
                          <ContentScrollSmall>
                            <Heading content={role.title} />
                            <Text content={role.purpose} />
                            {role.domains.map((domain, domIndex) => (
                              <Text
                                content={domain}
                                key={`domain-${domIndex}`}
                              />
                            ))}
                            {role.accountabilities.map((account, accIndex) => (
                              <Text
                                content={account}
                                key={`account-${accIndex}`}
                              />
                            ))}
                          </ContentScrollSmall>
                        ))}
                      </ContentWrapper>
                      <ContentWrapper active={active === 3}>
                        <p>Tools that are used in this process.</p>
                        <FlexWrapper>
                          {tools.map((tool, index) => (
                            <ExternalLink href={tool.link}>
                              <ContentHoverTools key={index}>
                                <ToolImg src={tool.link} />
                                <ToolContent>
                                  <Heading content={tool.name} />
                                  <Text content={tool.description} />
                                </ToolContent>
                              </ContentHoverTools>
                            </ExternalLink>
                          ))}
                        </FlexWrapper>
                      </ContentWrapper>
                      <ContentWrapper active={active === 4}>
                        <p>
                          Values drive the organisation and the following are
                          needed to fully adapt this process.
                        </p>
                        {values.map((value) => (
                          <ContentScroll>
                            <Heading content={value.name} />
                            <MDReactComponent text={value.description} />
                          </ContentScroll>
                        ))}
                      </ContentWrapper>
                    </Fragment>
                  </>
                </div>
              </SectionWrapper>
            </Container>
            <SectionWrapper>
              <Newsletter />
            </SectionWrapper>
            <SupportBlock />
            <Footer />
          </AppWrapper>
        </Fragment>
      </ThemeProvider>
    );
};

export default BasicTemplate;