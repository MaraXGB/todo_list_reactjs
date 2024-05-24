import React from 'react';
import './TodoMenuProfile.css';
import { TodoButtonChangeProfile } from '../TodoButtonChangeProfile';
import { TodoButtonCancelProfile } from '../TodoButtonCancelProfile';
import { TodoContext } from '../TodoContext';

function TodoMenuProfile() {
  const {
    changeProfile,
    setIsClosed,
    newNickname,
    setNewNickname,
  } = React.useContext(TodoContext);
    const [selectedFile, setSelectedFile] = React.useState(null);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then((base64) => {
        setSelectedFile(base64);
        // localStorage.setItem('imageBase64', base64);
        // console.debug('Imagen almacenada en localStorage', base64);
      });
    };
  
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
    changeProfile(newNickname,selectedFile);
    setIsClosed(false);
  };
  
  const onChange = (event) => {
    event.preventDefault();
    setNewNickname(event.target.value);
  };
  return (
    <form className='menu-profile' onSubmit= {onSubmit}>
      <h1 className='profile-title'>Perfil</h1>
      <label className='nickname-label'>Nickname</label>
      <input className='nickname-input' placeholder='Escribe un nombre o sobrenombre' value={newNickname} onChange={onChange}/>
      <input
        type="file"
        name="file-1" id="file-1" class="inputfile inputfile-1" onChange={handleImageUpload} data-multiple-caption="{count} archivos seleccionados" multiple />
        <label for="file-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
        <span class="iborrainputfile">Seleccionar archivo</span>
        </label>
      <TodoButtonCancelProfile/>
      <TodoButtonChangeProfile/>
    </form>
  );
}

export {TodoMenuProfile};