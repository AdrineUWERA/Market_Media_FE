import React, { useState, useContext } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/MyAccount/Sidebar";
import { GET_USER_DETAILS } from "../../src/Queries/UserQueries";
import { useQuery } from "@apollo/client";
import LoadingAnimation from "../../src/Components/UI/LoadingAni";
import ChangePasswordModal from "../../src/Components/MyAccount/ChangePasswordModal";
import {UserContext} from "../../src/Context/UserContext";

export default function AllProducts() {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(
    GET_USER_DETAILS
    ,{variables: { id: user }}
  );
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  }

  const userDetails = data.user;
  return (
    <>
      {!loading && !error && (
        <React.Fragment>
          <Head>
            <title>Market Media</title>
            <meta name="description" content="Welcome to market media" />
          </Head>
          <>
            <Navbar />
            <div className="flex flex-row justify-start relative">
              <Sidebar />
              <div className="flex-1 mt-14 mb-14 ml-10 mr-14 relative">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[28px] pl-5">
                    ACCOUNT SETTINGS
                  </h1>
                </div>

                <div class="overflow-x-auto ml-5 sm:rounded-lg mt-7 relative flex flex-col gap-y-5">
                  <div>
                    <span className="font-bold">Email:</span>
                    <p className="pt-2">{userDetails.email}</p>
                  </div>
                  <div>
                    <span className="font-bold">Password:</span>
                    <p className="pt-2">********</p>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn bg-[#DBA61F] px-10 py-2 text-white rounded-md"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ChangePasswordModal
              loggedInUser={user}
              currentHashedPassword={userDetails.password}
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            />
            <Footer />
          </>
        </React.Fragment>
      )}
    </>
  );
}
