import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaRegClipboard } from "react-icons/fa";

const RulesPolicy = () => {
    const items = [
        {
          icon: <FaSignInAlt className="text-red-500 w-5 h-5" />,
          text: "Check In",
        },
        {
          icon: <FaSignOutAlt className="text-red-500 w-5 h-5" />,
          text: "Check Out",
        },
        {
          icon: <FaRegClipboard className="text-red-500 w-5 h-5" />,
          text: "Policy",
        },
      ];
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Rules & Policy</h2>
      <div className="flex gap-2 ">
      <div className="w-2/6">
      {items.map((item, index) => (
        <div className="flex items-center gap-4 mb-1 md:mb-4 text-[8px] md:text-sm" key={index}>
          {item.icon}
          <p className=" font-semibold">{item.text}</p>
        </div>
      ))}
    </div>
          
           
            <div className="text-gray-700 text-[8px] md:text-sm w-4/6">
            <p className="mb-4">12:00 PM</p>
            <p className="mb-4">11:00 AM</p>
              <div>
                <p className="font-bold mb-2">SMOKING-FREE:</p>
                <p className="mb-4">
                  Mantasaly Resort has been Smoking-Free since the opening in
                  August 2016. For safety and to assure that our facility is not
                  exposed to items or actions that create an odor which is
                  unhealthy and objectionable to our guests and staff, and that
                  is difficult to remove from the air, carpet, walls, and
                  furniture we do not permit smoking tobacco, marijuana, illegal
                  drugs, e-cigarettes, vape pens, cartridges containing the
                  liquid of nicotine, hookahs, incense, cooking, cigars, candle
                  burning, the use or diffusing of patchouli oil or other
                  strong-smelling plant-based essential oils or synthetic
                  products in our facility. Guests are encouraged to notify
                  Front Desk staff immediately if they smell cigarettes,
                  marijuana, or other objectionable odors. This policy is not
                  intended to stop people from smoking, but to regulate where
                  they smoke and how it affects others. Mantasaly Resort
                  provides many open spaces outside rooms and restaurants such
                  as private terraces, club swimming pool area, and alleys all
                  inside the complex. Marijuana is prohibited at all times.
                </p>
              </div>
              <div className="my-8">
                <p className="font-bold mb-2">CANDLE, INCENSE, ESSENTIAL OILS:</p>
                <p>
                  Candle, incense, essential oils (diffusing, vaporizing, etc.)
                  are prohibited. These items and activities will be treated as
                  smoking, a fine accessed, and the guest may be evicted with no
                  refunds. NO-COOKING, COOKING APPLIANCES, COMBUSTIBLES, OR
                  FIREWORKS: The safety of our guests, staff, and this facility
                  is extremely important to us. Preparation of food in guest
                  rooms by any type of cooking appliances is prohibited. A
                  minimum fee of $200.00 will be charged for cooking in a room,
                  including, but not limited to coffee makers, hot plates,
                  toaster ovens, water heaters, rice cookers, combustible open
                  flame, barbecue grill, burners, heating appliance, or any
                  other item intended for cooking. Open fires, flames or cooking
                  grills, either charcoal or gas, and fireworks are not allowed
                  anywhere on hotel property. For food and coffee, please always
                  order at the restaurant.
                </p>
              </div>
              <div className="my-8">
                <p className="font-bold mb-2">GUARANTEED RESERVATIONS:</p>
                <p>
                  All reservations must be guaranteed with a deposit account.
                  Guests must be 18 years and older. We accept bank transfer,
                  Madagascar bank check, cash Ariary, Euro and US Dollar. We do
                  charge 50% deposit account at the time you make your
                  reservation in order to guarantee and the other 50% at
                  check-in. Please make sure to receive a reservation
                  confirmation number when you make a reservation. Reservations
                  must be cancelled seventy-two (72 hours), hotel time, prior to
                  your arrival date, in order to avoid a one (1) room night,
                  plus tax cancellation fee. Reservations will be held until
                  4:00 pm, the afternoon following your scheduled arrival date.
                  If you have not checked in by that time, a NO-SHOW charge of
                  one room night, plus tax will be charged to your deposit
                  account and the balance of your reservations will be
                  cancelled. Mantasaly Resort is not responsible for weather
                  conditions, personal emergencies, or schedule changes.
                </p>
              </div>
            </div>
          </div>
        
   
    </section>
  );
};

export default RulesPolicy;
