import React from "react";
import page from 'common/page';
import { withTheme } from '@material-ui/styles';


const Page = ({ theme }) => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>Sample Firebase Project</h1>
        <p>Sample</p>
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
