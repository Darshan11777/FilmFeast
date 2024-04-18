// npm install react-infinite-scroller --save
import InfiniteScroller from 'react-infinite-scroller';

import React, { useState, useEffect } from 'react';
import InfiniteScroller from 'react-infinite-scroller';

const MyInfiniteScroller = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.example.com/items?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setItems(prevItems => [...prevItems, ...data]);
        setHasMore(data.length > 0);
      });
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroller
      pageStart={1}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div key={0}>Loading...</div>}
    >
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </InfiniteScroller>
  );
};

export default MyInfiniteScroller;