import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../actions/user-action";

export default function Profile({ history }) {
  const { userInfo } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    userInfo ? dispatch(userProfileAction()) : history.push("/");
  }, []);
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border mx-40 my-10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm ">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold ">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile?.name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold ">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile?.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile?.address[0].houseNo} {profile?.address[0].street}
              <br />
              {profile?.address[0].pincode} {profile?.address[0].city}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    //     <div classNameName='container' >
    //         <div classNameName="row">
    //             <div classNameName="mt-5 col-sm-6 offset-sm-3">
    //                 {/* <div classNameName="card" style={profile?.isAdmin ? { border: "2px solid red" } : { border: "2px solid blue" }}> */}
    //                 <div classNameName={profile?.isAdmin ? "card border-success border-3" : "card border-warning border-3"}>
    //                     <div classNameName="card-header">
    //                         Profile
    //                     </div>
    //                     <div classNameName="card-body">
    //                         <ul classNameName="list-group">
    //                             <li classNameName="list-group-item">
    //                                 <strong>Name:</strong> <span>{profile?.name}</span>
    //                             </li>
    //                             <li classNameName="list-group-item">
    //                                 <strong>Email:</strong> <span>{profile?.email}</span>
    //                             </li>
    //                             <li classNameName="list-group-item">
    //                                 <strong>Address</strong>
    //                                 <ul classNameName="list-group">
    //                                     <li classNameName="list-group-item">
    //                                         <strong>House No:</strong> <span>{profile?.address[0].houseNo}</span>
    //                                     </li>
    //                                     <li classNameName="list-group-item">
    //                                         <strong>Street:</strong> <span>{profile?.address[0].street}</span>
    //                                     </li>
    //                                     <li classNameName="list-group-item">
    //                                         <strong>Pincode:</strong> <span>{profile?.address[0].pincode}</span>
    //                                     </li>
    //                                     <li classNameName="list-group-item">
    //                                         <strong>City:</strong> <span>{profile?.address[0].city}</span>
    //                                     </li>
    //                                 </ul>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
  );
}
