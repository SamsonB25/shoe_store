const Footer = () => {
  return (
    <footer className="fixed bg-gray-800 text-white py-6 w-full left-0 bottom-0">
      <div className="container mx-auto flex justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
