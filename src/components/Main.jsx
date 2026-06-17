import React from 'react';
import { IoWaterOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { FaBatteryFull } from "react-icons/fa";
import { GiBatteryPack } from "react-icons/gi";
import { IoHardwareChipOutline } from "react-icons/io5";
import { RiCameraLensFill } from "react-icons/ri";
import { MdBorderAll } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { SiNfc } from "react-icons/si";
import { FaMemory } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PRODUCTS } from '../utils/Contants';


function Main(props) {
    return (
        <body className='bg-gray-300'>
            <div className='mx-20 my-5 p-5 rounded-2xl bg-white'>
                <p className='font-bold text-4xl'>Chọn thiết bị lên đời cho mọi trận cầu</p>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-3 gap-3 '>
                    {
                        PRODUCTS.map((item, index) => (
                            <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                                <div className='py-8 px-3'>
                                    <div className='flex items-center gap-6 h-50'>
                                        <img className='w-40 h-40 ' src={item.img} alt="" />
                                        <div className='text-[10px] h-44'>
                                            <ul className='flex flex-col items-center mb-1'>
                                                <IoWaterOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                                <p className='text-center'>Kháng nước<br />IP64</p>
                                            </ul>
                                            <ul className='flex flex-col items-center mb-1'>
                                                <RiGeminiFill className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-blue-400' />
                                                <p>Tích hợp AI</p>
                                            </ul>
                                            <ul className='flex flex-col items-center mb-1'>
                                                <FaBatteryFull className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                                <p className='text-center'>Pin 5300 <br />mAh</p>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='bg-gray-200 border-0 px-2 rounded-3xl'>Trả góp 0%</button>
                                        <h6 className='line-through mt-2'>{item.originalPrice}</h6>
                                        <h4 className='font-bold text-2xl'>{item.price}</h4>
                                        <p className='text-green-400'>{item.sale}</p>
                                        <p className='mt-4'>{item.productname}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mx-20 my-5 p-5 rounded-2xl bg-white'>
                <p className='font-bold text-4xl'>Chọn thiết bị lên đời cho mọi trận cầu</p>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-3 gap-3 '>
                    <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                        <div className='py-8 px-3'>
                            <div className='flex items-center gap-6 h-50'>
                                <img className='w-40 h-40 ' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/oppo_reno15_f_xanh_5_a866ea3714.png" alt="" />
                                <div className='text-[10px] h-44'>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <FaStar className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Thiết kế<br />Mưa sao <br />băng</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <FaBatteryFull className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Pin 7000 <br />mAh</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <IoWaterOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Pin 5300 <br />mAh</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-gray-200 border-0 px-2 rounded-3xl'>Trả góp 0%</button>
                                <h6 className='line-through mt-2'>11.990.000đ</h6>
                                <h4 className='font-bold text-2xl'>11.790.000đ</h4>
                                <p className='text-green-400'>Giảm 200.000đ</p>
                                <p className='mt-4'>OPPO Reno15 F 5GB 8GB 256GB</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                        <div className='py-8 px-3'>
                            <div className='flex items-center gap-6 h-50'>
                                <img className='w-40 h-40 ' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_redmi_13x_xanh_5_2f17e30bdd.png" alt="" />
                                <div className='text-[10px] h-44'>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <RiCameraLensFill className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Camera<br />108MP</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <FaBatteryFull className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Pin 5030 <br />mAh</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <IoHardwareChipOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Helio G91<br />Ultra</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-gray-200 border-0 px-2 rounded-3xl '>Trả góp 0%</button>
                                <div className='flex gap-2 mt-2'>
                                    <h6 className='line-through'>4.190.000đ</h6>
                                    <h6 className='text-red-500'>-12%</h6>
                                </div>
                                <h4 className='font-bold text-2xl'>3.690.000đ</h4>
                                <p className='text-green-400'>Giảm 500.000đ</p>
                                <p className='mt-4'>Xiaomi Redmi 13x 8GB 128G</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                        <div className='py-8 px-3'>
                            <div className='flex items-center gap-6 h-50'>
                                <img className='w-40 h-40 ' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x7d_vang_5_3023d9c575.png" alt="" />
                                <div className='text-[10px] h44'>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <GiBatteryPack className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>6100 mAh</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <IoWaterOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Kháng nước <br />IP64</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <SiNfc className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>kết nối NFC</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-gray-200 border-0 px-2 rounded-3xl '>Trả góp 0%</button>
                                <div className='flex gap-2 mt-2'>
                                    <h6 className='line-through'>4.990.000đ</h6>
                                    <h6 className='text-red-500'>-6%</h6>
                                </div>
                                <h4 className='font-bold text-2xl'>4.690.000đ</h4>
                                <p className='text-green-400'>Giảm 300.000đ</p>
                                <p className='mt-4'>OPPO A6T 4GB 64GB</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                        <div className='py-8 px-3'>
                            <div className='flex items-center gap-6 h-50'>
                                <img className='w-40 h-40 ' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/nubia_v70_design_xanh_5_93acc5fb92.jpg" alt="" />
                                <div className='text-[10px] h-44'>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <SiNfc className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>6100 mAh</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <FaMemory className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Kháng nước <br />IP64</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <MdPhoneAndroid className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>kết nối NFC</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-gray-200 border-0 px-2 rounded-3xl '>Trả góp 0%</button>
                                <div className='flex gap-2 mt-2'>
                                    <h6 className='line-through'>4.990.000đ</h6>
                                    <h6 className='text-red-500'>-6%</h6>
                                </div>
                                <h4 className='font-bold text-2xl'>4.690.000đ</h4>
                                <p className='text-green-400'>Giảm 300.000đ</p>
                                <p className='mt-4'>OPPO A6T 4GB 64GB</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 rounded-2xl hover:shadow-2xl ">
                        <div className='py-8 px-3'>
                            <div className='flex items-center gap-6 h-50'>
                                <img className='w-40 h-40 ' src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x9d_do_5_5835eff2ec.png" alt="" />
                                <div className='text-[10px] h-44'>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <GiBatteryPack className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>8300 mAh</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <IoHardwareChipOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Snapdragon <br />6 Gen 4</p>
                                    </ul>
                                    <ul className='flex flex-col items-center mb-1'>
                                        <IoShieldCheckmarkOutline className='border-0 rounded-4xl bg-gray-200 p-1 text-3xl text-gray-400' />
                                        <p className='text-center'>Siêu bền IP69K <br /> bảo vệ rơi và 2.5m</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-gray-200 border-0 px-2 rounded-3xl '>Trả góp 0%</button>
                                <div className='flex gap-2 mt-2'>
                                    <h6 className='line-through'>4.990.000đ</h6>
                                    <h6 className='text-red-500'>-6%</h6>
                                </div>
                                <h4 className='font-bold text-2xl'>4.690.000đ</h4>
                                <p className='text-green-400'>Giảm 300.000đ</p>
                                <p className='mt-4'>OPPO A6T 4GB 64GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Main;