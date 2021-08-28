import { useEffect, useState } from "react";
import axios from "axios";

export default function useCompanySearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setCompanies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    axios({
      method: "POST",
      url: "https://shivamprajapati-os-backend.herokuapp.com/search",
      data: { query, pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCompanies((prev) => {
          return [...prev, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, companies, hasMore };
}
