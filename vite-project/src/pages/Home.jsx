import { FaUsers } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";


function Home() {
    return (

        <>
            <div className="bg-gray-50  p-10 pb-20">
                <div className=" text-center text-2xl text-pink-800 font-bold">India's First </div>
                <div className="text-center">
                    <div className="inline-block">
                        <p className="text-center text-5xl py-6  text-gray-900   font-extrabold space-x-1 w-full whitespace-nowrap overflow-hidden animate-typing" > Minimum Cost Diet Planner</p></div></div>
                <div className="text-gray-900 text-center w-2/3 mx-auto">Welcome to OptiDiet, your ultimate solution for creating a personalized minimum cost diet plan that fulfills all your nutritional requirements.</div>
                <div className="text-center mt-10">
                    <button className="bg-gray-800   text-white font-bold text-2xl py-2 px-4 rounded-md py-3 hover:scale-105   "    > Get Started</button>
                </div>

            </div>

            <div className="grid grid-cols-4 gap-6 p-6 bg-pink-900 text-white   ">
                <div className="flex flex-col gap-2 text-center">
                    <div className="text-5xl block mx-auto font-bold animate-shining"><FaUsers /></div>
                    <div className="text-2xl font-bold ">Used by 10,000+ users</div>
                    <div>Our customer use our efficient algorithms to get an optimal diet plan </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="text-5xl block mx-auto font-bold"><MdStarRate /></div>
                    <div className="text-2xl font-bold ">Rating 4.8+</div>
                    <div>Our customer are Happy with our product. Ratings are based on our customer feedback</div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="text-5xl text-pink- block mx-auto font-bold"><MdLeaderboard /></div>
                    <div className="text-2xl font-bold ">Leader in Applications</div>
                    <div>Adopted by proffesionals and organization </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="text-5xl block mx-auto font-bold"><GiTrophy /></div>
                    <div className="text-2xl font-bold ">Best Award</div>
                    <div>Our Application won the best software applicaiton award 2024</div>
                </div>


            </div>

            <div className="grid grid-cols-2 bg-gray-50 p-5 text-gray-900 ">
                <div className="font-bold grid grid-cols-1 items-center mx-auto size-full ">
                    <div className="text-9xl mx-auto inline-block  animate-flip w-  ">                    <MdOutlineFeaturedPlayList />
                    </div>

                </div>
                <div className="py-6">
                    <div className="text-3xl block mx-auto font-bold">
                        Key Features of OptiDiet:


                    </div>
                    <div className=" py-2 flex flex-col items center gap-6">
                        <div className="flex gap-2 items-center">
                            <div>
                                <FaAngleDoubleRight />

                            </div>
                            <div>
                                Personalized Nutritional Requirements - takes care of calorie intake, macronutrient ratios, and micronutrient targets
                            </div>

                        </div>
                        <div className="flex gap-2 items-center">
                            <div >
                                <FaAngleDoubleRight />

                            </div>
                            <div>
                                Cost Optimization:  selects food items that meet your nutritional requirements while minimizing your expenditure.
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div >
                                <FaAngleDoubleRight />

                            </div>
                            <div>
                                Scale adoption with automation and proactively monitor company-wide password health.
                            </div>
                        </div>



                    </div>
                </div>
            </div>



        </>
    )
}

export default Home