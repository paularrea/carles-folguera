import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { container, go_back } from "../styles/legal.module.scss"
import { IntlProvider } from "react-intl"
import { LOCALES } from "../translations/locales"

const AvisoLegal = () => {
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
        <h2>Aviso legal</h2>
        <p>
          Este aviso legal regula las condiciones de uso (en adelante,
          "Condiciones de Uso") del sitio web{" "}
          <span style={{ color: "orange" }}>carlesfolguera.com</span> (en
          adelante, "el Sitio Web"). El acceso y uso de este Sitio Web implica
          la aceptación de las Condiciones de Uso así como la Política de
          Privacidad de Datos y la Política de Cookies del Sitio Web.
        </p>
        <p>
          El Titular se reserva el derecho a modificar el Sitio Web así como las
          presentes Condiciones de Uso en cualquier momento y sin previo aviso.
          Asimismo, el Titular puede, en cualquier momento, decidir cesar en el
          uso del Sitio Web o dar de baja el nombre de dominio en el que se
          aloja.
        </p>
        <h5>Titularidad</h5>
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
        <h5>Uso adecuado</h5>
        <p>
          El usuario del Sitio Web acepta las Condiciones de Uso y se compromete
          a hacer un uso adecuado del Sitio Web, evitando cualquier actuación
          que pueda dañarlo, inutilizarlo, sobrecargarlo o impedir, de cualquier
          manera, su normal utilización. <br />
          El usuario se obliga a no utilizar este Sitio Web ni la información
          que contiene para llevar a cabo actividades contrarias a las leyes, a
          la moral o al orden público.
        </p>
        <h5>Derechos de propiedad intelectual e industrial</h5>
        <p>
          Los derechos de propiedad intelectual sobre el Sitio Web, los
          diferentes elementos que lo componen, el código fuente y las marcas,
          diseños, creaciones literarias, fotográficas y audiovisuales que
          aparecen son propiedad del Titular o bien éste ha sido autorizado para
          su utilización. Queda, por tanto, prohibida su reproducción,
          distribución, comunicación pública o transformación, total o parcial,
          sin autorización expresa y por escrito del Titular. <br />
          Está prohibido eliminar o modificar la autoría del Sitio Web así como
          de cualquiera de los elementos que lo componen, incluyendo el símbolo
          de copyright y medidas técnicas de protección como, a título
          ejemplificativo, huellas digitales. <br />
          En caso de que el usuario considere que el Sitio Web vulnerase alguno
          de sus derechos de propiedad intelectual o industrial debe ponerse en
          contacto con el Titular en la dirección{" "}
          <span style={{ color: "orange" }}>{"[ ]"}</span> acreditando ser el
          titular de aquellos derechos que considere infringidos. <br />
        </p>
        <h5>Responsabilidad</h5>
        <p>
          Los contenidos del Sitio Web tienen carácter meramente informativo y
          generalista. Las consecuencias del uso que el usuario pueda hacer de
          los contenidos, son responsabilidad exclusiva de éste. <br />
          El usuario es el único responsable de contar con mecanismos
          informáticos que protejan su equipamiento de virus o software maligno,
          excluyendo cualquier responsabilidad del Titular por los daños
          producidos en equipos informáticos durante la utilización del Sitio
          Web. <br />
          El Titular no será responsable de los errores en los contenidos del
          Sitio Web pero actuará con la mayor diligencia para evitarlos o, en su
          caso, subsanarlos a la mayor brevedad. <br />
        </p>
        <h5>Enlaces a otros sitios web</h5>
        <p>
          El Sitio Web puede incluir enlaces a otros sitios web titularidad de
          terceros sin que ello signifique que el Titular muestre su conformidad
          con su contenido, que realice algún tipo de promoción o que exista
          algún vínculo comercial. El Titular los comparte con fines meramente
          informativos y/o divulgativos y desconoce su contenido exacto. Por
          tanto, no puede ser tenido por responsable de la licitud,
          disponibilidad, relevancia y veracidad de los contenidos o servicios
          prestados a través de las páginas web a las que redirigen dichos links
          a otros sitios web. <br />
          En cualquier caso, si el Usuario detectara que los sitios web
          enlazados alojan contenidos ilícitos, ofensivos, que atentan al honor
          o que vulneren derechos de propiedad intelectual de terceros, pueden
          dirigir un correo electrónico a carlesfolguerafelip@gmail.com
          exponiendo estos hechos.
        </p>{" "}
        <br />
        <h5>Enlaces al Sitio Web desde sitios web ajenos</h5>
        <p>
          El Sitio Web puede incluir enlaces a otros sitios web titularidad de
          terceros sin que ello signifique que el Titular muestre su conformidad
          con su contenido, que realice algún tipo de promoción o que exista
          algún vínculo comercial. El Titular los comparte con fines meramente
          informativos y/o divulgativos y desconoce su contenido exacto. Por
          tanto, no puede ser tenido por responsable de la licitud,
          disponibilidad, relevancia y veracidad de los contenidos o servicios
          prestados a través de las páginas web a las que redirigen dichos links
          a otros sitios web. <br />
          En cualquier caso, si el Usuario detectara que los sitios web
          enlazados alojan contenidos ilícitos, ofensivos, que atentan al honor
          o que vulneren derechos de propiedad intelectual de terceros, pueden
          dirigir un correo electrónico a carlesfolguerafelip@gmail.com
          exponiendo estos hechos. <br />
        </p>
        <h5>Enlaces a otras plataformas y redes sociales</h5>
        <p>
          El Sitio Web enlaza o puede enlazar a plataformas y/o redes sociales
          gestionadas por terceros con las que no mantiene ninguna vinculación y
          sobre las que no tiene ningún control, tales como Facebook e
          Instagram. <br />
          Se recomienda a los usuarios configurar sus perfiles en las referidas
          redes sociales conforme a sus estándares de privacidad y seguridad,
          así como tomar en consideración sus condiciones generales de uso, por
          ejemplo: <br />
          Facebook:{" "}
          <a href="https://www.facebook.com/policies?ref=pf">
            Enlace Facebook
          </a>
          <br />
          Instagram:
          <a href="https://www.instagram.com/terms/accept/?hl=en">
             Enlace Instagram
          </a>{" "}
          <br />
          El Titular no comparte información personal de los usuarios con dichas
          plataformas siendo exclusivamente responsabilidad del usuario la
          información que él mismo comparta o facilite a las referidas
          plataformas.
        </p>
        <h5>Continuidad y suspensión del Sitio Web </h5>
        <p>
          El Titular tiene el derecho de finalizar, interrumpir, suspender o
          restringir, temporal o permanentemente, el uso del Sitio Web, incluso
          sin previo aviso, sin que el usuario pueda exigir responsabilidad ni
          indemnidad alguna por ello.
          <br />
        </p>
        <h5>Protección de datos de carácter personal</h5>
        <p>
          Todos los datos de carácter personal facilitados por el usuario serán
          tratados conforme a la{" "}
          <Link to="/politica-de-privacidad">
            <p style={{ color: "#1268EA" }}>Política de Privacidad</p>
          </Link>{" "}
          accesible desde este Sitio Web.
          <br />
        </p>
        <h5>Vigencia</h5>
        <p>
          Las presentes Condiciones de Uso permanecerán vigentes mientras se
          hallen disponibles en el Sitio Web y hasta que sean modificadas, total
          o parcialmente. Las Condiciones de uso modificadas entrarán en vigor
          en el momento en que las mismas se publiquen en el Sitio Web.
          <br />
        </p>
        <h5>Legislación aplicable y jurisdicción</h5>
        <p>
          Será de aplicación a las presentes Condiciones de Uso la legislación
          española y cualquier litigio, siempre que el fuero fuese disponible,
          se someterá a los Juzgados y Tribunales de la provincia de Barcelona.
          <br />
          <br />
          Última actualización: abril 2022
        </p>
      </div>
    </IntlProvider>
  )
}

export default AvisoLegal
