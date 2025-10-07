import React, { useRef, useState, useEffect } from "react";
import "../css/Carousel.css";
import axios from "axios";

const Carousel = ({ books }) => {
  const itemsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [downloadingId, setDownloadingId] = useState(null); // Track which book is downloading

  // Compute scroll amount dynamically (width of first item + gap)
  const getScrollAmount = () => {
    const container = itemsRef.current;
    if (!container) return 300;
    const first = container.querySelector(".item");
    if (!first) return 300;
    const gap = parseInt(getComputedStyle(container).gap) || 20;
    return first.offsetWidth + gap;
  };

  const scrollNext = () => {
    itemsRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  };

  const scrollPrev = () => {
    itemsRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  };

  // Update scroll state
  useEffect(() => {
    const container = itemsRef.current;
    if (!container) return;

    const onScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth - 1
      );
    };

    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Download handler with feedback
  async function handleDownload(id, title) {
    try {
      setDownloadingId(id); // show loader for this item
      const response = await axios.get(`http://localhost:5000/DownloadBook/${id}`, {responseType: "blob",});
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      alert("Failed to download. Please try again!");
      console.error(error);
    } finally {
      setDownloadingId(null); // reset state
    }
  }

  return (
    <div className="row">
      <div className="container">

        <button className={`prev ${!canScrollLeft ? "disabled" : ""}`}
          onClick={scrollPrev}
          disabled={!canScrollLeft}>
          <div className="line1" />
          <div className="line2" />
        </button>

        <div className="items" ref={itemsRef}>

          {books.map((book, index) => (

            <div className="item" key={index}>
              <img src={book.image} alt={book.title} />
              <button onClick={() => handleDownload(book.id, book.title)}
                className={`download ${downloadingId === book.id ? "downloading" : ""}`}
                disabled={downloadingId === book.id}>
                {downloadingId === book.id ? "Downloading..." : "Download"}
              </button>
            </div>
          ))}
        </div>

        <button className={`Next ${!canScrollRight ? "disabled" : ""}`} onClick={scrollNext} disabled={!canScrollRight}>
          <div className="line3" />
          <div className="line4" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
