import React from "react";

function Map() {
  return (
    <div className="block">
      <iframe
        className="w-full rounded-lg "
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13018.100631569825!2d33.23825645480961!3d35.342611251919735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1675674932847!5m2!1sen!2s"
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
