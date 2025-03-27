export default function Testimonials() {
    return (
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          <div className="p-4 bg-white shadow-lg rounded-lg w-full md:w-1/3 text-center">
            <p className="text-gray-700">"Absolutely loved the design! Highly recommended!"</p>
            <h4 className="mt-2 font-semibold">- Alex J.</h4>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg w-full md:w-1/3 text-center">
            <p className="text-gray-700">"Fast delivery and stunning graphics. 10/10!"</p>
            <h4 className="mt-2 font-semibold">- Maria L.</h4>
          </div>
        </div>
      </div>
    );
  }
  