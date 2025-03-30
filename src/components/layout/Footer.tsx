import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-10 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Follow us on:</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-black">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-3">
            Subscribe to our newsletter
          </h3>
          <form className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none"
            />
            <div className="flex items-center mt-3 text-left">
              <input type="checkbox" id="subscribe" className="w-4 h-4 mr-2" />
              <label htmlFor="subscribe" className="text-sm text-gray-700">
                Yes, subscribe me to your newsletter. *
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3">Contact Us:</h3>
          <p className="font-light text-gray-700">
            (+94) 2132 2342 | contact@mulberrylab.com
          </p>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="mt-10 text-center text-sm text-gray-600 px-4">
        Copyright © 2025 MulberryLab Inc. All rights reserved
      </div>
    </footer>
  );
}
