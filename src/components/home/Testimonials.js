import React from 'react';

const testimonials = [
  {
    name: "Alex H.",
    image: "/testimonial1.jpg", 
    text: "Quality and reliability matter to me, and this website delivered. Diverse product selection and a team committed to customer satisfaction. Highly satisfied."
  },
  {
    name: "Alina H.",
    image: "testimonial2.jpg", 
    text: "Quality and reliability matter to me, and this website delivered. Diverse product selection and a team committed to customer satisfaction. Highly satisfied."
  },
  {
    name: "Genz A.",
    image: "testimonial3.jpg", 
    text: "Quality and reliability matter to me, and this website delivered. Diverse product selection and a team committed to customer satisfaction. Highly satisfied."
  }
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-white">
      <div className="text-center">
        <h2 className="text-2xl sm:text-5xl font-bold text-black ">What our client say</h2>
        <p className="text-gray-500 mt-2 text-xs sm:text-sm">Awesome service! Very much appreciated</p>
      </div>
      <div className="m-auto mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:max-w-[75%]"> 
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 md:p-2 lg:p-6 w-64 md:w-52  text-center border border-gray-500 lg:min-w-[33%]"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-black mb-4 text-xs md:text-[10px] lg:text-sm">{testimonial.text}</p>
            <h3 className="font-semibold text-black text-end">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
