import React from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "./ChartsStyle.css";


const data = [
    { label: 'Today Active', sales: 21, leads: 41 },
    // { label: 'Bounce Rate', sales: 35, leads: 79 },
    // { label: 'New Users', sales: 75, leads: 57 },
    { label: 'Total Users', sales: 51, leads: 47 },
    // { label: 'Number of meeting', sales: 41, leads: 63 },
    { label: 'Search Engines', sales: 47, leads: 71 }
];

export default function Charts() {
    return (
        <section>
        <div className="row">
        <div className="col-md-12">
            {/* <h2>Charts with recharts library</h2> */}
        </div>

        <div className="section-col-md-6">
            <h3 className="section-title">Line Chart</h3>
            <div className="section-content">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                <Tooltip />
                <XAxis dataKey="label" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Legend/>
                <Line type="monotone" dataKey="sales" stroke="#36b9cc" />
                <Line type="monotone" dataKey="leads" stroke="#f6c23e" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>

        <div className="section-col-md-6">
            <h3 className="section-title">Bar Chart</h3>
            <div className="section-content">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                <XAxis dataKey="label" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
                <Legend/>
                <Bar dataKey="sales" fill="#36b9cc" />
                <Bar dataKey="leads" fill="#f6c23e" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

        </div>
        </section>
    )
}