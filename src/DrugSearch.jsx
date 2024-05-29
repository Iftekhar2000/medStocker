import { useState } from 'react';
import PropTypes from 'prop-types';

const DrugSearch = ({ lowStockColor, mediumStockColor, highStockColor }) => {
  const [query, setQuery] = useState('');
  const [drugInfo, setDrugInfo] = useState(null);

  const mockDrugDatabase = [
    { name: 'Aspirin', price: 'BDT 10', stock: 20, barcode: '123456', shelf: 'A1' },
    { name: 'Tylenol', price: 'BDT 12', stock: 15, barcode: '789012', shelf: 'B2' },
    { name: 'Ibuprofen', price: 'BDT 8', stock: 45, barcode: '345678', shelf: 'C3' },
    { name: 'Paracetamol', price: 'BDT 5', stock: 50, barcode: '987654', shelf: 'D1' },
    { name: 'Cetirizine', price: 'BDT 6', stock: 30, barcode: '654321', shelf: 'E2' },
    { name: 'Amoxicillin', price: 'BDT 20', stock: 10, barcode: '111222', shelf: 'F3' },
    { name: 'Metformin', price: 'BDT 25', stock: 25, barcode: '333444', shelf: 'G1' },
    { name: 'Omeprazole', price: 'BDT 15', stock: 35, barcode: '555666', shelf: 'H2' },
    { name: 'Simvastatin', price: 'BDT 18', stock: 5, barcode: '777888', shelf: 'I3' },
    { name: 'Atorvastatin', price: 'BDT 22', stock: 40, barcode: '999000', shelf: 'J1' },
    { name: 'Clopidogrel', price: 'BDT 30', stock: 12, barcode: '222333', shelf: 'K2' },
    { name: 'Losartan', price: 'BDT 28', stock: 18, barcode: '444555', shelf: 'L3' },
    { name: 'Azithromycin', price: 'BDT 35', stock: 60, barcode: '666777', shelf: 'M1' },
  ];

  const handleSearch = () => {
    const result = mockDrugDatabase.find(
      (drug) => drug.name.toLowerCase() === query.toLowerCase() || drug.barcode === query
    );
    setDrugInfo(result || { name: 'Not Found', price: 'N/A', stock: 'N/A', shelf: 'N/A' });
  };

  const getStockColor = (stock) => {
    if (stock < 20) return lowStockColor;
    if (stock >= 20 && stock <= 40) return mediumStockColor;
    return highStockColor;
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h1>Available Drugs</h1>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {mockDrugDatabase.map((drug) => (
              <li key={drug.barcode} style={{ marginBottom: '10px' }}>
                {drug.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <h1>Med<span style={{ color: 'green' }}>Stocker</span></h1>
          <div>
            <input
              type="text"
              placeholder="Search by drug name or barcode"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px' }}
            />
            <button
              onClick={handleSearch}
              style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px', color: "black" }}
            >
              Search
            </button>
          </div>
          {drugInfo && (
            <div style={{ marginTop: '20px' }}>
              <h2>Drug Information</h2>
              <p><strong>Name:</strong> {drugInfo.name}</p>
              <p><strong>Price:</strong> {drugInfo.price}</p>
              <p><strong>Shelf Number:</strong> {drugInfo.shelf}</p>
              <p>
                <strong>Amount in Stock:</strong>
                <span style={{ marginLeft: '10px' }}>
                  {drugInfo.stock}
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: getStockColor(drugInfo.stock),
                      borderRadius: '50%',
                      marginLeft: '5px',
                    }}
                  ></span>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
        <h2>Stock Status Legend</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              backgroundColor: 'green',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          ></span>
          <span>Sufficient Stock</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              backgroundColor: 'yellow',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          ></span>
          <span>Stock Running Out</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          ></span>
          <span>Call Supplier</span>
        </div>
      </div>
    </>
  );
};

DrugSearch.propTypes = {
  lowStockColor: PropTypes.string,
  mediumStockColor: PropTypes.string,
  highStockColor: PropTypes.string,
};

DrugSearch.defaultProps = {
  lowStockColor: 'red',
  mediumStockColor: 'yellow',
  highStockColor: 'green',
};

export default DrugSearch;
