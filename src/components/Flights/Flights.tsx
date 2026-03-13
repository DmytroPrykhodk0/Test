import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Link,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { propsFlights } from "../../types";
import styles from "./FlightsStyles";

export default function FlightsPage(props: propsFlights) {
  const toggleFavorite = (id: string) => {
    props.setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  useEffect(() => {
    (async function getData() {
      try {
        const response = await axios.get(
          "https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights",
        );
        props.setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw Error(error.message);
        }
      }
    })();
  }, []);

  if (props.data.length === 0) {
    return <Spinner text={"Завантаження рейсів..."} />;
  }

  return props.data.map((item) => (
    <Link component={RouterLink} to={`/flights/${item.id}`} underline="none">
      <Card key={item.id} sx={styles.Card}>
        <CardContent>
          <Box
            sx={styles.CardContentTitleWrap}
          >
            <Typography variant="h5" component="h2">
              Рейс №: {item.id}
            </Typography>
          </Box>
          <Box
            sx={styles.CardContentBodyWrap}
          >
            <Box>
              <Typography>Авіалінії: {item.airline}</Typography>
              <Typography>
                Від: {item.from} <ArrowRightAltIcon /> до: {item.to}
              </Typography>
              <Typography>
                Час відправлення:{" "}
                {new Date(item.departureTime).toLocaleString()}
              </Typography>
              <Typography>
                Час прибуття: {new Date(item.arrivalTime).toLocaleString()}{" "}
              </Typography>
              <Typography>Термінал: {item.terminal}</Typography>
              <Typography>Ворота: {item.gate}</Typography>
              <Typography>
                В наявності: {item.tickets.remaining} / {item.tickets.total}
              </Typography>
              <Typography>Ціна: {item.price} грн.</Typography>
            </Box>

            <CardActions sx={styles.CardActions}>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleFavorite(item.id);
                }}
                variant="contained"
                startIcon={
                  <StarIcon
                    sx={{
                      color: props.favorites.includes(item.id)
                        ? "gray"
                        : "#fff",
                    }}
                  />
                }
                sx={styles.CardFavoriteButton}
              >
                Додати в обране
              </Button>

              <Button
                component={RouterLink}
                to={`/flights/${item.id}`}
                variant="contained"
                startIcon={<ArrowForwardIosIcon />}
                sx={styles.CardMoreButton}
              >
                Детальніше
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Link>
  ));
}
