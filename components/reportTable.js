

export default function ReportTable({ reports }) {
  if (!Array.isArray(reports) || reports.length === 0) {
    return <h2>No Cookie Stands Available</h2>;
  }

  const totalCookiesPerHour = new Array(14).fill(0);
  reports.forEach((report) => {
    report.hourly_sales.forEach((cookies, i) => {
      totalCookiesPerHour[i] += cookies;
    });
  });

  return (
    <table className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <thead>
        <tr>
          <th className="pl-8 pr-8">Location</th>
          {hours.map(hour => (
            <th className="pl-3 pr-3" key={hour}>{hour}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => {
            let rowTotal = report.hourly_sales.reduce((a, b) => a + b, 0);
            return (
                <tr key={report.id}>
                    <td>{report.location}</td>
                    {report.hourly_sales.map((cookies, i) => (
                        <td key={i}>{cookies}</td>
                    ))}
                    <td>{rowTotal}</td>
                </tr>
            )
        })}
    </tbody>
      <tfoot>
        <tr>
          <td>Totals</td>
          {totalCookiesPerHour.map((cookies, i) => (
            <td key={i}>{cookies}</td>
          ))}
          <td>{totalCookiesPerHour.reduce((a, b) => a + b, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
}
