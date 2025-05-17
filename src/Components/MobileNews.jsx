const newsData = [
  {
    id: 1,
    title: "Google’s Android 12 update for smartphones has been the rockiest in years",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p5-1170x781.jpg",
    category: "Mobile",
    author: "Penci Design",
    time: "3 years ago"
  },
  {
    id: 2,
    title: "Apple and T-Mobile say iOS 15.2 didn’t switch off iCloud Private Relay",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p11-1170x780.jpg",
    category: "Mobile",
    author: "Penci Design",
    time: "3 years ago"
  },
  {
    id: 3,
    title: "Sony Xperia 5 III now shipping in the US, almost nine months...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p17-1170x781.jpg",
    time: "3 years ago"
  },
  {
    id: 4,
    title: "Honor announces the Magic V, its first premium foldable smartphone in EU",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p23-1170x780.jpg",
    time: "3 years ago"
  },
  {
    id: 5,
    title: "The OnePlus 10 Pro gets a better RAW mode and a wider...",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p29-1170x520.jpg",
    time: "3 years ago"
  },
  {
    id: 6,
    title: "Samsung’s Galaxy S22 lineup takes shape in unofficial leaks near launch",
    image: "https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p13-1170x780.jpg",
    time: "3 years ago"
  },
];

const MobileNews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6 uppercase">Mobile News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {newsData.slice(0, 2).map((item) => (
          <div key={item.id} className="relative h-64 md:h-72 lg:h-80 rounded overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 p-4 flex flex-col justify-end text-white">
              <span className="text-sm text-gray-300 mb-1">{item.category}</span>
              <h3 className="text-lg font-bold leading-tight mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">
                {item.author} &nbsp; · &nbsp; {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(2).map((item) => (
          <div key={item.id}>
            <div className="h-44 md:h-52 lg:h-56 overflow-hidden rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h4 className="mt-2 font-medium text-sm leading-tight hover:text-blue-600 cursor-pointer">
              {item.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileNews;
