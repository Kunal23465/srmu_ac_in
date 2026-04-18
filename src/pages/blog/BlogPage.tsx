import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/blogs");
  }, [navigate]);

  return null; // no UI needed since it's redirecting
};

export default BlogPage;