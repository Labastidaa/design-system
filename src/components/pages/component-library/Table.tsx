const Table = () => {
  return (
    <div className="w-full rounded-md border">
      <table className="w-full">
        <thead>
          <tr className="h-48 border-b p-8">
            <th></th>
            <th>Contact</th>
            <th>Country</th>
            <th className="px-20"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-48">
            <td className="px-20">
              <input type="checkbox" />
            </td>
            <td className="text-center">Maria Lopez</td>
            <td className="text-center">🇲🇽 Mexico</td>
            <td className="px-20">
              <img src="/dots.svg" alt="" />
            </td>
          </tr>
          <tr className="h-48">
            <td className="px-20">
              <input type="checkbox" checked readOnly />
            </td>
            <td className="text-center">Daniel Hernandez</td>
            <td className="text-center">🇧🇷 Brasil</td>
            <td className="px-20">
              <img src="/dots.svg" alt="" />
            </td>
          </tr>
          <tr className="h-48">
            <td className="px-20">
              <input type="checkbox" />
            </td>
            <td className="text-center">Laura Gonzalez</td>
            <td className="text-center">🇨🇴 Colombia</td>
            <td className="px-20">
              <img src="/dots.svg" alt="" />
            </td>
          </tr>
          <tr className="h-48">
            <td className="px-20">
              <input type="checkbox" checked readOnly />
            </td>
            <td className="text-center">Jose Ramírez</td>
            <td className="text-center">🇧🇴 Bolivia</td>
            <td className="px-20">
              <img src="/dots.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
