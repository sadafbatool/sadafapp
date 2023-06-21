/* import React from "react";
import Button from "@mui/material/Button";

function Demo() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}
export default Demo; */

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I PHONE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mobile phones are the very important thing in our life.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
