import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { PiJeepThin } from "react-icons/pi";
export const formFields = [
    {
        icon: CiLocationOn,
        label: "Location",
        description: "Enter your destination",
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Number of guests",
    },
    {
        icon: BsBoxArrowRight,
        label: "Check-in",
        description: "Add date",
    },
    {
        icon: BsBoxArrowLeft,
        label: "Check-out",
        description: "Add date",
    },
];

export const formFieldsForTour = [
    {
        icon: CiLocationOn,
        label: "Destinations",
        description: "Drop down",
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Drop down",
    },
    {
        icon: BsBoxArrowRight,
        label: "Date",
        description: "Add date",
    },
    {
        icon: BsBoxArrowLeft,
        label: "Duration",
        description: "Drop down",
    },
];

export const formFieldsForCar = [
    {
        icon: PiJeepThin,
        label: "From",
        description: "Start Location",
    },
    {
        icon: PiJeepThin,
        label: "To",
        description: "End Location",
    },
    {
        icon: IoCalendarOutline,
        label: "Start Time",
        description: "Add date",
    },
    {
        icon: IoCalendarOutline,
        label: "End Time",
        description: "Add date",
    },
    {
        icon: CiUser,
        label: "Passengers",
        description: "Add Passengers",
    },
];