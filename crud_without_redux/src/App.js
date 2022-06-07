import { useState } from 'react'
import './App.css';

function App() {
  const [finalArr, setFinalArr] = useState([])
  const [updateState, setUpdateState] = useState(0)
  const [edit, setEdit] = useState(false)
  const [formData, setFormData] = useState({
    fname: "", lname: "", phone: "", blood: "", branch: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const submit = (e) => {
    e.preventDefault()
    setFinalArr(oldState => ([...oldState, formData]))
    setFormData({ fname: "", lname: "", phone: "", blood: "", branch: "" })
  }

  console.log(finalArr);
  return (
    <div className="">
      <form id="formcontrol" onSubmit={submit}>
        <label>FirstName</label>
        <br />
        <input value={formData?.fname} onChange={handleChange} name="fname" id="fname" type="text" placeholder="Enter FirstName" />
        <br />
        <label>LastName</label>
        <br />
        <input value={formData?.lname} onChange={handleChange} id="lname" name="lname" type="text" placeholder="Enter FirstName" />
        <br />
        <label>Phone</label>
        <br />
        <input value={formData?.phone} onChange={handleChange} id="phone" name="phone" type="text" placeholder="Enter FirstName" />
        <br />
        <label>Branch</label>
        <br />
        <input value={formData?.branch} onChange={handleChange} id="branch" name="branch" type="text" placeholder="Enter FirstName" />
        <br />
        <label>Blood Group</label>
        <br />
        <input value={formData?.blood} onChange={handleChange} id="blood" name="blood" type="text" placeholder="Enter FirstName" />

        <br />
        <br />
        {!edit && <input type="submit" placeholder="Enter FirstName" value="Submit" />}
        {edit && <input type="button" value="update" placeholder="Enter FirstName" id="updatebtn" onClick={() => {
          setFinalArr(oldState => {
            oldState[updateState] = formData
            return [...oldState]
          })
          setFormData({ fname: "", lname: "", phone: "", blood: "", branch: "" })
          setEdit(previousState => !previousState)
        }} />}

      </form>

      <table>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Phone</th>
          <th>Branch</th>
          <th>Blood Group</th>
        </thead>
        <tbody>
          {finalArr?.map((item, index) => (<tr>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.phone}</td>
            <td>{item.branch}</td>
            <td>{item.blood}</td>
            {!edit && <td>
              <input type="button" value="Edit" id="editbtn" onClick={() => {
                setUpdateState(index)
                setFormData(item)
                setEdit(previousState => !previousState)
              }} />
            </td>}
            <td>
              <input type="button" value="Delete" onClick={() => {
                finalArr.splice(index, 1)
                setFinalArr([...finalArr])
              }} />
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
