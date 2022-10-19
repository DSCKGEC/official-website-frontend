import React, { useEffect } from "react";
import { fetchShortUrl } from "../../api/api";
import "./UrlShortener.scss";

const UrlShortener: React.FC = () => {
  useEffect(() => {
    let url: any = window.location.pathname;
    url = url.split("/")[1];

    if (url !== "") {
      fetchShortUrl(url)
        .then((res: any) => {
          if (res) {
            console.log(res.shortUrl.url);

            if (res.statusCode === 200) {
              window.location.href = res.shortUrl.url;
            } else {
              // TODO: Redirect to not found
              //window.location.href = "/";
            }
          }
        })
        .catch((err: any) => {
          //window.location.href = "/";
          console.log(err);
        });
    }
  }, []);

  return <div className="id">Redirecting...</div>;
};

export default UrlShortener;
