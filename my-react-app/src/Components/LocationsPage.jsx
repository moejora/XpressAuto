function LocationsPage() {
  return (
    <div
      className="locations-page"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Where to Find Us!</h1>
      <p style={{ textAlign: "center", fontSize: "16px", color: "#666" }}>
        Visit our location in Atlantic City, NJ
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Xpress Auto Care</h3>
        <p>2425 Atlantic Ave, Atlantic City, NJ 08401</p>
        <p>Mon-Sat: 8:30 AM - 5:30 PM | Phone: (609) 348-0894</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163374.5524003409!2d-74.59412840273437!3d39.3570516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee67c36a9ebf%3A0x89511f972c4b3b78!2sXpress%20Auto%20Care!5e1!3m2!1sen!2sus!4v1739769758673!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "2px solid #000", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Xpress Auto Care Location"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationsPage;
