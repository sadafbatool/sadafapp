import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

import { useState } from "react";
function Data() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };

  console.log(data);
  return (
    <div className="text">
      <Card sx={{ maxWidth: 345 }}>
        <h1 className="card"> PHONES DATA</h1>
        <br />
        {/* <button className="open btn" onClick={apiGet}>
        FETCH PHONES
      </button>{" "} */}
        <Button variant="contained" color="primary" onClick={apiGet}>
          FETCH PHONES
        </Button>
        <Card sx={{ maxWidth: 345 }}></Card>
        {data.map((item) => (
          <div className="itemcard cardstyle">
            <img height={160} src={item.thumbnail} alt="Phones Images" />
            <p>Title: {item.title}</p>
            <p>Brand: {item.brand}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
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
      <br />

      <br />

      <div className="cardcontent"></div>
      {/* <pre className="text"> {JSON.stringify(data)}</pre>*/}
      <div className="cardcontainer">
        {/*  {data.map((item) => (
          <div className="itemcard cardstyle">
            <img height={160} src={item.thumbnail} alt="Phones Images" />
            <p>Title: {item.title}</p>
            <p>Brand: {item.brand}</p>
            <p>Price: {item.price}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Data;
