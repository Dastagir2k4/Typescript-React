import React, { useState } from 'react';



// interface image  {
//   imagename:string;
// }

// interface Data extends image {
//   title: string;
//   desc: string;
// }
interface Data {
  title: string;
  desc: string;
}


const Form: React.FC = () => {
  const [data, setData] = useState<Data>({ title: '', desc: '' });
  const [dataList, setDataList] = useState<Data[]>([]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
    setDataList([...dataList, data]);
  };

  return (
    <div>
      <div className='flex flex-col bg-gray-600 p-4 m-4 text-white w-1/2 gap-5'>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
          className='bg-white text-black'
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          value={data.desc}
          onChange={handleChange}
          className='bg-white text-black'

        />
      
        <button onClick={handleSubmit} className='bg-white text-black rounded-lg cursor-pointer'>Submit</button>
      </div>
      <h1>Your Details</h1>
      <div>
        { dataList &&  dataList.map((data, index) => (
          <div key={index} className='flex flex-col bg-gray-600 p-4 m-4 text-white w-1/2' >
            <h3>Title : {data.title}</h3>
            <p>Description : {data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;