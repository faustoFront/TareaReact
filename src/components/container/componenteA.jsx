import React from 'react';
import { Contacto } from '../../models/class.contacto';
import ComponenteTipoB from '../pure/componentB';

const ComponenteTipoA = () => {
    const defaultcontacto = new Contacto ('fausto' , 'cuesta' ,  false , 'fausto@react.con' );

    return (
        <div>
            <div>
               Contacto: 
            </div>
            <ComponenteTipoB contacto= { defaultcontacto }></ComponenteTipoB>
        </div>
    );
}

export default ComponenteTipoA;
