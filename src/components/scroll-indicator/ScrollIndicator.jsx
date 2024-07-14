import { useEffect, useRef, useState } from 'react';
import './scroll-indicator.css';

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const scrollTop = section.scrollTop;
      const scrollHeight = section.scrollHeight;
      const clientHeight = section.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };

    const section = sectionRef.current;

    if (section) {
      section.addEventListener('scroll', updateScrollProgress);
    }

    return () => {
      if (section) {
        section.removeEventListener('scroll', updateScrollProgress);
      }
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div ref={sectionRef} className="scroll-indicator-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="scroll-data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
