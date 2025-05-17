

const Banner = () => {
  return (
   <section className="max-w-full mx-auto ">
    <div className="carousel w-full shadow-xl">

      {/* <!-- Slide 1 --> */}
      <div style={{backgroundImage:`url('https://soledaddemo.pencidesign.net/soledad-crypto-nft-personal-blog/wp-content/uploads/sites/35/2022/06/p1.jpg')`}} id="slide1" className="cover carousel-item relative w-full h-[400px] bg-gradient-to-r from-sky-100 to-blue-300 flex items-center justify-center text-center">
        <div className="bg-white/40 p-20 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Discover Inspiring Stories</h2>
          <p className="mt-4 text-lg text-gray-700 font-bold max-w-xl mx-auto">Dive into real-life experiences, lessons, and motivational reads every week.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* <!-- Slide 2 --> */}
      <div style={{backgroundImage:`url('https://soledaddemo.pencidesign.net/soledad-modern-tech/wp-content/uploads/sites/18/2022/01/p26-1170x780.jpg')`}} id="slide2" className="carousel-item relative w-full h-[400px] bg-gradient-to-r from-green-100 to-green-300 flex items-center justify-center text-center">
        <div className="bg-blue-600/15 p-20 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tips to Boost Your Productivity</h2>
          <p className="mt-4 text-lg text-white max-w-xl mx-auto">Get practical strategies, tools, and habits to make the most of your time.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* <!-- Slide 3 --> */}
      <div style={{backgroundImage:`url('https://soledad.pencidesign.net/soledad-magazine/wp-content/uploads/sites/7/2017/07/travel-vietnam-1170x723.jpg')`}} id="slide3" className="bg-cover bg-no-repeat carousel-item relative w-full h-[400px] bg-gradient-to-r from-purple-100 to-purple-300 flex items-center justify-center text-center">
        <div className="bg-white/40 p-20 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Join Our Blogging Community</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">Share your voice, connect with writers, and grow your online presence.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  </section>

  );
};

export default Banner;
