import React from "react";
import Image from "next/image";

const ClientData = [
  {
    image: "/client/01.svg",
    alt: "Client 1",
  },
  {
    image: "/client/02.svg",
    alt: "Client 2",
  },
  {
    image: "/client/03.svg",
    alt: "Client 3",
  },
  {
    image: "/client/04.svg",
    alt: "Client 4",
  },
  {
    image: "/client/05.svg",
    alt: "Client 5",
  },
];
const Client = () => {
  return (
    <section className="mt-[150px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-12">
            {ClientData.map((client, index) => (
              <div key={index}>
                <Image
                  src={client.image}
                  alt={client.alt}
                  width={150}
                  height={100}
                  className="max-w-none"
                />
              </div>
            ))}
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
