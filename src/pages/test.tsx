import csv from 'csv-parse/sync';
import { jsPDF } from 'jspdf';
import { useState, useEffect } from 'react';

const test: React.FC = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        fetch('/api/generate-pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            });
    }, []);


    return ( 
        <div>
            <h1>CSV</h1>
            {pdfUrl && (
                <a href={pdfUrl} download="output.pdf">Download PDF</a>
            )}
        
        </div>
    )
}
export default test;
