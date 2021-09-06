/*import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IndexNavbar from './Broadband/navbar.js';
import {Container} from 'reactstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MyTelstra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  '.menu': {
      display: 'inline-block'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    float: 'left'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <IndexNavbar />
      <Container maxWidth="md" component="footer" className={classes.footer}>
      <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./Broadband/media/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
              <Container>
                <div className="title-brand">
                  <h1 className="presentation-title">Paper Kit React</h1>
                  <div className="fog-low">
                    <img
                      alt="..."
                      src={require("./Broadband/media/fog-low.png").default}
                    />
                  </div>
                  <div className="fog-low right">
                    <img
                      alt="..."
                      src={require("./Broadband/media/fog-low.png").default}
                    />
                  </div>
                </div>
                <h2 className="presentation-subtitle text-center">
                  Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
                </h2>
              </Container>
            </div>
            <div
              className="moving-clouds"
              style={{
                backgroundImage:
                  "url(" + require("./Broadband/media/clouds.png").default + ")",
              }}
            />
            <h6 className="category category-absolute">
              Designed and coded by{" "}
              <a
                href="https://www.creative-tim.com?ref=pkr-index-page"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                <img
                  alt="..."
                  className="creative-tim-logo"
                  src={require("./Broadband/media/creative-tim-white-slim2.png").default}
                />
              </a>
            </h6>
          </div>
        </>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}*/








import React from 'react'
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoNavbar from 'components/Navbars/demoNavbar';
import HomeBody from './HomeBody';

export default function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <DemoNavbar />
      <HomeBody />
      <div className="main">
      </div>
    </>
  );
}