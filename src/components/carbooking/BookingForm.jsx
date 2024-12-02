import React from "react";

const BookingForm = () => {
  return (
    <div className="w-full">
      <div classname=" flex-col ">
        <div className="bg-white border border-gray-300 rounded-lg p-6 ">
          {/* First Row: Heading */}
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Enter your detail
          </h1>

          {/* Second Row: Name Fields */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Third Row: Gender and ID */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Gender</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Identification Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Fourth Row: Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Fifth Row: Paragraph */}
          <p className="text-sm text-gray-600 mb-4">
            Email verification is sent to this address.
          </p>

          {/* Sixth Row: Divider */}
          <hr className="border-gray-300 mb-4" />

          {/* Seventh Row: Address Heading */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Address Details
          </h2>

          {/* Eighth Row: Address Fields */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Address</label>
            <input
              type="text"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Ninth Row: City and Postal Code */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">City</label>
              <select className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Tenth Row: Country Region and Phone Number */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Country/Region
              </label>
              <input
                type="text"
                className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:w-1/2 gap-2">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Code</label>
                <select className="w-full border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              </div>
              <div className="sm:col-span-2 max-w-2xl">
                <label className="block text-gray-600 text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full  border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Eleventh Row: Checkbox and Paragraph */}
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1 accent-red-500" />
            <p className="text-sm text-gray-600">
              I have read and accept the Terms & Conditions.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 w-full mt-4">
          {/* First Row: Heading */}
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            How would you like to pay?
          </h1>

          {/* Second Row: Name Fields */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Cardholder’s name*
              </label>
              <input
                type="text"
                className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Card type
              </label>
              <select className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">--Select--</option>
                <option value="city1">visa</option>
                <option value="city2">paypal</option>
                <option value="city3">debit</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Card number*
              </label>
              <input
                type="text"
                className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600 text-sm mb-2">
                Expiry Date*
              </label>
              <div className="flex gap-2 sm:w-1/2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className=" w-2/3  border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 ">
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">CVC*</label>
              <input
                type="text"
                className="w-1/4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-2 my-2">
          <input type="checkbox" className="mt-1 accent-red-500" />
          <p className="text-sm text-gray-600">
            you agree with our
            <span className="text-red-500">Terms & conditions {""}</span>
            and {""}
            <span className="text-red-500">Privacy statement</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
