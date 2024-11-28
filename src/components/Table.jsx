import React from 'react'

function Table({ head, body, className, editButton, deleteButton }) {
  // console.log(head)

  console.log(editButton)
  return (
    <table className={`min-w-fit sm:min-w-full table-auto border-collapse border border-gray-300 overflow-auto m-auto mt-4 sm:my-6 ${className}`}>
      <thead className="bg-gradient-to-r from-purple-200 to-indigo-200 text-gray-800 ">
        <tr>
          {
            head?.map((item, index) =>
              <th className="border border-gray-300 p-2 text-left text-sm font-medium" key={index}>{item}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          body?.map((row, rowIndex) => (
            <tr className="bg-white hover:bg-gray-50 transition-colors" key={rowIndex}>
              {
                row.map((item, index) => (
                  <td className="border border-gray-300 p-2 text-sm" key={index}>
                    {item}
                  </td>
                ))
              }
              {/* Render the editButton and deleteButton conditionally */}
              {(editButton || deleteButton) && (
                <td className="border border-gray-300 p-2 text-sm">
                  {editButton && <span className="cursor-pointer">{editButton}</span>}
                  {deleteButton && <span className="cursor-pointer ml-2">{deleteButton}</span>}
                </td>
              )}
            </tr>
          ))
        }
      </tbody>

    </table >
  )
}

export default Table