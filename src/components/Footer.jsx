

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Data Profiling Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;