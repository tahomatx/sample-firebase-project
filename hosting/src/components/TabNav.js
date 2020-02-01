import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { Link, navigate } from "gatsby";
import { css } from '@emotion/core';

const Page = ({ current }) => {

  const [selected, setSelected] = React.useState(current);

  return (
    <Tabs
      component={Paper}
      square
      elevation={4}
      value={selected}
      onChange={(event, newValue) => {
        setSelected(newValue);
        setTimeout(() => navigate(newValue), 300);
      }}
      scrollButtons="auto"
      variant="scrollable"
      centered
    >
    <Tab value='/tabs' label="Recents" />
    <Tab value='/tabs/aaa' label="Favorites" />
    <Tab value='/tabs/bbb' label="BBB" />
    <Tab value='/tabs/ccc' label="CCC" />
    <Tab value='/tabs/ddd' label="DDD" />
    <Tab value='/tabs/eee' label="EEE" />
    <Tab value='/tabs/fff' label="FFF" />
  </Tabs>
  );
};

export default Page;
