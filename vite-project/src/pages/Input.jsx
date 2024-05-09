import { useState } from 'react';
import axios from 'axios';

function Input() {
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');
    const [potassium, setPotassium] = useState('');
    const [result, setResult] = useState(null);



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/submit-form', {
                calories: parseFloat(calories),
                protein: parseFloat(protein),
                fat: parseFloat(fat),
                potassium: parseFloat(potassium),
            });
            const result = response.data;
            setResult(result);


            console.log(response.data); // Handle the response from the server
        } catch (error) {
            console.error(error);
        }
    };

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
    };

    const handleProteinChange = (event) => {
        setProtein(event.target.value);
    };

    const handleFatChange = (event) => {
        setFat(event.target.value);
    };

    const handlePotassiumChange = (event) => {
        setPotassium(event.target.value);
    };

    return (
        <>
            {result && (
                <div>
                    <h1>Optimal Cost</h1>
                    {JSON.stringify(result)}
                </div >
            )
            }

            {
                !result && <div>

                    <div className="py-3 font-bold text-center">
                        Enter the following details to get your optimal cost diet
                    </div>            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Calories</label>
                            <input type="number" value={calories} onChange={handleCaloriesChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Protein</label>
                            <input type="number" value={protein} onChange={handleProteinChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Fat</label>
                            <input type="number" value={fat} onChange={handleFatChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Potassium</label>
                            <input type="number" value={potassium} onChange={handlePotassiumChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>





                        <button type="submit" className="bg-gray-800   text-white font-bold text-2xl py-2 px-4 rounded-md py-3 hover:scale-105   "    > Submit</button>

                    </form>
                </div>
            }
        </>

    );
}

export default Input;