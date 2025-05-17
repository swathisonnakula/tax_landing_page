import React from "react";
import Image from "next/image";
import insuranceCard from "../../public/images/icons/InsuranceCard.svg";

interface InsuranceCardProps {
  title: string;
  subtitle: string;
  isHighlighted?: boolean;
}

const Insurance: React.FC = () => {
  const InsuranceCard: React.FC<InsuranceCardProps> = ({
    title,
    subtitle,
    isHighlighted = false,
  }) => {
    return (
      <div className=" insurance-card-width mb-4">
        <div
          className={`card shadow-sm h-100 border rounded-4 ${
            isHighlighted ? " bg-primary-navy  text-white" : "bg-white"
          }`}
        >
          <div className="card-body px-5 pt-5 pb-0  text-left">
            <h3
              className={`fw-bold fs-2 mb-2 ${
                isHighlighted ? "text-white" : "text-primary-dark"
              }`}
            >
              {title}
            </h3>
            <p
              className={`mb-4 fs-4 ${
                isHighlighted ? "text-blue-100 " : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>

            <div className="d-flex  mt-4">
              <div className=" insurance-card ">
                <Image src={insuranceCard} alt={title} width={210} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const insuranceCards = [
    {
      title: "E-card",
      subtitle: "Your Key to Hassle-Free Healthcare!",
      isHighlighted: false,
    },
    {
      title: "Claims",
      subtitle: "Your Key to Hassle-Free Healthcare!",
      isHighlighted: true,
    },
    {
      title: "Hospital networks",
      subtitle: "Your Key to Hassle-Free Healthcare!",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-5 insurance">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h5 className="text-secondary-teal fw-bold mb-3">Insurance</h5>
          <h2 className="display-6 fw-bold  mb-4 text-primary-dark">
            View Policies, Track Claims & Get
            <br />
            <span className="text-primary-navy">Cashless Care!</span>
          </h2>
        </div>

        <div className="row gap-4 justify-content-center">
          {insuranceCards.map((card, index) => (
            <InsuranceCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              isHighlighted={card.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
