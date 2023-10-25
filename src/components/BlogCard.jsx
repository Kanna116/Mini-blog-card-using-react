import React from "react";

export default function BlogCard() {
  return (
    <div className="card">
      <div className="blog-image">
        <img src="https://images.unsplash.com/photo-1428189923803-e9801d464d76?auto=format&fit=crop&q=80&w=1910&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <button className="design-btn">Design</button>
      <h1 className="blog-title">Embracing Minimalism</h1>
      <p className="blog-desc">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
      <hr />
      <h3 className="author">Klax</h3>
    </div>
  );
}
