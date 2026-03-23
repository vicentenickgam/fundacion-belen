const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      
      <div className="text-green-600 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default Card;