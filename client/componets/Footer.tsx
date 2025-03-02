export function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center mt-10">
        <div className="container mx-auto">
          <p className="text-sm">© {new Date().getFullYear()} Zapier Inc.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  