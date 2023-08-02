import { useState } from 'react'
import './App.css'

export default function App() {
  const [selectOption, setOptionValue] = useState("option1");

  const handleDropdownChange = (event) => {
    setOptionValue(event.target.value);
  };
  return(
    <div className="square">
		<i className="i_1"></i>
		<i className="i_2"></i>
		<i className="i_3"></i>
		<div class="login">
			<h2>Create Account</h2>
			<div className="inputBx">
				<input type="text" placeholder="Username" />
			</div>
			<div className="inputBx">
				<input type="password" placeholder="Password" />
			</div>


      <div className="changeCountry">
      <label>
        Country:
        <select value={selectOption} onChange={handleDropdownChange}>
          <option value="Uzbekistan ">Uzbekistan</option>
          <option value="China">China</option>
          <option value="Korea">Korea</option>
          <option value="California USA">California USA</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Thailand">Thailand</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Russia">Russia</option>
          <option value="Paris">Paris</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
        </select>
      </label>
    </div>


			<div className="glow-on-hover">
				<input type="submit" value="Submit" className="glow-on-hover" />
			</div>
		</div>
	</div>
  );}
