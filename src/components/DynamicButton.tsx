import { useRef, useState, useEffect } from 'react';

const DynamicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);  // Create a ref for the button
  const [isClicked, setIsClicked] = useState(false); // Track button click state

  // useEffect to focus on the button when the component loads
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []); // Empty dependency array means this runs only once on mount

  // Handle button click
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        ref={buttonRef} // Attach the ref to the button element
        onClick={handleClick}
        className={`px-4 py-2 rounded-md text-white font-bold ${
          isClicked ? 'bg-green-500' : 'bg-blue-500'
        } hover:bg-opacity-80 focus:rounded-full focus:ring-4 focus:ring-opacity-50`}
      >
        {isClicked ? 'Clicked!' : 'Click Me'}
      </button>
    </div>
  );
};

export default DynamicButton;
