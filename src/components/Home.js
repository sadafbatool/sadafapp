import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { appDetails } from "../utils/constants";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Following are my apps</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {appDetails.map((item) => (
          <Link to={item.href}>
            <Card
              sx={{
                minWidth: 150,
                maxWidth: 300,
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View App</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
