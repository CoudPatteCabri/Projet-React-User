import Provider from "@models/Provider";
import { getProviders } from "@utils/api";
import React, { useEffect } from "react";
import Card from "./Card";
import { AreaContext, JobContext, SearchInputContext } from "../App";

function CardList() {
  const [providers, setProviders] = React.useState<Provider[]>([]);
  const { searchInput } = React.useContext(SearchInputContext);
  const { area } = React.useContext(AreaContext);
  const { job } = React.useContext(JobContext);

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      {providers
        .filter((provider) => {
          if (job !== "")
            return (
              provider.fullname
                .toLowerCase()
                .includes(searchInput.toLowerCase()) &&
              area.includes(provider.area) &&
              provider.job === parseInt(job)
            );
          else
            return (
              provider.fullname
                .toLowerCase()
                .includes(searchInput.toLowerCase()) &&
              area.includes(provider.area)
            );
        })
        .map((provider, index) => (
          <Card key={index} provider={provider} />
        ))}
    </div>
  );
}

export default CardList;
