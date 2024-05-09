import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            console.log("itklsdafl");
            setResult(result);



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
                <div >
                    <div className='grid grid-cols-2 gap-10 py-20'>
                        <div className='flex gap-5 items-center flex-col'>
                            <div className='text-6xl'>Optimal Cost</div>
                            <h1 className='text-5xl'>Rs. {(result.optimal_cost / 10).toFixed(2)}</h1>


                        </div>
                        <div>
                            <div className='text-3xl flex flex-col gap-5'>
                                <div className='text-3xl bg-pink-800 text-white text-center inline p-2 rounded-xl '>What to Eat</div>
                                <div>
                                    {Object.entries(result.solution).map(([key, value]) => (
                                        <li key={key}>
                                            <span className="font-semibold capitalize">{key}:</span>{' '}
                                            {(value * 10).toFixed(2)}g
                                        </li>
                                    ))}
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className='flex justify-center'>
                        <div className='font-bold px-3 py-4 text-2xl bg-pink-800 text-white rounded-md inline-block'>
                            <Link className="block text-center" to="/">Check Another</Link>
                        </div>
                    </div>

                </div >


            )
            }

            {
                !result && <div>

                    <div className="py-3 font-bold text-center">
                        Enter the following details to get your optimal cost diet
                    </div>            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Calories(kcal)</label>
                            <input type="number" value={calories} onChange={handleCaloriesChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Protein(g)</label>
                            <input type="number" value={protein} onChange={handleProteinChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Fat(g)</label>
                            <input type="number" value={fat} onChange={handleFatChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Potassium(mg)</label>
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