import AnimatedPage from "./AnimatedPage";
import ContactShortcut from "./ContactShortcut";
import Image from "./Image";
const About = () => {
  return (
    <AnimatedPage>
      <main
        className="px-6 py-2 text-gray-800 mb-4 max-w-5xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">About Us:</h1>
          <section className="bg-gray-50 p-6 rounded-xl shadow-xl">
            <h2 className="text-center text-3xl text-gray-800 drop-shadow-sm font-bold mb-7">
              Sharp Gbs
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
                We are more than just a freelancing company — we are your
                strategic partner in navigating the complexities of the modern
                business landscape. Built on the foundational principles of
                integrity, excellence, and innovation, we are committed to
                delivering value-driven solutions that go beyond expectations.
                With us, you gain not just a service provider — but a trusted
                ally dedicated to your long-term success.
              </p>
              <div className="rounded-xl  transition-normal duration-400 hover:scale-105">
                <Image src="/success.webp" alt="Sharp Gbs" obj="contain" />
              </div>
            </div>
          </section>

          <section
            className="bg-gray-50 p-6 rounded-xl shadow-xl"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-center text-3xl text-gray-800 drop-shadow-sm font-bold mb-8">
              Who We Are
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="rounded-xl  transition-normal duration-400 hover:scale-105">
                <Image src="/team.jpg" alt="Sharp Gbs" obj="contain" />
              </div>
              <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
                Sharp Gbs is a team of experienced professionals with a passion
                for helping businesses succeed. Our expertise spans various
                fields, including bookkeeping, WordPress management, data
                analysis, content writing management, and digital consulting. We
                understand that every business is unique, and we take pride in
                offering tailored solutions that meet your specific needs.
              </p>
            </div>
          </section>
          
          <section className="bg-gray-50 p-6 rounded-xl shadow-xl">
            <h2 className="text-center text-3xl text-gray-800 drop-shadow-sm font-bold mb-7">
              Our Mission
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
                Our mission is to deliver high-quality, reliable services that
              enable our clients to focus on what they do best—growing their
              business. We believe in building long-term relationships with our
              clients based on trust, transparency, and exceptional service. Our
              goal is to be a valuable extension of your team, providing the
              support and expertise you need to thrive in a competitive
              landscape.
              </p>
              <div className="rounded-xl  transition-normal duration-400 hover:scale-105">
                  <Image src="/mission.png" alt="Mission" obj="contain" />
                </div>
            </div>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Stay Connected
            </h4>
            <p>
              Follow us on social media and subscribe to our newsletter for the
              latest insights, tips, and updates from Sharp Gbs. Together, we
              can navigate the path to success!
            </p>
          </section>
          <ContactShortcut/>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default About;
