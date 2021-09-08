

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