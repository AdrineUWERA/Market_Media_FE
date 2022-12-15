import { GET_APPLICATION_DETAILS } from "../../Queries/SellersApplicationQuery";
import { useQuery } from "@apollo/client";
import LoadingAnimation from "../UI/LoadingAni";
import AcceptApplicationButton from "./AcceptApplicationButton";
import RejectApplicationButton from "./RejectApplicationButton";
import Image from "next/image";

const ApplicationModalContent = ({ businessId }) => {
  const { loading, error, data } = useQuery(GET_APPLICATION_DETAILS, {
    variables: { id: businessId },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  }

  const business = data.business;
  return (
    <div className="flex flex-col justify-content-start">
      <div className="flex flex-col px-16 py-10">
        <div className="">
          <Image src={business.image} width={400} height={200}></Image>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold mt-5">Business information</h2>
          <div className="flex flex-col gap-3 ml-3">
            <div>
              <span className="font-bold">Business name:</span>
              <p>{business.name}</p>
            </div>
            <div>
              <span className="font-bold">Business description:</span>
              <p>{business.description}</p>
            </div>
            {business.webLink && (
              <pdiv>
                <span className="font-bold">Website Link:</span>
                <p>
                  <a href={business.webLink}>{business.webLink}</a>
                </p>
              </pdiv>
            )}
            {business.socialMediaLink && (
              <div>
                <span className="font-bold">Socialmedia Link:</span>
                <p>
                  <a href={business.socialMediaLink}>
                    {business.socialMediaLink}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <h2 className="font-bold">Business Contacts</h2>
          <div className="flex flex-col gap-3 ml-3">
            <div>
              <span className="font-bold"> Business email:</span>
              <p>{business.email}</p>
            </div>
            <div>
              <span className="font-bold">Business phone number:</span>
              <p>{business.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <h2 className="font-bold">Business Contacts</h2>
          <div className="flex flex-col gap-3 ml-3">
            <div>
              <span className="font-bold">Business email:</span>
              <p>{business.email}</p>
            </div>
            <div>
              <span className="font-bold">Business phone number:</span>
              <p>{business.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <h2 className="font-bold">Business location</h2>
          <div className="flex flex-row gap-80 ml-3">
            <div className=" flex flex-col gap-3 ">
              <div>
                <span className="font-bold"> Province:</span>
                <p>{business.province}</p>
              </div>
              <div>
                <span className="font-bold">District:</span>
                <p>{business.district}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div>
                <span className="font-bold">Street address:</span>
                <p>{business.streetAddress}</p>
              </div>
              <div>
                <span className="font-bold"> Other description:</span>
                <p>{business.otherAddressDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <h2 className="font-bold">Legal document</h2>
          <div>
            <a href={business.legalDocument}  target="_blank" className="underline">
              View Document
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-10 text-[20px]">
          <span className="font-bold pb-3">ApplicationStatus:</span>
          <p>{business.applicationStatus}</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly my-8">
        <AcceptApplicationButton businessId={businessId} />
        <RejectApplicationButton businessId={businessId} />
      </div>
    </div>
  );
};

export default ApplicationModalContent;
