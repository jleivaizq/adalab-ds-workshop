/** 
  * Task description: 
  * Given a text, return a list of pairs showing frequency of appearance for each word
  *  - The text only contains alphanumeric characters and spaces
  *  - Work shouldn't be repeated in the list of frequencies
  *  - The list should be sorted by frequency
  * @param {string} text - text provide per the above conditioins
  * @returns {list}  - List of pairs including word frequency
*/

const wordFrequency = (text) => {
    // Complete 
}

const text = `Las empresas tecnológicas tienen ante ellas un gran desafío encontrar talento preparado para hacer frente a sus retos 
    Dar con profesionales formados y motivados que además aporten diversos enfoques y virtudes a la compañía es una de las mayores 
    dificultades a las que se enfrentan los departamentos de recursos humanos del sector  Con esta necesidad en mente, en Adalab 
    formamos a mujeres para que desarrollen su carrera profesional como programadoras web y aporten sus conocimientos y su trayectoria 
    a un sector que puede enriquecerse mucho con su participación Nuestras alumnas no solo reciben una formación técnica sino que 
    aprenden a trabajar en un sector cambiante y cuentan con amplias habilidades para el trabajo en equipo Una adalaber puede aportar 
    a tu equipo la combinación de talento y motivación que estabas buscando Al finalizar las 12 semanas de curso intensivo, todas 
    nuestras alumnas están listas para incorporarse al mercado laboral como programadoras web En primer lugar durante la formación 
    nuestras alumnas adquieren formación técnica y profesional en un entorno agile Eso les permite no solo aprender lo necesario para 
    comenzar a programar sino una serie de habilidades y técnicas que les permitirán seguir formándose y creciendo profesionalmente 
    durante el resto de su carrera Aquí puedes leer en detalle cómo aplicamos la filosofía agile a nuestro día a día docente Pero 
    además el currículo del curso presencial intensivo ha sido diseñado teniendo en cuenta los requisitos más importantes de las 
    empresas que están contratando talento junior Eso nos permite garantizar que el nivel técnico en desarrollo web es lo 
    suficientemente alto como para que una empresa quiera apostar por ellas e incorporarlas a su equipo`

let frequencies = wordFrequency(text.replace(/^\n\t+/i));
console.log(JSON.stringify(frequencies));