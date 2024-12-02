import React from 'react'


const CheckboxList = ({ title, items }) => (
    <div className="border-b border-gray-400 p-4">
      <h3 className="font-semibold">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="flex items-center mb-1">
          <input type="checkbox" className="mr-2 custom-red-input" />
          <span className="text-gray-500 text-sm">{item}</span>
        </div>
      ))}
    </div>
  );

export default CheckboxList;