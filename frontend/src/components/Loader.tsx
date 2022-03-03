import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-800 text-white flex flex-row justify-center items-center">
    <p>
        <span role="img" aria-label="rocket" className="mr-4">
            🚀
        </span>
        It's Loading
    </p>
</div>
  )
}

export default Loader