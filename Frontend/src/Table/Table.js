import React from 'react'

const Table = () => {
  return (
    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>1</th>
          <td>Micheal Holz</td>
          <td>04/09/2020</td>
          <td>Admin</td>
          <td>Active</td>
          <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
          <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/> </td>
        </tr>
        <tr>
        <th>2</th>
          <td>Paula Wilson</td>
          <td>09/11/2021</td>
          <td>Publisher</td>
          <td>Active</td>
          <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
          <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
        </tr>
        <tr>
        <th>3</th>
          <td>Antonio Moreno</td>
          <td>11/07/2022</td>
          <td>Publisher</td>
          <td>Suspended</td>
          <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
          <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
        </tr>
        <tr>
        <th>4</th>
          <td>Mary savaley</td>
          <td>27/01/2019</td>
          <td>Reviewer</td>
          <td>Active</td>
          <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
          <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
        </tr>
        <tr>
        <th>5</th>
          <td>Martin Sommer</td>
          <td>30/04/2023</td>
          <td>Moderator</td>
          <td>Inactive</td>
          <td><img src="./Images/setting.png" style={{width:'20px', height:'20px'}}/>&nbsp;
          <img src="./Images/delete.jfif" style={{width:'20px', height:'20px'}}/></td>
        </tr>
        
      </tbody>
    </table>
  </div>
  )
}

export default Table