import React, { useEffect } from "react";
import "./Blogs.scss";
import ComingSoon from "../../components/Coming Soon/ComingSoon";

const Blogs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="blogs-page page">
      <ComingSoon />
    </div>
  );
};

export default Blogs;
