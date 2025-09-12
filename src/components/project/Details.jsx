import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Details({ data }) {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-xl p-5 mt-5  shadow-lg hover:cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-white truncate ">
                {item.names}
              </h2>
              <img
                src={item.imgs}
                alt={item.names}
                className="w-full h-auto rounded-md mb-4 border border-white/10"
              />
              <p className="mb-2">
                <strong className="text-indigo-400 mr-2">Language:</strong>
                <span className="text-gray-300">{item.language}</span>
              </p>
              <p className="mb-2 text-gray-300 text-sm leading-relaxed truncate">
                {item.description}
              </p>
              <p className="mb-2 text-pink-400">
                <strong className="mr-2">Coding:</strong>
                <span className="text-gray-200">{item.coding.join(", ")}</span>
              </p>
              <div className="flex gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-sm text-white transition"
                >
                  Visit Website
                </a>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-gray-300 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <div className="flex gap-3 mt-3">
                {item.bkUrl && (
                  <a
                    href={item.bkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-sm text-white transition"
                  >
                    Backend
                  </a>
                )}

                {item.githubBk && (
                  <a
                    href={item.githubBk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-gray-300 transition"
                  >
                    GitHub Backend
                  </a>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center gap-4 mt-5">
        <button className="custom-prev px-4 py-2 bg-gray-200 rounded">
          ◀ Prev
        </button>
        <button className="custom-next px-4 py-2 bg-gray-200 rounded">
          Next ▶
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gird-cols-1 justify-center  gap-5 mt-10 mb-10"></div>
    </div>
  );
}

export default Details;
