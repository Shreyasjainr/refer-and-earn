import React, { useState } from 'react';
//helps in http requests
import axios from 'axios';


const ReferralModal = ({ show, onClose }) => {

  //to set details when input fields are filled
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  });
  //to change values in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //To handle after submit 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('/api/referral', formData);
      console.log('Referral submitted successfully:', response.data);
      alert('Referral submitted successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Error submitting referral');
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Your Name</label>
            <input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Your Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Friend's Name</label>
            <input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Friend's Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <button  type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
        {/* to close on click */}
        <button onClick={onClose} className="mt-4 text-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
