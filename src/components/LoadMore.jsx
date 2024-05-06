const LoadMore = ({ onClick }) => {
    return (
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          Load More
        </button>
      </div>
    );
  };
  
  export default LoadMore;