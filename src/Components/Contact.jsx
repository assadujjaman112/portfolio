import { MdLocalPhone, MdEmail, MdLocationOn  } from "react-icons/md";

const Contact = () => {
    return (
        <div className="text-white my-5 md:my-8 lg:my-12 w-11/12 md:w-4/5 mx-auto">
            <h1 className="text-center text-3xl md:text-4xl lg:text-4xl font-bold">Contact</h1>
            <div className="bg-slate-200 rounded-lg py-5 text-black flex flex-col pl-5 md:pl-10 lg:pl-0 lg:flex-row justify-center lg:justify-evenly mt-5">
                <h1 className="flex items-center gap-2"> <span className="text-lg font-bold flex gap-2 items-center"><MdEmail className="text-xl"></MdEmail> Email </span><span className="font-bold">:</span> assadujjamanmurad120@gamil.com</h1>
                <h1 className="flex items-center gap-2"> <span className="text-lg font-bold flex gap-2 items-center"><MdLocalPhone className="text-xl"></MdLocalPhone> Phone : </span>+8801959691545</h1>
                <h1 className="flex items-center gap-2"> <span className="text-lg font-bold flex gap-2 items-center"><MdLocationOn className="text-xl"></MdLocationOn> Address : </span>Dhanmondi, Dhaka</h1>
            </div>
        </div>
    );
};

export default Contact;