export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#4FC3F7] via-[#A6E3E9] to-[#B9FBC0] text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-950">
          Download AadyaPay Today
        </h2>
        <p className="mb-8 text-lg text-black">
          Experience fast, secure, and rewarding payments. Join millions of users already using AadyaPay.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-full bg-blue-950 text-white font-bold shadow-lg hover:bg-blue-800 transition duration-300">
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
