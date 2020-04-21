import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import { GlobalStyle, AppWrapper, Sun } from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import Newsletter from '../containers/App/Newsletter';
import SupportBlock from '../containers/App/SupportBlock';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import CookieBanner from 'react-cookie-banner';
import SEO from '../components/seo';
import Content from '../containers/App/ContentSection';

export default () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="The best processes for self-managed and distributed teams" />
        <CookieBanner
          styles={{
            banner: { backgroundColor: '#FFDE00' },
            message: {
              fontWeight: 500,
              fontFamily: 'poppins, sans-serif',
              color: '#091632',
            },
          }}
          message="Yes, we use cookies. To enhance the user experience."
          cookie="gatsby-gdpr-google-analytics"
        />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sun />
          <Navbar />
          <Content />
          <Newsletter />
          <SupportBlock />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
