import AnimatedPage from "./AnimatedPage";
import Image from "./Image";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonals";
import ContactShortcut from "./ContactShortcut"
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <AnimatedPage>
      <main
        className="px-6 py-2 text-gray-800 max-w-5xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
                At Sharp Gbs, we understand that running a successful business
                requires more than just hard work; it requires the right support
                and expertise. <br />
                <br />
                That’s why we offer a comprehensive suite of professional
                services designed to help you streamline your operations,
                enhance your online presence, and make informed decisions that
                drive growth. Whether you’re a small startup or an established
                enterprise, our dedicated team is here to provide tailored
                solutions that meet your unique needs.
              </p>

              <div className="max-w-fit rounded-xl  transition-normal duration-400 hover:scale-105">
                <Image src="/service_provider.avif" alt="Sharp Gbs" />
              </div>
            </div>
          </section>

          <section
            className="bg-gray-50 p-6 rounded-xl shadow-xl"
            data-aos="fade-up"
            data-aos-once="false"
          >
            <h2 className="text-center text-3xl text-gray-800 drop-shadow-sm font-bold mb-2">
              Our Mission
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="rounded-xl  transition-normal duration-400 hover:scale-105">
                <Image src="/mission.png" alt="Sharp Gbs" obj="contain" />
              </div>
              <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
                Our mission is to empower businesses like yours by providing
                exceptional services that simplify your processes and enhance
                your productivity. We believe that every business deserves
                access to high-quality support, and we are committed to
                delivering results that exceed your expectations.
              </p>
            </div>
          </section>
          <section className=" px-6 pt-6 pb-3 mt-10 rounded-xl">
            <h2 className="text-center text-gray-800 text-3xl font-bold mb-2 drop-shadow-sm">
              Our Services
            </h2>
            <ServicesGrid />
          </section>
          <Testimonials />
          <section className="space-y-4 mt-6 mb-6">
            <h4 className="text-lg font-bold">Get Started Today!</h4>
            <p>
              Are you ready to take your business to the next level? Contact us
              today to learn more about how Sharp Gbs can support your growth
              and success. Our friendly team is here to answer your questions
              and provide you with the information you need to make informed
              decisions.
            </p>

            <h4 className="text-lg font-bold">Join the Sharp Gbs Family!</h4>
            <p>
              Let us be your trusted partner in navigating the complexities of
              business management. Together, we can achieve great things!
            </p>

            <p className="italic">
              Stay Connected — Follow us on social media and subscribe to our
              newsletter for the latest updates, tips, and insights to help your
              business thrive.
            </p>
            <ContactShortcut/>
          </section>
        </div>
      </main>
    </AnimatedPage>
  );
}
