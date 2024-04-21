import React, { useState } from "react";

const SellRecordsTable = () => {
    // Dummy data for the table
    const data = [
        {
            hewan: "Ayam",
            famili: "Broiler",
            beratKelamin: "2 kg",
            usia: "4 weeks",
            vaksinStatus: "Vaccinated",
            status: "Belum Terjual",
        },
        {
            hewan: "Sapi",
            famili: "Holstein",
            beratKelamin: "400 kg",
            usia: "2 years",
            vaksinStatus: "Not Vaccinated",
            status: "Belum Terjual",
        },
        // Add more dummy data as needed
    ];

    // Function to handle the "Jual" button click
    const handleSell = (index) => {
        const newData = [...data];
        newData[index].status = "Terjual";
        newData[index].tanggalPenjualan = new Date().toLocaleDateString();
        setData(newData);
    };

    // State to store the table data
    const [tableData, setData] = useState(data);

    return (
        <>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Sales Data</h2>
                <table className="border border-gray-400">
                    <thead className="bg-gray-200 text-gray-900 bg-clip-border border-white">
                        <tr>
                            <th className="px-6 py-3 border border-gray-400">Sell Date</th>
                            <th className="px-4 border border-gray-400">Animal</th>
                            <th className="px-4 border border-gray-400">Family</th>
                            <th className="px-4 border border-gray-400">Weight (Kg)</th>
                            <th className="px-4 border border-gray-400">Age (Month)</th>
                            <th className="px-4 border border-gray-400">Vaccine Status</th>
                            <th className="px-4 border border-gray-400">Status</th>
                            <th className="px-4 border border-gray-400">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="border text-center border-gray-400">{row.tanggalPenjualan || "-"}</td>
                                <td className="border text-center border-gray-400">{row.hewan}</td>
                                <td className="border text-center px-4 py-3 border-gray-400">{row.famili}</td>
                                <td className="border text-center py-3 border-gray-400">{row.beratKelamin}</td>
                                <td className="border text-center px-4 py-3 border-gray-400">{row.usia}</td>
                                <td className="border text-center px-2 py-3 border-gray-400">{row.vaksinStatus}</td>
                                <td className="border text-center px-4 py-3 border-gray-400">{row.status}</td>
                                <td className="border text-center px-2 py-3 border-gray-400">
                                    <button onClick={() => handleSell(index)} className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white">Sell</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default function SellRecordContent() {
    return (
        <div>
            <SellRecordsTable />
        </div>
    );
}
