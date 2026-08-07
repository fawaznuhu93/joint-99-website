const Location = () => {
  // Use the embed URL from Google Maps - this will show the correct location with a marker
  const embedSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15760.830613647468!2d7.0977554!3d6.5608418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ca8e76502ea8d%3A0x4b97aec613358fc1!2sJoint%2099!5e0!3m2!1sen!2sng!4v1746733145678!5m2!1sen!2sng";

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Visit Our Store</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={embedSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Joint 99 Location"
          ></iframe>
        </div>
        <p className="text-center text-gray-600 mt-4">
          <span className="font-semibold">Address:</span> Abuja estate, Ajaokuta 263106, Kogi, Nigeria
          <br />
          <a 
            href="https://maps.app.goo.gl/yrT21gmnHuogRRuE7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-medium inline-flex items-center gap-1"
          >
             Open in Google Maps
          </a>
        </p>
      </div>
    </section>
  );
};

export default Location;