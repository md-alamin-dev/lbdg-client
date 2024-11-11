
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; 
import Swal from 'sweetalert2';

const RegisterStep2 = () => {
  
  const [donationDate, setDonationDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Retrieve stored data from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setFormData(userData);
      setDonationDate(userData.donationDate || null);
      setBirthDate(userData.birthDate || null);
      setPhone(userData.phone || "");
    }
  }, []);

  // Phone number validation for Bangladesh (should be 10 digits after the country code)
  const validatePhone = (value) => {
    const bangladeshPhonePattern = /^[0-9]{10}$/;
    return bangladeshPhonePattern.test(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (validatePhone(value)) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number. Should be 10 digits." }));
    }
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!validatePhone(phone)) validationErrors.phone = "Invalid phone number. Should be 10 digits.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Prepare the data to be logged
      const userData = {
        ...formData,
        phone,
        donationDate,
        birthDate,
      };

      // Handle the file input (photo)
      const photoFile = document.getElementById('photo').files[0];
      if (photoFile) {
        userData.photo = photoFile;
      }

      // Log the data to the console (you can also store it in state or localStorage)
      console.log("Prepared Data:", userData);

      // Display success alert and navigate to home page
      Swal.fire({
        title: 'Success!',
        text: 'You are all set to go!',
        text2: 'Your profile is complete!',
        icon: 'success',
        confirmButtonText: 'Go to Home',
      }).then(() => {
        // Clear the localStorage and navigate to the homepage
        localStorage.clear();
        navigate('/');
      });
    }
  };

  return (
    <div className="w-full min-h-screen p-6 md:p-10 border bg-gray-100">
      <div className="w-full md:w-4/5 mx-auto p-6 md:px-14 shadow-lg rounded-md border bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Complete Your Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
            {/* Name Field */}
            <div className="space-y-1">
              <label htmlFor="name" className="text-base font-medium text-gray-600">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                readOnly
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-base font-medium text-gray-600">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                readOnly
                required
              />
            </div>

            {/* Profile Photo */}
            <div>
              <h4 className="text-base font-medium text-gray-600 mb-1">Upload Your Profile Photo</h4>
              <input
                name="photo"
                type="file"
                id="photo"
                className="file-input file-input-bordered w-full"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1">
              <label htmlFor="phone" className="text-base font-medium text-gray-600">Phone Number</label>
              <div className="flex items-center">
                <span className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-l-md">+880</span>
                <input
                  name="phone"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="1XXXXXXXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Blood Group Field */}
            <div className="space-y-1">
              <label htmlFor="bloodGroup" className="text-base font-medium text-gray-600">Select Your Blood Group</label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                value={formData.bloodGroup || ''}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Role Field */}
            <div className="space-y-1">
              <label htmlFor="role" className="text-base font-medium text-gray-600">Your Role</label>
              <input
                name="role"
                type="text"
                id="role"
                value={formData.role?.join(', ') || ''}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 cursor-not-allowed"
                readOnly
                required
              />
            </div>

            {/* Last Donation Date */}
            <div className="flex flex-col gap-1">
              <div>
                <label htmlFor="donationDate" className="text-base font-medium text-gray-600">Last Donation Date</label>
              </div>
              <div className="w-full border px-4 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <DatePicker
                  selected={donationDate}
                  onChange={(date) => setDonationDate(date)}
                  placeholderText="Select Date"
                  className="px-4 py-2"
                  required
                />
              </div>
            </div>

            {/* Birth Date */}
            <div className="flex flex-col gap-1">
              <div>
                <label htmlFor="birthDate" className="text-base font-medium text-gray-600">Your Birth Date</label>
              </div>
              <div className="w-full border px-4 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  placeholderText="Select Date"
                  className="px-4 py-2"
                  required
                />
              </div>
            </div>

            {/* Weight */}
            <div className="space-y-1">
              <label htmlFor="weight" className="text-base font-medium text-gray-600">Your Weight</label>
              <input
                name="weight"
                type="text"
                id="weight"
                placeholder="e.g., 50 kg"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <label htmlFor="address" className="text-base font-medium text-gray-600">Your Address</label>
              <input
                name="address"
                type="text"
                id="address"
                placeholder="Village, P/O, Upazila, District"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mx-auto my-4">
            <button type="submit"
              className="w-full bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium mt-4 py-2 rounded-full transition-transform duration-200 transform hover:scale-105">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep2;

