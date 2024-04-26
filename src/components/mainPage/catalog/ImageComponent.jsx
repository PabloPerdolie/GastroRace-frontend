import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ImageComponent = ({imagebytes}) => {
    const [imageUrl, setImageUrl] = useState('');
    
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const byteCharacters = atob(imagebytes);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
              
                const blob = new Blob([byteArray], { type: 'image/png' });
                
                const objectUrl = URL.createObjectURL(blob);
                setImageUrl(objectUrl)
            } catch (error) {
                console.log('Ошибка при выполнении запроса:', error);
            }
        };
        
        fetchImage();
    }, []);
    
    return (
        <div>
            {imageUrl && <img className="item-image" src={imageUrl} alt="Изображение"/>}
        </div>
    );
};

export default ImageComponent;