import { useContext } from "react";
import { JobListContext } from "../App";
import Provider from "@models/Provider";

function Card({ provider }: { provider: Provider }) {
  const { jobList } = useContext(JobListContext);
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure>
        <img
          src={provider.img}
          alt={provider.fullname}
          className=" object-cover w-full h-48 rounded-t-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {provider.fullname}
          <div className="badge badge-secondary">
            {jobList.find((job) => parseInt(job.id) == provider.job)?.name}
          </div>
        </h2>
        <p>{provider.tel}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{provider.area}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
