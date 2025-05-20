import React from 'react'

const BlogDetail = () => {
  return (
    <div className="bg-white text-gray-900 font-sans text-[13px] leading-[18px] max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
       {/* Left main content */}
        <main className="flex-1 max-w-4xl">
          <img
            src="https://storage.googleapis.com/a1aa/image/7048f2b6-504c-41b0-5254-05dff558383f.jpg"
            alt="Shoe advertisement with text 'No Harm No Foul' and 40% discount, dark brown background with white shoe silhouette"
            className="w-full h-auto object-cover rounded mb-3"
            width="720"
            height="200"
          />
          <p className="mt-3 text-base text-gray-500">June 30,2022 - Organic</p>
          <h2 className="mt-2 font-semibold text-lg">Marketing Guide: 5 Steps to Success.</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ipsum.
          </p>
          <p className="mt-2 text-sm italic text-gray-600">
            The standard chunk of Lorem ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
          </p>
          <div className="mt-6 flex gap-6">
            <img
              src="https://storage.googleapis.com/a1aa/image/e020dee1-9314-4271-a4f4-8b3e2718a9dc.jpg"
              alt="White sneaker with red swoosh side view on white background"
              className="w-1/2 h-auto object-contain"
              width="320"
              height="100"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/0ff0cb13-22d2-4223-9aa9-e3bee7b9aa85.jpg"
              alt="Black sneaker with yellow swoosh side view on white background"
              className="w-1/2 h-auto object-contain"
              width="320"
              height="100"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page distracted by the readable when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            There are many variations of passages of Lorem ipsum available, but the majority have suffered distracted by the readable attention in some form, by injected humour.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Please <a href="#" className="text-blue-700 underline">login</a> or <a href="#" className="text-blue-700 underline">register</a> to review the blog comments.
          </p>
        </main>

      {/* Sidebar */}
      <aside className="w-full max-w-xs">
        {/* Search */}
         <form className="relative text-gray-800 mb-5 flex items-center">
          <input
            type="search"
            name="search"
            placeholder="Search Our Blog"
            className="w-full border border-gray-300 rounded px-3 py-2 text-[16px] focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <button type="submit" className="absolute right-2 top-2 text-gray-400">
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
        <label className="flex-1 cursor-pointer text-base" htmlFor={cat.id}>
          {cat.label}
        </label>
        <span className="text-gray-400 text-[10px]">- {cat.count}</span>
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
  )
}

export default BlogDetail