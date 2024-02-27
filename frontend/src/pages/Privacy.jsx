import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-5 md:px-12 mt-4 md:mt-8 selection:text-blue-500 mb-6  min-h-[70vh]">
        <h1 className="text-2xl selection:text-yellow-300 md:text-3xl font-bold tracking-wide mb-4 md:mb-5 text-[#36B535]">
          Privacy:
        </h1>
        <h4 className="mb-5 text-gray-300">
          At{" "}
          <span className="font-semibold text-white text-xl selection:text-green-500">
            BLOG VERSE
          </span>
          , we are committed to protecting your privacy and ensuring the
          security of your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard the data you provide to us when
          using our website.
        </h4>
        <p className="text-gray-400 mb-4">
          Information Collection: When you register for an account on [Your Blog
          Name], we may collect certain personally identifiable information,
          such as your name, email address, and any other information you choose
          to provide. We may also automatically collect certain non-personal
          information, such as your IP address, browser type, and device
          information, to improve our services and enhance your user experience.
        </p>
        <p className="text-gray-400 mb-4">
          Use of Information: The information we collect is used to personalize
          your experience, improve our website, and provide the services you
          request. We may use your email address to send you updates,
          newsletters, or other communications related to{" "}
          <span className="font-semibold text-white text-xl selection:text-green-500">
            BLOG VERSE
          </span>
          . You can opt out of these communications at any time. We will not
          sell, trade, or rent your personal information to third parties
          without your consent, except as required by law.
        </p>
        <p className="text-gray-400 mb-4">
          Data Security: We implement industry-standard security measures to
          protect your personal information from unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure.
          Therefore, while we strive to use commercially acceptable means to
          protect your personal information, we cannot guarantee its absolute
          security.
        </p>
        <p className="text-gray-400 mb-4">
          Cookies: We may use cookies and similar tracking technologies to
          enhance your user experience and collect information about how you use
          our website. You can adjust your browser settings to refuse cookies or
          alert you when cookies are being sent.
        </p>
        <p className="text-gray-400 mb-4">
          Third-Party Links: Our website may contain links to third-party
          websites or services that are not owned or controlled by us. We are
          not responsible for the privacy practices or content of these
          third-party sites.
        </p>
        <p className="text-gray-400 mb-4">
          Children's Privacy:{" "}
          <span className="font-semibold text-white text-xl selection:text-green-500">
            BLOG VERSE
          </span>{" "}
          is not intended for use by children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          believe that we have collected personal information from a child under
          13, please contact us immediately.
        </p>
        <p className="text-gray-400 mb-4">
          Updates to Privacy Policy: We reserve the right to update or modify
          this Privacy Policy at any time. Any changes will be effective
          immediately upon posting the revised Privacy Policy on our website.
        </p>
        <h4 className="mb-5 text-gray-300">
          By using{" "}
          <span className="font-semibold text-white text-xl selection:text-green-500">
            BLOG VERSE
          </span>
          , you consent to the terms of this Privacy Policy. If you have any
          questions or concerns about our Privacy Policy, please contact us at
          <span className="text-white text-lg"> infoblogverse@gmail.com</span>
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
