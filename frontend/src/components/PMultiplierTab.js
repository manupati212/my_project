import React, { useState } from 'react';
import axios from 'axios';

const PMultiplierTab = () => {
    const [pMultiplierStart, setPMultiplierStart] = useState(0);
    const [pMultiplierEnd, setPMultiplierEnd] = useState(0);
    const [soilLayers, setSoilLayers] = useState([{ id: 1, value: "" }]);

    const addSoilLayer = () => {
        setSoilLayers([...soilLayers, { id: soilLayers.length + 1, value: "" }]);
    };

    const handleSoilLayerChange = (id, value) => {
        setSoilLayers(soilLayers.map(layer => (layer.id === id ? { ...layer, value } : layer)));
    };

    const handleSubmit = () => {
        const data = {
            pMultiplierStart,
            pMultiplierEnd,
            soilLayers,
        };
        axios.post('http://localhost:5000/submit', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the data!', error);
            });
    };

    return (
        <div>
            <input type="number" value={pMultiplierStart} onChange={(e) => setPMultiplierStart(e.target.value)} placeholder="P Multiplier Start" />
            <input type="number" value={pMultiplierEnd} onChange={(e) => setPMultiplierEnd(e.target.value)} placeholder="P Multiplier End" />
            {soilLayers.map(layer => (
                <input key={layer.id} type="number" value={layer.value} onChange={(e) => handleSoilLayerChange(layer.id, e.target.value)} placeholder={`Soil Layer ${layer.id}`} />
            ))}
            <button onClick={addSoilLayer}>+ Add Soil Layer</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default PMultiplierTab;
