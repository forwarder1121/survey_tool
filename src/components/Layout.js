import Content from "./layouts/Content";

import { Grid } from "@material-ui/core";

function Layout() {
  return (
    <div>
      <Grid container spacing={1}>
        <Content />
      </Grid>
    </div>
  );
}
export default Layout;
