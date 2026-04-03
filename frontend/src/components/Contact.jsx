return (
    <AnimatedPage>
      {/* CHANGE 1: Added min-h-[calc(100vh-200px)] to ensure it fills the gap between Nav and Footer.
        CHANGE 2: Added flex and items-center to keep the card vertically centered.
      */}
      <main className="px-6 py-12 md:py-20 text-gray-800 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]">
        
        <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden lg:flex-row items-stretch justify-center">
          
          {/* Left side - Branding & Animation */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left p-8 lg:p-16 bg-gray-50">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Let's talk about{" "}
              <span className="text-purple-600 underline decoration-purple-200">everything!</span>
            </h1>
            <p className="text-gray-500 mb-6 max-w-xs">
              Have a question or a project in mind? We're here to help you scale.
            </p>
            
            <DotLottieReact
              src="https://lottie.host/94a723c2-146e-480a-9822-d01e3cde9ca4/Mkre1yDMOm.lottie"
              loop
              autoplay
              className="w-64 h-64 md:w-80 md:h-80"
            />
            
            {success && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg animate-bounce">
                ✓ Message sent successfully!
              </div>
            )}
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 XXXXX"
                  required
                  className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="contained"
                disabled={sending === 'Sending'}
                className="!bg-purple-600 !text-white !py-4 !rounded-xl !font-bold !shadow-lg hover:!bg-purple-700 !transition-all disabled:!bg-gray-400"
              >
                {sending}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
