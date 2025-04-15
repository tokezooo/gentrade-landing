import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GenTrade",
  description:
    "Privacy Policy for GenTrade - Learn how we protect your personal information",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">GenTrade Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          GenTrade (the &quot;Company&quot;) is committed to maintaining robust
          privacy protections for its users. Our Privacy Policy (&quot;Privacy
          Policy&quot;) is designed to help you understand how we collect, use
          and safeguard the information you provide to us and to assist you in
          making informed decisions when using our Service.
        </p>

        <section className="mb-8">
          <p className="mb-4">
            For purposes of this Agreement, &quot;Site&quot; refers to the
            Company&apos;s website, which can be accessed at
            https://gentrade.xyz.
          </p>

          <p className="mb-4">
            &quot;Service&quot; refers to the Company&apos;s services accessed
            via the Site, which provides algorithmic trading solutions and
            related services.
          </p>

          <p className="mb-4">
            The terms &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer
            to the Company.
          </p>

          <p className="mb-4">
            &quot;You&quot; refers to you, as a user of our Site or our Service.
          </p>

          <p className="mb-4">
            By accessing our Site or our Service, you accept our Privacy Policy
            and Terms of Use, and you consent to our collection, storage, use
            and disclosure of your Personal Information as described in this
            Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            I. Information We Collect
          </h2>

          <p className="mb-4">
            We collect "Non-Personal Information" and "Personal Information."
            Non-Personal Information includes information that cannot be used to
            personally identify you, such as usage data, general demographic
            information we may collect, referring/exit pages and URLs, platform
            types, preferences you submit and preferences that are generated
            based on the data you submit and number of clicks. Personal
            Information includes your email, name, trading preferences, and
            other information you provide after registration.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            1. Information collected via Technology
          </h3>
          <p className="mb-4">
            To activate the Service you do not need to submit any Personal
            Information other than your email address and name. To use the
            Service thereafter, you may need to submit further Personal
            Information which may include: trading preferences, financial
            information, and usage data. We track information provided to us by
            your browser or by our software application when you view or use the
            Service, including the website you came from, the type of browser
            you use, the device from which you connected to the Service, the
            time and date of access, and other information that does not
            personally identify you.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            2. Information you provide us by registering for an account
          </h3>
          <p className="mb-4">
            To become a subscriber to the Service you will need to create a
            personal profile. You can create a profile by registering with the
            Service and entering your email address, and creating a user name
            and a password. By registering, you are authorizing us to collect,
            store and use your email address in accordance with this Privacy
            Policy.
          </p>

          <h3 className="text-xl font-semibold mb-3">3. Children's Privacy</h3>
          <p className="mb-4">
            The Site and the Service are not directed to anyone under the age of
            13. The Site does not knowingly collect or solicit information from
            anyone under the age of 13, or allow anyone under the age of 13 to
            sign up for the Service. If you believe we have collected such
            information, please contact us at support@gentrade.xyz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            II. How We Use and Share Information
          </h2>

          <h3 className="text-xl font-semibold mb-3">Personal Information:</h3>
          <p className="mb-4">
            Except as otherwise stated in this Privacy Policy, we do not sell,
            trade, rent or otherwise share for marketing purposes your Personal
            Information with third parties without your consent. We do share
            Personal Information with vendors who are performing services for
            the Company, such as the servers for our email communications who
            are provided access to user&apos;s email address for purposes of
            sending emails from us.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Non-Personal Information:
          </h3>
          <p className="mb-4">
            We use Non-Personal Information to help us improve the Service and
            customize the user experience. We also aggregate Non-Personal
            Information in order to track trends and analyze use patterns on the
            Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            III. How We Protect Information
          </h2>
          <p className="mb-4">
            We implement security measures designed to protect your information
            from unauthorized access. Your account is protected by your account
            password and we urge you to take steps to keep your personal
            information safe by not disclosing your password and by logging out
            of your account after each use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            IV. Your Rights Regarding the Use of Your Personal Information
          </h2>
          <p className="mb-4">
            You have the right at any time to prevent us from contacting you for
            marketing purposes. You can also indicate that you do not wish to
            receive marketing communications from us in your account settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            V. Links to Other Websites
          </h2>
          <p className="mb-4">
            As part of the Service, we may provide links to or compatibility
            with other websites or applications. However, we are not responsible
            for the privacy practices employed by those websites or the
            information or content they contain.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            VI. Changes to Our Privacy Policy
          </h2>
          <p className="mb-4">
            The Company reserves the right to change this policy and our Terms
            of Service at any time. We will notify you of significant changes to
            our Privacy Policy by sending a notice to the primary email address
            specified in your account or by placing a prominent notice on our
            site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">VII. Contact Us</h2>
          <p className="mb-4">
            If you have any questions regarding this Privacy Policy or the
            practices of this Site, please contact us by sending an email to
            support@gentrade.xyz
          </p>
        </section>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
          Last Updated: April 23, 2024
        </p>
      </div>
    </div>
  );
}
