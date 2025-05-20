import React from "react";

const Blog = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content: blog posts grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                img: "https://storage.googleapis.com/a1aa/image/338f32ec-98a8-4257-788f-afb8d9809e95.jpg",
                date: "June 30,2022 · Organic",
                title: "Marketing Guide: 5 Steps to Success to way.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/28cb40bf-f59b-4c6c-1868-89725db1e51f.jpg",
                date: "April 02,2022 · Fruits",
                title: "Best way to solve business deal issue in market.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/48476412-dcbd-4aab-321d-3f0a41046932.jpg",
                date: "Mar 09,2022 · Vegetables",
                title: "31 grocery customer service stats know in 2019.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/7303d2e4-61d7-4dc7-b056-77330ac74fdc.jpg",
                date: "January 25,2022 · Fastfood",
                title: "Business ideas to grow your business traffic.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/f1e63e20-95b0-48aa-37d1-1aae8045a21b.jpg",
                date: "December 10,2021 · Fruits",
                title: "Marketing Guide: 5 Steps way to Success.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                img: "https://storage.googleapis.com/a1aa/image/dce9c1ce-1fab-4442-a6a2-433fac40f2f7.jpg",
                date: "August 04,2021 · Vegetables",
                title: "15 customer service stats idea know in 2023.",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
            ].map((post, idx) => (
              <article key={idx} className="bg-[#f0f4f7] p-6">
                <img
                  src={post.img}
                  alt="Blog post image"
                  className="w-full h-auto mb-4"
                />
                <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-sm font-semibold mb-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3 leading-tight">
                  {post.desc}
                </p>
                <a
                  href="#"
                  className="text-xs font-semibold text-gray-600 hover:underline"
                >
                  Read More &gt;
                </a>
              </article>
            ))}
          </div>

          {/* Right sidebar */}
          <aside className="w-full max-w-xs">
            {/* Search */}
            <form className="relative text-gray-800 mb-5">
              <input
                type="search"
                name="search"
                placeholder="Search Our Blog"
                className="w-full border border-gray-300 text-gray-800 rounded px-3 py-2 text-[12px] focus:outline-none focus:ring-1 focus:ring-green-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-400"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* Recent Articles */}
            <div className="mb-7 border border-gray-200 rounded p-4">
              <h4 className="text-lg font-semibold py-2">Recent Articles</h4>
              <ul className=" text-xs text-gray-600">
                {[
                  {
                    title: "The Best Fashion Influencers.",
                    date: "June 30,2021-2022",
                    category: "Organic",
                    img: "https://storage.googleapis.com/a1aa/image/1d4d82f4-44bb-4eb8-ebfa-da1cc3f908ec.jpg",
                  },
                  {
                    title: "Vogue Shopping Weekend.",
                    date: "April 02,2021-2022",
                    category: "Fruits",
                    img: "https://storage.googleapis.com/a1aa/image/cd8837ff-a675-40d0-501c-a623630c2ae3.jpg",
                  },
                  {
                    title: "Fashion Market Reveals Her.",
                    date: "Mar 09,2021-2022",
                    category: "Vegetables",
                    img: "https://storage.googleapis.com/a1aa/image/f3aaedf6-3602-4738-951f-383ec22f5908.jpg",
                  },
                  {
                    title: "Summer Trending Fashion.",
                    date: "January 25,2021-2022",
                    category: "Fastfood",
                    img: "https://storage.googleapis.com/a1aa/image/8fff8dfa-de95-48be-260e-e24f3c6115fd.jpg",
                  },
                  {
                    title: "Winter Trending Fashion.",
                    date: "December 10,2021-2022",
                    category: "Vegetables",
                    img: "https://storage.googleapis.com/a1aa/image/8fff8dfa-de95-48be-260e-e24f3c6115fd.jpg",
                  },
                ].map((article, index) => (
                  <li
                    key={index}
                    className="flex gap-3 border-t border-gray-400 pt-6 pb-3"
                  >
                    <img
                      className="w-20 h-18 rounded-md object-cover"
                      src={article.img}
                      alt={article.title}
                    />
                    <div className="text-sm leading-[1.1]">
                      <p className="font-semibold text-gray-800 leading-[1.1] truncate">
                        {article.title}
                      </p>
                      <p className="text-gray-500 text-xs leading-[1.1] m-0">
                        {article.date}
                      </p>
                      <p className="text-green-600 text-xs leading-[1.1] m-0">
                        - {article.category}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="border border-gray-200 rounded p-4">
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <form>
                {[
                  { id: "organic", label: "Organic", count: 2 },
                  { id: "fruits", label: "Fruits", count: 3 },
                  { id: "vegetables", label: "Vegetables", count: 2 },
                  { id: "fastfood", label: "Fastfood", count: 2 },
                ].map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center gap-2 mb-2 text-xs text-gray-600"
                  >
                    <input
                      className="w-3 h-3 border border-gray-300 rounded"
                      id={cat.id}
                      type="checkbox"
                    />
                    <label
                      className="flex-1 cursor-pointer text-base"
                      htmlFor={cat.id}
                    >
                      {cat.label}
                    </label>
                    <span className="text-gray-400 text-[10px]">
                      - {cat.count}
                    </span>
                  </div>
                ))}
                <div className="flex justify-end mt-2 text-white">
                  <button
                    className="bg-green-600 text-xs px-3 py-1 rounded hover:bg-green-700  transition"
                    type="submit"
                  >
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>Showing 1-6 of 6 item(s)</p>
          <nav className="inline-flex items-center space-x-1 gap-1">
            <button
              className="px-2 py-1 rounded text-gray-300 cursor-not-allowed border border-gray-200"
              disabled
            >
              Prev
            </button>
            <button
              aria-current="page"
              className="px-2 py-1 rounded bg-green-400 text-white border border-green-400"
            >
              1
            </button>
            <button className="px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-200 hover:bg-green-400 hover:text-white transition">
              2
            </button>
            <button className="px-2 py-1 rounded bg-green-400 text-white border border-green-400">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;
