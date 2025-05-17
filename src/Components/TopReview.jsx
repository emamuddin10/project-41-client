const techNews = [
  {
    id: 1,
    title: "Apple cuts AppleCare Plus prices for M1 MacBook Air and Pro this year",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p3-1170x780.jpg",
    category: "Computing",
    author: "Penci Design",
    time: "3 years ago"
  },
  {
    id: 2,
    title: "Nvidia’s AI-powered scaling makes old games look better without...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p4-1170x659.jpg",
    category: "Gaming",
    time: "3 years ago"
  },
  {
    id: 3,
    title: "Google’s Android 12 update for smartphones has been the...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p5-1170x781.jpg",
    category: "Mobile",
    time: "3 years ago"
  },
  {
    id: 4,
    title: "Universal Control won’t be coming to macOS Monterey until...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p6-1170x780.jpg",
    category: "Services & Software",
    time: "3 years ago"
  },
  {
    id: 5,
    title: "Computer monitors were more inventive and interesting at CES...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p9-1170x659.jpg",
    category: "Computing",
    time: "3 years ago"
  },
];

const TopReview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-md md:text-2xl font-bold uppercase mb-6">Top Review</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Featured */}
        <div className="md:col-span-1 relative h-80 rounded overflow-hidden">
          <img
            src={techNews[0].image}
            alt={techNews[0].title}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute inset-0 bg-black/30 bg-opacity-50 p-4 flex flex-col justify-end text-white">
            <span className="text-sm text-gray-300 mb-1">{techNews[0].category}</span>
            <h3 className="text-lg font-bold leading-tight mb-1">{techNews[0].title}</h3>
            <p className="text-xs text-gray-400">
              {techNews[0].author} &nbsp; · &nbsp; {techNews[0].time}
            </p>
          </div>
        </div>

        {/* Right: 4 cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {techNews.slice(1).map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="w-36 h-32 flex-shrink-0 rounded overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs text-gray-500">{item.category}</span>
                <h4 className="text-sm font-semibold hover:text-blue-600 cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopReview;
