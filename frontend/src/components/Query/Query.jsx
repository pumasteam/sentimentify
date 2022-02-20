import styles from "./Query.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Query = ({ mood }) => {
  const [selected, setSelected] = useState(0);
  const [isMonetized, setIsMonetized] = useState(false);
  const [counter, setCounter] = useState(0);

  const { data, error } = useSWR(
    `https://a8f7-2600-3c02-00-f03c-93ff-fe3b-727b.ngrok.io/sentiment/${mood}`,
    fetcher
  );

  useEffect(() => {
    if (document.monetization) {
      setIsMonetized(true);
    }
    if (data) {
      const random = Math.floor(Math.random() * data._items.length);
      setSelected(random);
    }
  }, [data, isMonetized]);

  if (!data) return <h2 className={styles.title}>Loading...</h2>;
  
  if (counter == 0) {
    if (isMonetized) {
      toast.success(
        "Thank you for your support! you have access to all the playlists"
      );
    } else {
      toast.error("To view all playlists, support us with coil!");
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{`Your mood is ${mood}`}</h2>
      {data._count > 0 ? (
        <>
          <p className={styles.subtitle}>Recommended playlist</p>
          <iframe
            className={styles.iframe}
            style={{ borderRadius: "12" }}
            src={`https://open.spotify.com/embed/playlist/${data._items[selected].url}`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </>
      ) : (
        <p className={styles.subtitle}>We don't have music for that mood :(</p>
      )}
      {isMonetized && (
        <>
          <h2 className={styles.title}>More playlists</h2>
          <ul className={styles.list}>
            {data._items.map((item, index) =>
              !item.key === data._items[selected].key ? (
                <li className={styles.list_item} key={index}>
                  <a href={`https://open.spotify.com/playlist/${item.url}`}>
                    {item.name}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </>
      )}
      <Toaster />
    </section>
  );
};

export default Query;
