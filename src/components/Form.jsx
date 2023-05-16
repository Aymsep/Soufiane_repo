import React,{useState} from 'react'
import {BsFillPencilFill} from 'react-icons/bs'
import {HiPlusCircle} from 'react-icons/hi'
import image from '../image.png'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., submit to server)
    console.log(formData);
  };
  return (
    <div className="app__form">
       <form onSubmit={handleSubmit}>
      <div className="button">
        <button type='submit'> <BsFillPencilFill/> Enregistrer</button>
        <button> <HiPlusCircle/> Nouveau</button>
      </div>

        <label>Categorie :</label>
        <select
         name=""
         id=""
         value={formData.Categorie}
         onChange={handleChange}
          >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> <br />
      
        <label >Type  :</label>
        <select
         name="Categorie"
         id="Categorie"
         value={formData.Categorie}
         onChange={handleChange}
          >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> 


        <label >PC  :</label>
        <select
         name="PC"
         id="PC"
         value={formData.PC}
         onChange={handleChange}
          >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> 

        <label >Extension  :</label>
        <input
        type='text'
        name="Extension"
        id="Extension"
        value={formData.Extension}
        onChange={handleChange}
        />

        <div className="test">
          <label htmlFor="">Date : </label>
          <input 
          type="date"
          name="Date"
          id="Date"
          value={formData.Date}
          onChange={handleChange}
           />

          <label htmlFor="">Heure : </label>
          <input 
          type="type"
          name="Heure"
          id="Heure"
          value={formData.Heure}
          onChange={handleChange}
          disabled
           />

          
         
        </div>

        <label id='disa' >Utilisateur  :</label>
        <input
        type='text'
        name="Utilisateur"
        id="disa"
        value={formData.Utilisateur}
        onChange={handleChange}
        disabled
        />

        <label id='disa' >Gravite  :</label>
        <select
        type='text'
        name="Gravite"
        id="disa"
        value={formData.Gravite}
        onChange={handleChange}
        disabled
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label id='disa' >Etat  :</label>
        <input
        type='text'
        name="Etat"
        id="disa"
        value={formData.HostName}
        onChange={handleChange}
        disabled
        />

        <label >ND client  :</label>
        <input
        type='text'
        name="client"
        id="client"
        value={formData.client}
        onChange={handleChange}
        />

        <label >Action  :</label>
        <input
        type='text'
        name="Action"
        id="Action"
        value={formData.Action}
        onChange={handleChange}
        />

        <label id='disa' >Destinataire  :</label>
        <select
        type='text'
        name="Destinataire"
        id="disa"
        value={formData.Destinataire}
        onChange={handleChange}
        disabled
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label >Observation  :</label>
        <input
        type='text'
        name="Observation"
        id="Observation"
        value={formData.Observation}
        onChange={handleChange}
        />


        <label >Ref de casque </label>
        <input
        type='text'
        name="casque"
        id="casque"
        value={formData.casque}
        onChange={handleChange}
        />
    </form>
    <img src={image} alt="" />
    </div>
  )
}

export default Form