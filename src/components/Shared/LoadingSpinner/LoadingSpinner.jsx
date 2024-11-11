const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Outer div with spinning border */}
      <div className="w-20 h-20 border-[6px] border-t-red-500 border-r-red-800 border-solid rounded-full animate-spin"></div>
    </div>
  );
}; 

export default LoadingSpinner;
