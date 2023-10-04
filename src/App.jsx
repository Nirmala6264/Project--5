import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import './App.css'
import { Badge } from '@mui/material';
const App = () => {
    
    return (
    <div className="container">
        <nav>< SearchOutlinedIcon /><input type='text' SearchOutlinedIcon  placeholder='Search'/>
          <Badge count={2} dot><NotificationsNoneRoundedIcon /></Badge>
      </nav>
          
        <p id='sale'>Sales Information</p>
          <div id='main'>
        <h id='sale' >Sales Information</h>
        <label  className='label'form='customer'>customer</label>
        <input type='text' id='customer' name='customer' placeholder='Enter Costumer Name'></input>
        <label form='Invoice ID'>Invoice ID</label>
        <input type='number' id='Invoice ID' name='Invoice ID' placeholder='Enter Invoice ID'></input>
         <label form='Start Date'>Start Date</label>
        <input type='number' id='Start Date' name='Start Date' placeholder='Start Date'></input>
         <label form='End Date'>End Date</label>
        <input type='number' id='End Date' name='End Date' placeholder='End Date'></input>
      </div>
         <div id='sidebar'>Medico Sales
        <ul id='side-menu'>
           
              <li className='active'><GridViewOutlinedIcon/>Dashboard</li>
              <li className='none'><EventAvailableOutlinedIcon/>Lab Test</li>
          <li className='none'><MedicalInformationOutlinedIcon/>Appointment</li>
          <li className='none'><MedicalServicesOutlinedIcon/>Medicine Order</li>
          <li className='none'><MailOutlineRoundedIcon/>Message</li>
          <li className='none'><CreditCardOutlinedIcon/>Payment</li>
          <li className='none'>< SettingsOutlinedIcon/>Settings</li>
          
        </ul>
      </div>

        <div id='content'>
          <table className='table' >
          <thead>
        <tr>
          <th>#</th>
          <th className='active'>Invoice ID</th>
          <th>Date</th>
                <th>Customer</th>
                <th>PayableAmount</th>
                <th>PaidAmount</th>
                <th>Due</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
              </tr>
              <tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr><tr>
          <td>#</td>
          <td className='active'>#AHGA68</td>
          <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>000</td>
                <td>000</td>
        </tr>
        
          
      </tbody>
    </table>
        
      </div>

    </div>
      
  );
};

export default App;