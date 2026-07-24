const Location = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Visit Our Store</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=7.5583891,6.6440349&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Joint 99 Location"
          ></iframe>
        </div>
        <p className="text-center text-gray-600 mt-4">
          <span className="font-semibold">Address:</span> 7.5583891, 6.6440349 (click map for directions)
        </p>
      </div>
    </section>
  );
};

export default Location;