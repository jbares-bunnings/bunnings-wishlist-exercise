import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import jsonData from "../data/wishlist.json";

const BUNNINGS_ENDPOINT = "https://bunnings.com.au";

export default function BunningsWishlist() {
  // eslint-disable-next-line no-console
  const [data, setData] = useState([]);

  console.log("Logs appear in the browser console, feel free to use for debugging");

  useEffect(() => {
    setData(jsonData.data.results);
  }, [setData]);

  const Row = (props: any) => {
    const catalogueSection = "hardware";

    const openURL = () =>
      window.open(`${BUNNINGS_ENDPOINT}/${props.raw.productroutingurl}`, "_blank");

    return (
      <div
        style={{
          display: "flex",
          height: 200,
          alignItems: "center",
          border: "1px solid #000",
          padding: "0 5%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={props.raw.thumbnailimageurl}
            width={150}
            height={150}
            alt={props.title}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: 100,
              paddingLeft: 10,
            }}
          >
            <h2 style={{ fontSize: 24 }}>{props.title}</h2>
            <p style={{ fontSize: 20 }}>${props.price}</p>
          </div>
        </div>
        <span style={{ fontSize: 60, cursor: "pointer" }} onClick={openURL}>
          ➡️
        </span>
      </div>
    );
  };

  const Header = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: Eden,
          width: "100%",
          padding: 8,
        }}
      >
        <img
          src="/bunnings-media/api/public/content/be094967988f4fe483401f14cb6584b8?v=8b86f2bb"
          alt="Bunnings"
          style={{ width: 200 }}
        />
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 32,
            fontWeight: 800,
            padding: 4,
          }}
        >
          Wishlist
        </h1>
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div>
        {data.map((d) => (
          <Row {...d} />
        ))}
      </div>
    </div>
  );
}

const Eden = "#0D5257";
