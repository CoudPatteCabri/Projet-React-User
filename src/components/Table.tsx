import { JobListContext } from "@/App";
import User from "@/models/User";
import { enableUser, getUsers } from "@/utils/api";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Table() {
  const [users, setUsers] = useState<User[]>([]);
  const { jobList } = useContext(JobListContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const u = await getUsers();
      setUsers(u);
    };
    fetchUsers();
  }, []);

  const handleCheckbox = async (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.target.disabled = true;
    const currentCheckedStatus = e.target.checked;
    try {
      await enableUser(id, !currentCheckedStatus);
      e.target.checked = !currentCheckedStatus;
    } catch (error) {
      console.log(error);
      e.target.checked = currentCheckedStatus;
    }
    e.target.disabled = false;
  };

  return (
    <div className="overflow-x-auto p-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Telephone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={user.enabled}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleCheckbox(user.id, e);
                    }}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.img} alt={user.fullname} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.fullname}</div>
                    <div className="text-sm opacity-50">{user.area}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {jobList.find((job) => parseInt(job.id) == user.job)?.name}
                </span>
              </td>
              <td>{user.tel}</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <RiDeleteBin2Fill /> Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Telephone</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
