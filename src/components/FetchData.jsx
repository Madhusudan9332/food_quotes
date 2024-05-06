import React, { useState, useEffect } from "react";
import LoadMore from "../../../day4_classwork/src/components/LoadMore";
import QuoteList from "./QuoteList";

const FetchData = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const targetUrl = encodeURIComponent(
          `https://www.goodreads.com/quotes/tag/food-industry?format=json&id=transparency&mobile_xhr=1&page=${page}`
        );
        const baseUrl = "https://customserver-rouk.onrender.com/";
        const response = await fetch(`${baseUrl}?url=${targetUrl}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data from proxy server");
        }
        const data = await response.json();
        displayQuotes(data);
      } catch (error) {
        console.error("Error fetching data from proxy server:", error);
      }
    };

    fetchData();
  }, [page]);

  const displayQuotes = (data) => {
    const content_html = data.content_html.replace(/(\r\n|\n|\r)/gm, "");
    const container_html = document.createElement("div");
    container_html.innerHTML = content_html;
    const newQuotes = createObjectArray(container_html);
    // setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
    setQuotes(newQuotes);
  };

  const createObjectArray = (container_html) => {
    const articles = container_html.querySelectorAll("article");
    const newQuotes = Array.from(articles).map((article) => {
      const profilePic =
        article.querySelector(".userIcon") != null
          ? article
              .querySelector(".userIcon")
              .style.backgroundImage.split('url("')
              .map((e) => e.split('")'))[1][0]
          : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
      const quote = article.querySelector(".quoteBody").innerText;
      const author = article.querySelector(".quoteAuthor").innerText;
      return { profilePic, quote, author };
    });
    return newQuotes;
  };

  const handleLoadMore = () => {
    setPage((page) => page+1);
  };

  return (
    <div>
      {/* {console.log(quotes)} */}
      <QuoteList quotes={quotes} />
      <LoadMore onClick={handleLoadMore} />
    </div>
  );
};

export default FetchData;
