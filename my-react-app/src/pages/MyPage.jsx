function MyPage(props) {

  

    return (
        <>
            <section className="bg-[url('https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg')] w-full bg-cover bg-center">

            
                <section className="items-center p-3 h-full sm:h-screen">



                    <section class="text-center mt-20 items-center h-[66vh] flex flex-col justify-center ml-10 mr-10 ">

                        <h1 className="sm:text-5xl text-2xl font-bold leading-tight text-gray-900"> {props.heading1 }</h1>
                        <h1 className="sm:text-5xl text-2xl font-bold leading-tight text-gray-900"> {props.heading2 }</h1>

                        <p className="text-lg mt-6 text-gray-500">
                          {props.para}
                        </p>

                        <div className="mt-8 flex flex-col items-center sm:flex-row gap-7 ">
                       <a href="" className="px-6 py-3 bg-blue-900 text-white text-lg w-full sm:w-fit        rounded-md hover:bg-blue-900">
                            {props.btntxt}
                        </a>
                        {props.showInput &&(
                             <div>
                             <input 
                               type="text"
                               placeholder="Quick Search..."
                               className="p-2 border w-full border-gray-700 rounded-lg"
                             />
                           </div>
                        )
                        }
                      
                            
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default MyPage