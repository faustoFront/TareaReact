import React from 'react';
import PropTypes from 'prop-types';
import {  Contacto } from '../../models/class.contacto';


const ComponenteTipoB = ( { contacto } ) => {
    return (
        <div>
            <h2>
                nombre : { contacto.name }
            </h2>
            <h3>
                apellido : { contacto.apellido }
            </h3>
            <h4>
                email : { contacto.email }
            </h4>
            <h5>
                Este contacto esta: { contacto.conectado ? 'Contacto en linea' : 'Contacto Desconectado' }
            </h5>
        </div>
    );
};


ComponenteTipoB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteTipoB;
