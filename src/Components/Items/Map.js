import React from "react";

function Map() {
  return (
    <div className="block">
      <iframe
        className="w-full rounded-lg "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.336189986263!2d33.223294975442045!3d35.347302148246044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de0d3b45e0d2eb%3A0xb13823fc6f421242!2sk%C4%B1br%C4%B1s%20orba%20sanayi%20ltd.!5e0!3m2!1sen!2s!4v1720557670662!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
