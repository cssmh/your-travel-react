import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:px-4 lg:px-16 py-12  min-h-screen px-10">
      <h1 className=" text-2xl sm:text-5xl font-bold text-red-500 my-12 text-center">
        About Us
      </h1>
      <h2 className="text-lg  font-semibold text-gray-800 my-4 ">
        Who are we?
      </h2>
      <div className=" text-gray-700 space-y-4 text-justify ">
        <p className="text-base">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Magna interdum
          auctor faucibus aptent consectetur integer est magnis non eros vel
          mattis orci sit nibh volutpat ad aliquam in tempor phasellus at etiam
          semper egestas quisque aliquet mi auctor nisi vel ipsum sapien semper
          massa enim phasellus eget purus hendrerit auctor a vulputate habitant
          amet torquent sit ad vestibulum dolor facilisi etiam ante tristique
          mauris fringilla egestas nam bibendum tellus potenti sapien varius
          torquent nam suspendisse fames finibus risus consectetur vehicula
          aliquam viverra natoque aptent duis fermentum maximus non porttitor
          litora semper placerat tincidunt mattis praesent mi netus nunc sem
          nulla arcu sed curae vehicula proin vivamus at rhoncus cras convallis
          imperdiet eros montes augue nisi eget vulputate mus rutrum volutpat
          inceptos maximus rutrum inceptos eleifend adipiscing bibendum sed eget
          augue montes morbi magnis convallis, dignissim aenean quisque lobortis
          viverra sodales lobortis purus ex pellentesque vivamus lobortis massa
          ex leo natoque augue nec mus tristique nibh nisi egestas varius rutrum
          tempus urna nostra urna dis cubilia mollis dis mauris mauris ad nullam
          id nam eget cubilia platea maecenas et consequat lacus bibendum
          vivamus nostra amet efficitur class aliquet ante fusce nec ullamcorper
          eget.
        </p>
        <p className="text-base">
          From our humble beginnings to becoming a trusted leader in the
          industry, we have always stayed true to our core values of integrity,
          commitment, and quality. We believe in building long-term
          relationships with our clients, providing personalized service, and
          constantly striving for improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
