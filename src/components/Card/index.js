import React, {useCallback, useEffect, useMemo, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/features/backetSlice";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "300px",
    height: "250px",
    margin: "5px",
    padding: "10px",
    backgroundColor: "#f2e8db",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    position: "relative",
    flexBasis: "50%",
    backgroundSize: "contain",
  },
  star: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  prices: {
    display: "flex",
    justifyContent: "space-around",
  },
  oldPrice: {
    textDecoration: "line-through",
  },
  newPrice: {
    fontSize: "26px",
    fontWeight: "bold",
  },
  discount: {
    position: "absolute",
    bottom: "20px",
    right: "10px",
    color: "red",
    fontSize: "26px",
    fontWeight: "bold",
  },
  imgContainer:{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height :"100%",
      width:"100%",
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const backet = useSelector((store) => store.backet);
  const dispatch = useDispatch();

  const handler = useCallback(
    () => {console.log(props.item.id);
      if (backet.length > 0) {
        if (backet.find((item) => item === props.item.id)) {
          dispatch(remove(props.item.id));
        } else {
          dispatch(add(props.item.id));
        }
      } else {
        dispatch(add(props.item.id));
      }
    },
    [backet]
  );

  const star = useMemo(
      () => {
      if (backet.length > 0) {
        return !!backet.find((item) => item === props.item.id);
      } else return false;
    },
    [backet]
  );

  return (
    <Card className={classes.root} onClick={handler}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.title}>{props.item.title}</div>
          <Typography variant="subtitle1" color="textSecondary">
            {props.item.weight}
          </Typography>
        </CardContent>
        <div className={classes.prices}>
          <div className={classes.oldPrice}>{props.item.oldPrice}грн.</div>
          <div className={classes.newPrice}>{props.item.price}грн.</div>
        </div>
      </div>
      
        <div className={classes.imgContainer}>
        <LazyLoad offset={300}>
          <img
            className={classes.img}
            src={props.item.imageUrl}
            alt={props.item.slug}
          />
          </LazyLoad>
          {/* <CardMedia
        className={classes.cover}
        image={props.item.imageUrl}
        title={props.item.slug}
      > */}
          <div className={classes.star}>
            {star ? (
              <StarIcon fontSize="large" htmlColor="#ec952a" />
            ) : (
              <StarOutlineIcon fontSize="large" htmlColor="#ec952a" />
            )}
          </div>
          <div className={classes.discount}>{props.item.discount}%</div>

          {/* </CardMedia> */}
        </div>
      
    </Card>
  );
}
