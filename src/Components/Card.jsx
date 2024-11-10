/* eslint-disable react/prop-types */
function Card({ icon, description, borderColor, grid, children }) {
  return (
    <div
      className={`${borderColor} ${grid} border-t-4 rounded-md p-6 flex flex-col mb-6 shadow-xl`}
    >
      <h1 className='text-xl font-bold mb-1'>{children}</h1>
      <p className='mb-6'>{description}</p>
      <img src={icon} alt={icon} className='w-min self-end' />
    </div>
  );
}

export default Card;
