import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const News = () => {
    const [news,setNews] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data=>setNews(data))
    },[])
    return (
      <div className="m-5 space-y-5">
        {news.map((singleNews) => (
          <NewsCard singleNews={singleNews} key={singleNews.id}></NewsCard>
        ))}
      </div>
    );
};

export default News;