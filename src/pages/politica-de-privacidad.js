import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { container, go_back } from "../styles/legal.module.scss"
import { IntlProvider } from "react-intl"
import { LOCALES } from "../translations/locales"

const PoliticaPrivacidad = () => {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.SPANISH)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <IntlProvider locale={currentLocale}>
      <div className={container}>
        <Link to="/">
          <p className={go_back}>{"<--"} volver a la web</p>
        </Link>
        <h2>Política de protección de datos</h2>
        <p>
          Al utilizar el presente sitio web y/o al comunicarse electrónicamente
          con <span style={{ color: "orange" }}>Carles Folguera</span>, se
          recogen y tratan datos personales de los usuarios. Dicho tratamiento
          se rige por esta política de privacidad en los siguientes términos:
        </p>
        <h5>Responsable del tratamiento</h5>
        <p>
          El responsable es la entidad{" "}
          <span style={{ color: "orange" }}>Carles Folguera</span> con CIF{" "}
          <span style={{ color: "orange" }}>nº CIF</span> y domicilio social en{" "}
          <span style={{ color: "orange" }}>
            carrer, població i codi postal{" "}
          </span>
          (en adelante, el “Responsable”), inscrita en el Registro Mercantil de
          Barcelona al{" "}
          <span style={{ color: "orange" }}>nº Tomo, nº folio, nº hoja</span>.
        </p>
        <h5>Consentimiento y mayoría de edad</h5>
        <p>
          El usuario manifiesta ser mayor de edad y acepta que los datos cedidos
          quedarán incorporados en nuestros ficheros y serán tratados según lo
          establecido en nuestra Política de Privacidad, Política de Cookies y
          Condiciones de Uso del Sitio Web.
        </p>
        <h5>Tipo de datos</h5>
        <p>
          Los datos se corresponden con datos personales, identificativos y de
          contacto, de aquellas personas que se han puesto en contacto con
          nosotros para participar en nuestras promociones, solicitar
          información o recibir algún servicio.
        </p>
        <h5>Finalidad</h5>
        <p>
          Tratamos la información que nos facilitan los usuarios con el fin de
          atender las peticiones recibidas (participación en promociones,
          adquisición de productos, solicitudes de información, participación en
          la comunidad, compra de productos o prestación de servicios. <br />
          Asimismo, cuando el usuario haya dado su consentimiento expreso a tal
          efecto o cuando la legislación y/o el interés legítimo lo permita le
          mantendremos informado de nuestra actividad y novedades comerciales.
        </p>
        <h5>Confidencialidad y conservación de datos</h5>
        <p>
          Los datos serán conservados mientras la relación existente con el
          usuario siga vigente y éste no solicite la supresión de los mismos.
          Cuando los datos personales ya no sean necesarios para dar
          cumplimiento al fin para el cual fueron recabados y mientras los
          mismos no sean cancelados se conservarán de forma bloqueada para
          responder ante posibles reclamaciones. Los datos personales serán
          siempre tratados de forma confidencial.
        </p>
        <h5>Justificación del tratamiento</h5>
        <p>
          El tratamiento encuentra su base legal en el consentimiento otorgado
          por el interesado o, en su caso, en el interés legítimo del
          Responsable en mantener la relación existente con el usuario o para
          ejecutar un contrato.
        </p>
        <h5>Medidas de seguridad</h5>
        <p>
          Los datos personales de los usuarios serán protegidos garantizando un
          nivel de seguridad adecuado de conformidad con la normativa existente
          en materia de protección de datos.
        </p>
        <h5>Derechos del usuario</h5>
        <p>
          El usuario podrá ejercer sus derechos de acceso, rectificación,
          supresión, limitación y oposición o solicitar la portabilidad de sus
          datos así como revocar el consentimiento prestado en cualquier momento
          enviando un correo electrónico a carlesfolguerafelip@gmail.com, siempre adjuntando
          una fotocopia del DNI. Para garantizar la confidencialidad de los
          datos, nos reservamos el derecho de adoptar todas las medidas
          razonables para confirmar la identidad del usuario antes de
          proporcionarle información sobre los datos personales que podamos
          tener.
        </p>
        <div>
          <p>En particular, podrá solicitar:</p>
          <ul>
            <li>
              El acceso a sus datos personales para saber cuáles de ellos
              estamos tratando y con qué finalidades.
            </li>
            <li>La rectificación de datos personales inexactos.</li>
            <li>
              La supresión de sus datos personales cuando la legislación lo
              permita.
            </li>
            <li>La limitación en el tratamiento de sus datos personales.</li>
            <li>
              La portabilidad de sus datos cuando la legislación lo permita.
            </li>
            <li>La oposición al tratamiento de sus datos personales.</li>
            <li>
              La revocación de su consentimiento al tratamiento de sus datos
              personales.
            </li>
          </ul>
        </div>
        <p>
          En todo caso, si considera que sus datos personales no han sido
          tratados correctamente podrá presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es).
        </p>
      </div>
    </IntlProvider>
  )
}

export default PoliticaPrivacidad
