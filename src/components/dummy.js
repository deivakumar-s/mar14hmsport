import React from 'react';
import img1 from '../assests/img1.gif';
import img2 from '../assests/img22.gif';
import img3 from '../assests/img3.gif';
import img4 from '../assests/img4.gif';
import img5 from '../assests/img55.gif';
import img6 from '../assests/img66.gif';

const Dummy = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ServiceCard img={img1} title="Patient Registration" description="Our system streamlines patient registration, simplifying data entry and record-keeping. Features include demographic data collection, efficient medical history storage, and accurate insurance information management, optimizing care delivery and decision-making." />
        <ServiceCard img={img2} title="Billing" description="Our system automates billing, simplifying invoicing, payments, and insurance claims for hospitals, enhancing financial efficiency." />
        <ServiceCard img={img3} title="Outpatient" description="Our system simplifies The nurse station manages patient billing and queues patient lists, where nurses review fundamental reports and formal tests and OPstatistics." />
        <ServiceCard img={img4} title="Doctor" description="In the doctor module, completed formal tests are reviewed, followed by patient examination, treatment, and prescription writing. Prescriptions are then directly sent to the pharmacy." />
        <ServiceCard img={img5} title="Pharmacy" description="Our system simplifies the pharmacy module, doctor prescriptions are received, checked for stock availability, and dispensed to the patient." />
        <ServiceCard img={img6} title="Human Resource" description="Our system optimizes staff scheduling, ensuring adequate coverage, minimizing costs, and enhancing patient care quality through intuitive tools for shift planning and workload distribution." />
      </div>
    </div>
  );
}

const ServiceCard = ({ img, title, description }) => {
    return (
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        <img src={img} alt="Service" className="h-64 object-cover transition-transform duration-300 transform-gpu hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:opacity-100">
          <div className="px-6 py-4 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Dummy;
