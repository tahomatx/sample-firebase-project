import React from "react";
import TabNav from 'components/TabNav';

const Page = () => (
  <React.Fragment>
    <TabNav current='/tabs' />
    <main>
      <h1>navigations</h1>
    </main>
  </React.Fragment>
);

export default Page;
