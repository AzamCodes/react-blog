import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-5 md:px-12 mt-4 md:mt-8 selection:text-blue-500 mb-6  min-h-[70vh]">
        <h1 className="text-2xl selection:text-yellow-300 md:text-3xl font-bold tracking-wide mb-4 md:mb-5 text-[#36B535]">
          Terms and Conditions:
        </h1>
        <p className="text-gray-400 mb-3">
          Welcome to{" "}
          <span className="font-semibold text-white selection:text-green-500">
            BLOG VERSE
          </span>
        </p>
        <p className="text-gray-400 mb-4">
          These Terms and Conditions govern your use of our website and the
          services provided therein. By accessing or using our website, you
          agree to comply with these Terms and Conditions in full. If you do not
          agree with any part of these terms, please do not use our website..
        </p>

        <p className="text-gray-400 mb-4">
          {" "}
          User Accounts: Users must provide accurate information when creating
          an account. Users are responsible for maintaining the confidentiality
          of their account credentials.
        </p>
        <p className="text-gray-400 mb-4">
          {" "}
          Content: Users retain ownership of their content but grant us a
          license to use it for website operation and promotion.
        </p>
        <p className="text-gray-400 mb-4">
          User Conduct: Users must comply with all applicable laws and
          regulations. Users may not disrupt website operation or violate
          others' rights.
        </p>
        <p className="text-gray-400 mb-2">
          {" "}
          Third-Party Links: We are not responsible for the content or practices
          of third-party websites.
        </p>
        <p className="text-gray-400 mb-2">
          {" "}
          Limitation of Liability: We are not liable for indirect,
          consequential, or incidental damages.
        </p>
        <p className="text-gray-400 mb-2">
          {" "}
          Indemnification: Users agree to indemnify us against any claims
          arising from their use of the website.
        </p>
        <p className="text-gray-400 mb-2">
          {" "}
          Changes to Terms: We may update these Terms and Conditions at any time
          without prior notice.
        </p>
        <h5>
          By using our website, you agree to these Terms and Conditions. For
          questions or concerns, contact us at{" "}
          <span className="text-white text-xl font-semibold">
            infoblogverse@gmail.com
          </span>
          .
        </h5>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
