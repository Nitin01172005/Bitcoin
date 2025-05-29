import React from 'react'


import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Card({ image, title, price, features, buttonText }) {
  return (
    <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image} alt={title} />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center font-bold text-4xl">{price}</p>
      <div className="text-center font-medium">
        {features.map((feature) => (
          <p key={feature} className="py-2 border-b mx-8 mt-8">{feature}</p>
        ))}
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium text-black mx-auto my-6 px-6 py-3">{buttonText}</button>
    </div>
  );
}

function Cards() {
  const plans = [
    {
      image: Single,
      title: 'Single User',
      price: '$149',
      features: ['500GB Storage', '1 Granted User', 'Send upto 2 GB'],
      buttonText: 'Start Trial',
    },
    {
      image: Double,
      title: 'Double User',
      price: '$239',
      features: ['1TB Storage', '3 Granted User', 'Send upto 5 GB'],
      buttonText: 'Start Trial',
    },
    {
      image: Triple,
      title: 'Triple User',
      price: '$299',
      features: ['5 TB Storage', '8 Granted User', 'Send upto 20 GB'],
      buttonText: 'Start Trial',
    },
  ];

  return (
    <div className="w-full px-4 bg-white py-[10rem]">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}



export default Cards;