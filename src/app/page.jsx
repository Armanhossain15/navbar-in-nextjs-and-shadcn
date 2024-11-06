export default function page(params) {
  return (
    <>
      <div className="relative  py-14 md:py-16 lg:py-24 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We're not just another agency – we're your partner in digital transformation.
            Our team of experts combines creativity with technical excellence to deliver
            exceptional results. From stunning designs to powerful functionality,
            we bring your vision to life with precision and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3 bg-black dark:bg-gray-100 text-white dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-800 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </>
  )
};
