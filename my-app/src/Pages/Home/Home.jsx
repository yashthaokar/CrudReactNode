import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    
    <div className='mt-5'>
      <div className="container">
        <div className="add_btn mt-2 mb-2"><Link to='/register'>
          <button className='btn btn-primary'>Add data</button></Link>
        </div>
        <table class="table">
  <thead>
    <tr className='table-success'>
      <th scope="col" colspan='1'>Id</th>
      <th scope="col" colspan='1'>User Name</th>
      <th scope="col"colspan='1'>Email Id</th>
      <th scope="col" colspan='1'>User Name</th>
      <th scope="col" colspan='1'>Contact No</th>
      <th scope="col" colspan='3'>Options</th>
    </tr>
  </thead>
  <tbody>
   
    
    <tr>
      <th scope="row">3</th>
      <td colspan="1">yash</td>
      <td colspan="1">thoakar</td>

      <td>@twitter</td>
      <td>989837383</td>
      <td><button className='btn btn-warning'>add</button></td>
      <td><button className='btn btn-info'>edit</button></td>
      <td><button className='btn btn-danger'>delet</button></td>
    </tr>
   

  </tbody>
</table>
      </div>

    </div>
    </>
    
  )
}

export default Home