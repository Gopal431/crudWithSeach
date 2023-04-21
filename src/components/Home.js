import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    userName: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [search , setSearch]=useState('')
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        userName: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        userName: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, userName: tempData.userName });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="bg-gray-400 h-screen  ">
      <h1 className="text-center font-bold text-3xl">Crud App</h1>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search..." className="bg-yelloe-200 border-2 w-48 h-10 text-center ml-3 " />
      <div className="bg-[#e5e4e4] w-1/3 h-72 m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label>userName</label>
            <input name="userName" value={inputs.userName} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-[#014d64] h-8 text-white mt-3">
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      <div>
        <table className="w-full text-center">
          <thead>
            <tr className="text-yellow-300">
              <th>Name</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-white mt-5">
            {tableData.filter((user)=>user.name.toLowerCase().includes(search)).map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 bg-yellow-500 text-white rounded w-20 h-8 mt-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="mr-3 bg-red-500 text-white rounded w-20 h-8"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
