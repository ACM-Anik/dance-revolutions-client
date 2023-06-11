import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';


const Banner = () => {

    const [sliderCategories, setSliderCategories] = useState([]);

    useEffect(() => {
        fetch('https://dance-revolutions-server.vercel.app/slider-categories')
            .then(res => res.json())
            .then(data => {
                setSliderCategories(data);
                // console.log(data);
            })
    }, [])



    return (
        <Swiper
            className=''
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}

        >
            {
                sliderCategories.map(category => <SwiperSlide key={category._id}>
                    <div className=''>
                        <img className='relative h-[320px] md:h-[600px] object-cover' src={category.image} style={{ width: '100%' }} alt="" />
                        <div className="absolute flex items-center justify-center text-center h-full left-0 bottom-0 right-0 rounded bg-gradient-to-t from-[#1a1818] to-[#11101030]">
                            <div className='text-white space-y-6 w-5/6 lg:w-1/2 mx-auto'>
                                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>{category.name}</h2>
                                <p className='text-base'>{category.description}</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <button className='btn text-black rounded-lg border-0 bg-white hover:bg-[#d2d0d0]'>Explore All</button>
                                    <button className='btn btn-outline text-white rounded-lg border-2 border-white  hover:bg-black'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Banner;