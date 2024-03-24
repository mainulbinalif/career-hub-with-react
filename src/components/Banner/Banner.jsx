
const Banner = () => {
    return (
        <div>
            
            <div className="hero">
                <div className="flex items-center my-10 flex-col lg:flex-row-reverse">
                    <img   src={'https://s3-alpha-sig.figma.com/img/c9e1/6e7f/f08ea6879086ec2f1f8dc7cba5fe18c3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXb7cTGwCGMqbGPfsjDmmbKIDT6Lgiq-0M~5DR6tgMdmARZk5sM2pSCZ6pKvPwFZDczeWH~7YmpkoEV~HVpsKl2em5OjRUGNvkFkfrKtNp2qrsJTlLD9nRdscq4S9lvMNWoNRFIr1ogJ6eIpAVtg4KPoo8uJ~TtoJSl5lcf12J1p7V7YYKw7Ooc0Yox9sgxFeAp~p-Dr6aqBYMRnqO3fZ3naPGTwE9WXwUmKfIDa7wXgxsLBt59G5YEmWfOxDwlg9QkVYvWPkwEOSdvtWBVyAeUjiQbU6OB90sBPSRww6GcSEPepwMR3kRFwNodHHMuJdUDorpLpK3ii6p4X7etTzw__'} className="lg:ml-20 max-w-2xl" />
                    <div className="max-w-xl">
                        <h1 className="text-7xl font-extrabold mb-6 leading-tight">One Step Closer To Your <br /> <span className="text-indigo-400">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn text-white bg-gradient-to-r from-indigo-400 to-indigo-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;