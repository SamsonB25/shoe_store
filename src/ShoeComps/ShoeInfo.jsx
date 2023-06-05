const ShoeInfo = (props) => {
  const shoeList = [
    {
      id: Math.random().toString(),
      shoeTitle: "Samson 1623's",
      shoeImg: `https://i.imgur.com/sksdTM8.png`,
      shoePrice: "800",
      shoeSize: "10",
      description: `This is the worlds comfiest shoe. Not only is it comfortable it'll
          even get a compliment out of Conner Mcgregor.`,
      href: `https://i.imgur.com/sksdTM8.png`,
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Shoes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shoeList.map((shoe) => (
            <div key={shoe.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={shoe.shoeImg}
                  alt="Dope shoe"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={shoe.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {shoe.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{shoe.shoeTitle}</p>
                </div>
                <p className="text-sm font-medium text-blue-800">
                  ${shoe.shoePrice}
                </p>
              </div>
              <div className="mt-1">{shoe.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeInfo;
