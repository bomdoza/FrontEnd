import React from 'react'

const Tecnicas = ({ tecnicas }) => {

  return (
    <div className='container'>
        <div className="mt-10 ml-4 p-1">
            <h2 className="text-xl font-semibold mb-2">Técnicas Utilizadas</h2>
            <ul className="list-disc list-inside text-body-color">
              {tecnicas.map((tecnica, index) => (
                <li key={index}>{tecnica}</li>
              ))}
            </ul>
        </div>
    </div>
  )

}
export default Tecnicas;

