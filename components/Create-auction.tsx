export const Createauction = () => {
  return (
    <div className="w-full text-white min-h-screen flex justify-center">
      <div className="w-[800px] md:mx-auto mx-2 pl-4 md:pl-10 flex flex-col">
        <div className="flex flex-col pt-10">
          <div className="text-4xl font-bold">Create auction</div>
          <div className="text-neutral-400 font-light pt-2 text-lg">
            List a new item for auction on our premium marketplace
          </div>
        </div>

        <div className="min-h-[500px] w-full mt-8 md:border-x md:border-x-neutral-900 shadow-md py-2">
          <div className="flex flex-col h-full">
            <div className="px-4 md:px-8">
              <div className="text-2xl font-semibold">Item Details</div>
              <div className="text-gray-300 font-light text-sm pt-1">
                Provide details about the item you are listing
              </div>
            </div>
            <div className="w-full flex-1 px-4 md:px-8">
              <div className="flex flex-col mt-2">
                <label className="font-semibold text-lg pt-2">Title</label>
                <input className="h-12 border border-neutral-800 focus:outline-none focus:border-neutral-500 rounded-md mt-2 px-4 bg-transparent" />
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-semibold text-lg">Description</label>
                <textarea
                  rows={5}
                  className="w-full border border-neutral-800 focus:border-neutral-500 rounded-md text-white px-4 py-3 resize-none overflow-y-scroll focus:outline-none mt-2 bg-transparent"
                  placeholder="Type a long description..."
                />
              </div>
              <div className="w-full mt-8 ">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  {/* Category Select */}
                  <div className="flex relative flex-col w-full">
                    <label className="font-semibold text-lg">Category</label>
                    <select
                      className="h-12 appearance-none border border-neutral-800 focus:outline-none focus:border-neutral-500 rounded-md mt-2 px-4 bg-black text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option value="art">Art</option>
                      <option value="collectibles">Collectibles</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="watches">Watches</option>
                      <option value="real Estate">Real Estate</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="vehicles">Vehicles</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[60px] -translate-y-1/2 text-white">
                      ▼
                    </div>
                  </div>
                  {/* Condition Select */}
                  <div className=" relative flex flex-col w-full">
                    <label className="font-semibold text-lg">Condition</label>
                    <select
                      className="h-12 border border-neutral-800 focus:outline-none focus:border-neutral-500 appearance-none rounded-md mt-2  px-4 bg-transparent text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select condition
                      </option>
                      <option value="new">New</option>
                      <option value="likenew">Like new</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="Poor">poor</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[60px] -translate-y-1/2 text-white">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[600px] w-full mt-8 rounded-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-md" />
      </div>
    </div>
  );
};
